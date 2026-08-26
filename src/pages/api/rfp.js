import nodemailer from "nodemailer";

/* Solicitation / partnership intake.
 *
 * Hardening applied here that the older contact route lacked:
 *   - every value is HTML-escaped before it reaches an email body, so a
 *     submitter cannot inject markup or a link into our staff inbox
 *   - explicit length caps, so the endpoint cannot be used to post megabytes
 *   - server-side validation that mirrors the client's, because client
 *     validation is a convenience and never a control
 *   - a honeypot field that real users never see and bots reliably fill
 *   - failures return a generic message; the detail goes to the server log
 */

export const config = { api: { bodyParser: { sizeLimit: "64kb" } } };

const LIMITS = {
  organisation: 200,
  name: 120,
  email: 254,
  phone: 40,
  type: 60,
  deadline: 60,
  summary: 5000,
};

const TYPES = new Set([
  "Solicitation / RFP",
  "Teaming or subcontracting",
  "Staffing requirement",
  "Training programme",
  "Research or evaluation",
  "General enquiry",
]);

// Deliberately permissive: the RFC grammar is far looser than most regexes
// allow, and rejecting a valid address is worse than accepting a junk one we
// simply fail to reach.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const ESCAPE = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (c) => ESCAPE[c]);

function validate(body) {
  const errors = {};
  const clean = {};

  for (const [field, max] of Object.entries(LIMITS)) {
    const raw = typeof body?.[field] === "string" ? body[field].trim() : "";
    if (raw.length > max) {
      errors[field] = `Please keep this under ${max} characters.`;
      continue;
    }
    clean[field] = raw;
  }

  if (!clean.organisation) errors.organisation = "Tell us which organisation you are with.";
  if (!clean.name) errors.name = "Please give us a name for the reply.";
  if (!clean.email) errors.email = "We need an email address to respond to.";
  else if (!EMAIL_RE.test(clean.email)) errors.email = "That does not look like a valid email address.";
  if (!clean.summary) errors.summary = "Tell us what you need, even in one line.";
  if (clean.type && !TYPES.has(clean.type)) errors.type = "Choose one of the listed enquiry types.";

  const pillars = Array.isArray(body?.pillars)
    ? body.pillars.filter((p) => typeof p === "string").slice(0, 10).map((p) => p.slice(0, 80))
    : [];

  return { errors, clean, pillars };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, message: "Method not allowed." });
  }

  // Honeypot: a field hidden from users. Anything in it is automated. Return
  // 200 so the bot cannot distinguish a rejection from a success.
  if (typeof req.body?.website_url === "string" && req.body.website_url.trim() !== "") {
    return res.status(200).json({ ok: true });
  }

  const { errors, clean, pillars } = validate(req.body);
  if (Object.keys(errors).length) {
    return res.status(400).json({ ok: false, errors });
  }

  const rows = [
    ["Enquiry type", clean.type || "Not specified"],
    ["Organisation", clean.organisation],
    ["Contact", clean.name],
    ["Email", clean.email],
    ["Phone", clean.phone || "Not given"],
    ["Services", pillars.length ? pillars.join(", ") : "Not specified"],
    ["Deadline", clean.deadline || "Not given"],
  ];

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#0b0f14;max-width:640px">
      <p style="font:600 12px monospace;letter-spacing:.12em;text-transform:uppercase;color:#c81e22;margin:0 0 4px">
        Round Digital — solicitation intake
      </p>
      <h1 style="font-size:20px;margin:0 0 20px">${escapeHtml(clean.type || "New enquiry")}</h1>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:7px 12px 7px 0;color:#5f6a77;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td>
            <td style="padding:7px 0;border-bottom:1px solid #dde1e5">${escapeHtml(value)}</td>
          </tr>`
          )
          .join("")}
      </table>
      <p style="font:600 12px monospace;letter-spacing:.12em;text-transform:uppercase;color:#5f6a77;margin:24px 0 6px">
        Requirement
      </p>
      <p style="white-space:pre-wrap;font-size:14px;line-height:1.6;margin:0">${escapeHtml(clean.summary)}</p>
    </div>`;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      // The From stays our own account — putting the submitter's address there
      // fails SPF/DKIM. Reply-To is what makes "reply" reach them.
      from: `"Round Digital website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      replyTo: clean.email,
      subject: `[${clean.type || "Enquiry"}] ${clean.organisation}`,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[api/rfp] send failed:", err);
    return res.status(502).json({
      ok: false,
      message:
        "Please email contracts@round.digital directly — your enquiry matters more than our form.",
    });
  }
}
