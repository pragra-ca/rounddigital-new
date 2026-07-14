import { useState } from "react";
import RdLayout from "@/components/rd/Layout";
import Seo from "@/components/seo";
import { RD_SERVICES } from "@/components/rd/Navbar";

const MONO = "'Space Mono',monospace";

const CONTACT_ROWS = [
  { label: "EMAIL", value: "info@rounddigital.co", href: "mailto:info@rounddigital.co" },
  { label: "PHONE", value: "+1 905-407-5009", href: "tel:+19054075009" },
  { label: "CA", value: "160B - 110 Matheson Blvd W, Mississauga, ON L5M 6B8" },
  { label: "US", value: "450 Century Pkwy, Ste 250, Allen, TX 75013" },
  { label: "IN", value: "Supreme HQ, 302, Mumbai-Pune Expressway, Baner, Pune 411045" },
];

const INITIAL = { name: "", email: "", company: "", service: RD_SERVICES[0].title, message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (status.state === "sending") return;
    setStatus({ state: "sending", message: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "Contact Page" }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.message || "Something went wrong.");
      }
      setStatus({ state: "success", message: "Message sent — we'll reply within one business day." });
      setForm(INITIAL);
    } catch (err) {
      setStatus({ state: "error", message: err.message || "Something went wrong. Please email us directly." });
    }
  };

  return (
    <RdLayout>
      <Seo
        title="Contact Us: Book a Free AI Strategy Call"
        description="30 minutes with a senior engineer, not a sales rep. Scope your highest-ROI AI or software opportunity — offices in Mississauga, Dallas and Pune. Call +1 905-407-5009."
        keywords="contact RoundDigital, book AI consultation, free strategy call, IT services Mississauga, Dallas, Pune"
      />
      <section style={{ padding: "96px 5% 80px" }}>
        <div className="rd-grid-2" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <p data-rd-reveal style={{ margin: 0, font: `700 14px ${MONO}`, letterSpacing: "0.12em", color: "var(--rd-accent)" }}>GET IN TOUCH</p>
            <h1 data-rd-reveal data-rd-reveal-delay="0.05" style={{ margin: 0, font: `700 clamp(40px,4.4vw,72px)/1.06 ${MONO}`, letterSpacing: "-0.01em" }}>
              Book a call. Leave with a plan.
            </h1>
            <p data-rd-reveal data-rd-reveal-delay="0.1" style={{ margin: 0, fontSize: 19, lineHeight: 1.65, color: "var(--rd-text-2)" }}>
              30 minutes with a senior engineer — not a sales rep. We&apos;ll scope your
              highest-ROI opportunity and tell you honestly if we&apos;re not the right fit.
            </p>
            <div data-rd-reveal data-rd-reveal-delay="0.15" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {CONTACT_ROWS.map((r) => (
                <div key={r.label} style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
                  <span style={{ font: `700 12px ${MONO}`, color: "var(--rd-accent)", width: 44, flexShrink: 0 }}>{r.label}</span>
                  {r.href ? (
                    <a href={r.href} style={{ color: "var(--rd-text-2)" }}>{r.value}</a>
                  ) : (
                    <span style={{ color: "var(--rd-text-2)" }}>{r.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form data-rd-reveal data-rd-reveal-delay="0.1" onSubmit={submit} className="rd-card" style={{ padding: "40px 36px", display: "flex", flexDirection: "column", gap: 16, borderRadius: 32 }}>
            <div style={{ font: `700 22px ${MONO}`, marginBottom: 4 }}>Prefer to write?</div>
            <div className="rd-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ font: `700 11px ${MONO}`, color: "var(--rd-text-3)" }}>FULL NAME *</span>
                <input className="rd-input" type="text" required placeholder="Jane Doe" value={form.name} onChange={update("name")} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ font: `700 11px ${MONO}`, color: "var(--rd-text-3)" }}>WORK EMAIL *</span>
                <input className="rd-input" type="email" required placeholder="jane@company.com" value={form.email} onChange={update("email")} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ font: `700 11px ${MONO}`, color: "var(--rd-text-3)" }}>COMPANY</span>
                <input className="rd-input" type="text" placeholder="Company Inc." value={form.company} onChange={update("company")} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ font: `700 11px ${MONO}`, color: "var(--rd-text-3)" }}>SERVICE</span>
                <select className="rd-input" value={form.service} onChange={update("service")}>
                  {RD_SERVICES.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                </select>
              </label>
            </div>
            <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ font: `700 11px ${MONO}`, color: "var(--rd-text-3)" }}>YOUR MESSAGE *</span>
              <textarea className="rd-input" required placeholder="Tell us about the workflow you want to automate…" value={form.message} onChange={update("message")} style={{ minHeight: 110, resize: "vertical" }} />
            </label>
            {status.message ? (
              <div role="status" style={{ borderRadius: 12, padding: "12px 16px", border: "1px solid var(--rd-border-2)", fontSize: 14, color: status.state === "success" ? "var(--rd-text)" : "var(--rd-accent)" }}>
                {status.message}
              </div>
            ) : null}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
              <span style={{ fontSize: 12, color: "var(--rd-text-3)", maxWidth: "30ch" }}>
                By submitting you agree to our{" "}
                <a href="/privacy" style={{ textDecoration: "underline" }}>Privacy Policy</a> and{" "}
                <a href="/terms" style={{ textDecoration: "underline" }}>Terms</a>.
              </span>
              <button type="submit" disabled={status.state === "sending"} className="rd-btn rd-btn-primary" style={{ padding: "13px 26px", fontSize: 15 }}>
                {status.state === "sending" ? "Sending…" : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </RdLayout>
  );
}
