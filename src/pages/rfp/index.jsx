import { useRef, useState } from "react";
import Link from "next/link";
import Seo from "@/components/seo";
import Layout from "@/components/system/Layout";
import {
  Arrow,
  Breadcrumb,
  Button,
  Container,
  Eyebrow,
  Note,
  Panel,
  Section,
  SectionHead,
} from "@/components/system/ui";
import { PILLARS } from "@/data/navigation";

const TYPES = [
  "Solicitation / RFP",
  "Teaming or subcontracting",
  "Staffing requirement",
  "Training programme",
  "Research or evaluation",
  "General enquiry",
];

const WHAT_HAPPENS = [
  { t: "Within 1 business day", b: "A human acknowledges receipt and tells you who is reviewing it." },
  { t: "Within 2 business days", b: "A go / no-go, with the reason. If we are not right for it, we say so plainly." },
  { t: "If it is a go", b: "A named lead, a scoping call, and a written response on the schedule you set." },
];

/* One field. Errors are wired with aria-invalid + aria-describedby so a screen
   reader announces the message when focus lands, rather than leaving the user
   to guess which control is wrong. */
function Field({ id, label, error, hint, required, children }) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errId = error ? `${id}-err` : undefined;
  const describedBy = [hintId, errId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="rds-field">
      <label htmlFor={id}>
        {label}
        {required ? (
          <span className="rds-req" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="rds-optional"> (optional)</span>
        )}
      </label>
      {hint ? (
        <p id={hintId} className="rds-meta" style={{ marginBottom: 6 }}>
          {hint}
        </p>
      ) : null}
      {children({ id, describedBy, invalid: Boolean(error) })}
      {error ? (
        <p id={errId} className="rds-fielderr">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function RfpPage() {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const summaryRef = useRef(null);
  const successRef = useRef(null);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrors({});
    setFormError("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      organisation: fd.get("organisation") || "",
      name: fd.get("name") || "",
      email: fd.get("email") || "",
      phone: fd.get("phone") || "",
      type: fd.get("type") || "",
      deadline: fd.get("deadline") || "",
      summary: fd.get("summary") || "",
      website_url: fd.get("website_url") || "",
      pillars: fd.getAll("pillars"),
    };

    try {
      const res = await fetch("/api/rfp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setStatus("ok");
        // Move focus to the confirmation so keyboard and screen-reader users
        // are taken to the outcome instead of being left on a vanished form.
        requestAnimationFrame(() => successRef.current?.focus());
        return;
      }

      setStatus("error");
      if (data.errors) setErrors(data.errors);
      setFormError(
        data.message ||
          "Some details need checking before we can send this. The fields are marked below."
      );
      requestAnimationFrame(() => summaryRef.current?.focus());
    } catch {
      setStatus("error");
      setFormError(
        "We could not reach the server. Please email contracts@round.digital directly."
      );
      requestAnimationFrame(() => summaryRef.current?.focus());
    }
  }

  return (
    <Layout>
      <Seo
        title="Submit an RFP or Partnership Inquiry"
        description="Send a solicitation, statement of work, staffing requirement or teaming inquiry. It routes to the people who scope bids, not to a general inbox."
        keywords="submit RFP, request for proposal IT services, teaming inquiry, vendor submission"
      />

      <Section as="div" className="rds-hero">
        <Container>
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Submit an RFP" }]} />
          <h1 className="rds-h1" style={{ margin: "var(--s5) 0 0", maxWidth: "16ch" }}>
            Send it over. You will get a straight answer.
          </h1>
          <div className="rds-hero-rule" aria-hidden="true" />
          <p className="rds-lead" style={{ marginTop: "var(--s5)" }}>
            A solicitation, a statement of work, a staffing requirement, or a rough
            description of what is stuck. We will tell you whether we can carry it —
            including when the honest answer is no.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rds-formwrap">
            {/* --- Form ------------------------------------------------- */}
            <div>
              <SectionHead index="01" label="Your requirement" />

              {status === "ok" ? (
                <Panel keyed fill>
                  <div ref={successRef} tabIndex={-1} role="status" style={{ outline: "none" }}>
                    <h2 className="rds-h3" style={{ marginBottom: "var(--s3)" }}>
                      Received. Thank you.
                    </h2>
                    <p className="rds-prose" style={{ marginBottom: "var(--s5)" }}>
                      A person will acknowledge this within one business day and tell you
                      who is reviewing it. If it is urgent, email{" "}
                      <a href="mailto:contracts@round.digital" className="rds-link">
                        contracts@round.digital
                      </a>{" "}
                      and say so.
                    </p>
                    <Button href="/government/capability-statement" variant="primary">
                      Read the capability statement <Arrow />
                    </Button>
                  </div>
                </Panel>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  {formError ? (
                    <div
                      ref={summaryRef}
                      tabIndex={-1}
                      role="alert"
                      className="rds-formerr"
                    >
                      <strong>We could not send that.</strong> {formError}
                    </div>
                  ) : null}

                  <Field id="organisation" label="Organisation" error={errors.organisation} required>
                    {({ id, describedBy, invalid }) => (
                      <input
                        id={id}
                        name="organisation"
                        type="text"
                        maxLength={200}
                        autoComplete="organization"
                        aria-describedby={describedBy}
                        aria-invalid={invalid || undefined}
                        className="rds-input"
                      />
                    )}
                  </Field>

                  <div className="rds-fieldrow">
                    <Field id="name" label="Your name" error={errors.name} required>
                      {({ id, describedBy, invalid }) => (
                        <input
                          id={id}
                          name="name"
                          type="text"
                          maxLength={120}
                          autoComplete="name"
                          aria-describedby={describedBy}
                          aria-invalid={invalid || undefined}
                          className="rds-input"
                        />
                      )}
                    </Field>

                    <Field id="email" label="Email" error={errors.email} required>
                      {({ id, describedBy, invalid }) => (
                        <input
                          id={id}
                          name="email"
                          type="email"
                          maxLength={254}
                          autoComplete="email"
                          aria-describedby={describedBy}
                          aria-invalid={invalid || undefined}
                          className="rds-input"
                        />
                      )}
                    </Field>
                  </div>

                  <div className="rds-fieldrow">
                    <Field id="phone" label="Phone" error={errors.phone}>
                      {({ id, describedBy, invalid }) => (
                        <input
                          id={id}
                          name="phone"
                          type="tel"
                          maxLength={40}
                          autoComplete="tel"
                          aria-describedby={describedBy}
                          aria-invalid={invalid || undefined}
                          className="rds-input"
                        />
                      )}
                    </Field>

                    <Field id="deadline" label="Response deadline" hint="If there is one." error={errors.deadline}>
                      {({ id, describedBy, invalid }) => (
                        <input
                          id={id}
                          name="deadline"
                          type="text"
                          maxLength={60}
                          placeholder="e.g. 14 March, or 2 weeks"
                          aria-describedby={describedBy}
                          aria-invalid={invalid || undefined}
                          className="rds-input"
                        />
                      )}
                    </Field>
                  </div>

                  <Field id="type" label="Type of enquiry" error={errors.type}>
                    {({ id, describedBy, invalid }) => (
                      <select
                        id={id}
                        name="type"
                        defaultValue={TYPES[0]}
                        aria-describedby={describedBy}
                        aria-invalid={invalid || undefined}
                        className="rds-input"
                      >
                        {TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    )}
                  </Field>

                  <fieldset className="rds-fieldset">
                    <legend>Which services does this involve?</legend>
                    <div className="rds-checks">
                      {PILLARS.map((p) => (
                        <label key={p.slug} htmlFor={`pillar-${p.slug}`}>
                          <input
                            id={`pillar-${p.slug}`}
                            type="checkbox"
                            name="pillars"
                            value={p.title}
                          />
                          <span>{p.title}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <Field
                    id="summary"
                    label="What do you need?"
                    hint="Paste the solicitation reference, the scope, or just describe the problem."
                    error={errors.summary}
                    required
                  >
                    {({ id, describedBy, invalid }) => (
                      <textarea
                        id={id}
                        name="summary"
                        rows={7}
                        maxLength={5000}
                        aria-describedby={describedBy}
                        aria-invalid={invalid || undefined}
                        className="rds-input"
                      />
                    )}
                  </Field>

                  {/* Honeypot. Hidden from users and assistive tech; bots fill it. */}
                  <div className="rds-hp" aria-hidden="true">
                    <label htmlFor="website_url">Leave this field empty</label>
                    <input id="website_url" name="website_url" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "var(--s4)", marginTop: "var(--s5)" }}>
                    <Button variant="accent" type="submit" disabled={status === "sending"}>
                      {status === "sending" ? "Sending…" : "Send the requirement"}{" "}
                      {status === "sending" ? null : <Arrow />}
                    </Button>
                    <p className="rds-meta" aria-live="polite">
                      {status === "sending" ? "Sending your enquiry…" : ""}
                    </p>
                  </div>

                  <p className="rds-meta" style={{ marginTop: "var(--s4)" }}>
                    We use what you send here to respond to your enquiry and for nothing
                    else. See our{" "}
                    <Link href="/privacy" className="rds-link">
                      privacy notice
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>

            {/* --- Aside ------------------------------------------------ */}
            <aside>
              <Panel fill>
                <h2 className="rds-h4" style={{ marginBottom: "var(--s4)" }}>
                  What happens next
                </h2>
                <ol className="rds-steps">
                  {WHAT_HAPPENS.map((w, i) => (
                    <li key={w.t}>
                      <span className="rds-mono rds-steps-idx" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="rds-h4">{w.t}</h3>
                        <p style={{ color: "var(--fg-2)", fontSize: 15, marginTop: 4 }}>{w.b}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Panel>

              <div style={{ marginTop: "var(--s5)" }}>
                <Note title="Prefer email?">
                  Send it to{" "}
                  <a href="mailto:contracts@round.digital" className="rds-link">
                    contracts@round.digital
                  </a>
                  . Attachments are fine — solicitations, SOWs, requirement matrices.
                </Note>
              </div>

              <div style={{ marginTop: "var(--s5)" }}>
                <Panel>
                  <h2 className="rds-h4" style={{ marginBottom: "var(--s3)" }}>
                    Before you send
                  </h2>
                  <p style={{ color: "var(--fg-2)", fontSize: 15, marginBottom: "var(--s4)" }}>
                    Two things worth knowing, so neither of us wastes a cycle.
                  </p>
                  <ul className="rds-ticklist">
                    <li>We hold no contract vehicle of our own today.</li>
                    <li>We cannot independently bid US-performance or CUI requirements.</li>
                  </ul>
                  <p style={{ marginTop: "var(--s4)" }}>
                    <Link href="/government/contract-vehicles" className="rds-arrow rds-link">
                      Full constraints <Arrow />
                    </Link>
                  </p>
                </Panel>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
