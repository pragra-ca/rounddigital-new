import { useState } from "react";
import SfLayout from "@/components/sf/Layout";
import Seo from "@/components/seo";
import { Eyebrow } from "@/components/sf/ui";
import { SF_SERVICES } from "@/components/sf/Navbar";

const CONTACT_ROWS = [
  { label: "EMAIL", value: "info@rounddigital.co", href: "mailto:info@rounddigital.co" },
  { label: "PHONE", value: "+1 905-407-5009", href: "tel:+19054075009" },
  { label: "CA", value: "160B - 110 Matheson Blvd W, Mississauga, ON L5M 6B8" },
  { label: "US", value: "450 Century Pkwy, Ste 250, Allen, TX 75013" },
  {
    label: "IN",
    value: "Supreme HQ, 302, Mumbai-Pune Expressway, Baner Annex, Baner, Pune, Maharashtra 411045",
  },
  { label: "HOURS", value: "Mon–Fri 9:00–18:00 · Responses within one business day" },
];

const INITIAL_FORM = {
  name: "",
  email: "",
  company: "",
  service: SF_SERVICES[0].name,
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

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
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Something went wrong.");
      }
      setStatus({
        state: "success",
        message: "Message sent — we'll get back to you within one business day.",
      });
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus({
        state: "error",
        message: err.message || "Something went wrong. Please email us directly.",
      });
    }
  };

  return (
    <SfLayout>
      <Seo
        title="Contact Us: Book a Free AI Strategy Call"
        description="30 minutes with a senior engineer, not a sales rep. Scope your highest-ROI AI or software opportunity — offices in Mississauga, Dallas and Pune. Call +1 905-407-5009."
        keywords="contact RoundDigital, book AI consultation, free strategy call, AI consulting quote, IT services Mississauga, IT services Dallas"
      />

      <section className="px-5 pb-[60px] pt-16 sm:px-8 lg:px-11">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Left: pitch + details */}
          <div className="flex flex-col gap-[26px]">
            <Eyebrow data-reveal>Get in touch</Eyebrow>
            <h1
              data-reveal
              data-reveal-delay="0.08"
              className="m-0 text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[50px]"
            >
              Book a call. Leave with a plan.
            </h1>
            <p
              data-reveal
              data-reveal-delay="0.16"
              className="m-0 text-[15.5px] leading-[1.65]"
              style={{ color: "var(--sf-muted)" }}
            >
              30 minutes with a senior engineer — not a sales rep. We&apos;ll scope your
              highest-ROI opportunity and tell you honestly if we&apos;re not the right fit.
            </p>
            <div data-reveal data-reveal-delay="0.22" className="flex flex-col gap-4 text-[14px] leading-[1.5]">
              {CONTACT_ROWS.map((row) => (
                <div key={row.label} className="flex items-baseline gap-3">
                  <span
                    className="sf-mono w-[60px] shrink-0 text-[11px] font-medium"
                    style={{ color: "var(--sf-accent)" }}
                  >
                    {row.label}
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="transition-colors hover:text-[color:var(--sf-accent)]"
                      style={{ color: "var(--sf-muted)" }}
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span style={{ color: "var(--sf-muted)" }}>{row.value}</span>
                  )}
                </div>
              ))}
            </div>
            <div
              data-reveal
              data-reveal-delay="0.28"
              className="rounded-[14px] p-6"
              style={{
                border: "1px solid var(--sf-accent-border)",
                backgroundImage:
                  "linear-gradient(160deg, var(--sf-accent-soft), transparent 60%)",
              }}
            >
              <div className="flex flex-col gap-3">
                <span className="sf-mono text-[11px] font-medium tracking-[0.12em]" style={{ color: "var(--sf-accent)" }}>
                  PREFER TO TALK RIGHT NOW?
                </span>
                <span className="text-[14px] leading-[1.55]" style={{ color: "var(--sf-muted)" }}>
                  Skip the form — a senior engineer picks up during business hours,
                  and email lands in the same inbox either way.
                </span>
                <div className="mt-1 flex flex-wrap gap-3">
                  <a href="tel:+19054075009" className="sf-btn-ghost px-[22px] py-[10px] text-[13px]">
                    Call +1 905-407-5009
                  </a>
                  <a
                    href="mailto:info@rounddigital.co"
                    className="sf-btn-ghost px-[22px] py-[10px] text-[13px]"
                  >
                    Email us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            data-reveal
            data-reveal-delay="0.2"
            onSubmit={submit}
            className="flex flex-col gap-4 rounded-[18px] px-6 py-8 sm:px-8"
            style={{
              border: "1px solid var(--sf-border)",
              backgroundColor: "var(--sf-surface)",
            }}
          >
            <div className="sf-sora mb-1 text-[19px] font-bold">Prefer to write?</div>
            <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
              <label className="flex flex-col gap-[6px]">
                <span className="sf-input-label">FULL NAME *</span>
                <input
                  className="sf-input"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={update("name")}
                />
              </label>
              <label className="flex flex-col gap-[6px]">
                <span className="sf-input-label">WORK EMAIL *</span>
                <input
                  className="sf-input"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={update("email")}
                />
              </label>
              <label className="flex flex-col gap-[6px]">
                <span className="sf-input-label">COMPANY</span>
                <input
                  className="sf-input"
                  type="text"
                  placeholder="Company Inc."
                  value={form.company}
                  onChange={update("company")}
                />
              </label>
              <label className="flex flex-col gap-[6px]">
                <span className="sf-input-label">SERVICE</span>
                <select className="sf-input" value={form.service} onChange={update("service")}>
                  {SF_SERVICES.map((service) => (
                    <option key={service.path} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-[6px]">
              <span className="sf-input-label">YOUR MESSAGE *</span>
              <textarea
                className="sf-input min-h-[110px] resize-y"
                required
                placeholder="Tell us about the workflow you want to automate…"
                value={form.message}
                onChange={update("message")}
              />
            </label>

            {status.message ? (
              <div
                className="rounded-xl px-4 py-3 text-[13.5px]"
                style={{
                  border: "1px solid var(--sf-border)",
                  color: status.state === "success" ? "var(--sf-live)" : "var(--sf-accent)",
                }}
                role="status"
              >
                {status.message}
              </div>
            ) : null}

            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <span className="max-w-[30ch] text-[12px]" style={{ color: "var(--sf-faint)" }}>
                By submitting you agree to our{" "}
                <a href="/privacy" className="underline transition-colors hover:text-[color:var(--sf-accent)]">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="underline transition-colors hover:text-[color:var(--sf-accent)]">
                  Terms
                </a>
                .
              </span>
              <button
                type="submit"
                disabled={status.state === "sending"}
                className="sf-btn-primary px-[26px] py-[13px] text-[14px] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status.state === "sending" ? "Sending…" : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </SfLayout>
  );
}
