import Link from "next/link";
import { useState } from "react";
import { RdLogo } from "./Navbar";

const SERVICES_LINKS = [
  { label: "Enterprise AI", href: "/services/ai-machine-learning" },
  { label: "Cloud Engineering", href: "/services/cloud-solutions" },
  { label: "Product Engineering", href: "/services/custom-software" },
  { label: "Cybersecurity", href: "/services/cybersecurity" },
  { label: "Managed Services", href: "/services/engagement-models" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Case studies", href: "/#case-studies" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/rounddigital",
    icon: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8h4.6v14.8H.2zM8.2 8h4.4v2h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.49 3.05 5.49 7.02v8.16h-4.6v-7.23c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.81v7.36H8.2z",
  },
  {
    label: "X",
    href: "https://x.com/rounddigital",
    icon: "M18.9 1.15h3.68l-8.04 9.2L24 22.85h-7.4l-5.8-7.59-6.64 7.59H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/rounddigital",
    icon: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z",
  },
];

function FooterCol({ title, links }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <p style={{ margin: "0 0 12px", fontWeight: 600 }}>{title}</p>
      {links.map((l) => (
        <Link key={l.href + l.label} href={l.href} className="rd-footer-link" style={{ padding: "6px 0", fontSize: 16, color: "var(--rd-text-2)" }}>
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export default function RdFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const subscribe = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer style={{ padding: "80px 5% 32px", borderTop: "1px solid var(--rd-border)" }}>
      <div className="rd-container">
        <div className="rd-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 56, paddingBottom: 64 }}>
          <div>
            <div style={{ marginBottom: 24 }}>
              <RdLogo />
            </div>
            <p style={{ margin: "0 0 24px", color: "var(--rd-text-2)", maxWidth: 380 }}>
              Get the latest on AI engineering, cloud architecture, and product strategy.
            </p>
            <form onSubmit={subscribe} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rd-input"
                style={{ flex: 1, minWidth: 200, maxWidth: 280 }}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="rd-btn rd-btn-ghost"
                style={{ padding: "12px 26px", fontSize: 15, fontWeight: 500 }}
              >
                {status === "sending" ? "…" : "Subscribe"}
              </button>
            </form>
            <p style={{ margin: "14px 0 0", fontSize: 13, color: "var(--rd-text-3)" }}>
              {status === "done"
                ? "You're subscribed — thanks!"
                : status === "error"
                ? "Something went wrong. Try again."
                : "By subscribing you agree to our Privacy Policy and consent to receive updates."}
            </p>
          </div>

          <FooterCol title="Services" links={SERVICES_LINKS} />
          <FooterCol title="Company" links={COMPANY_LINKS} />

          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <p style={{ margin: "0 0 12px", fontWeight: 600 }}>Follow us</p>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rd-footer-link"
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0", fontSize: 16, color: "var(--rd-text-2)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.icon} />
                </svg>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="rd-footer-bottom"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            borderTop: "1px solid var(--rd-border)",
            paddingTop: 24,
            fontSize: 15,
            color: "var(--rd-text-3)",
          }}
        >
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} Round Digital. All rights reserved.</p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <Link href="/privacy" style={{ color: "var(--rd-text-3)" }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ color: "var(--rd-text-3)" }}>
              Terms of Service
            </Link>
            <Link href="/contact" style={{ color: "var(--rd-text-3)" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
