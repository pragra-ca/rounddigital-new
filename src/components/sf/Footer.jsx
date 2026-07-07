import Link from "next/link";
import { SfLogo, SF_SERVICES } from "./Navbar";

const QUICK_LINKS = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Careers", path: "/careers" },
  { name: "Blog", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

const SOCIALS = [
  { name: "LINKEDIN", href: "https://www.linkedin.com/company/rounddigital" },
  { name: "X", href: "https://x.com/rounddigital" },
  { name: "FACEBOOK", href: "https://www.facebook.com/rounddigital" },
];

export default function SfFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--sf-border)" }}>
      <div className="sf-container grid grid-cols-1 gap-10 pt-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-[14px]">
          <SfLogo size={26} wordmarkClass="text-[16px]" />
          <p className="m-0 text-[13.5px] leading-[1.6]" style={{ color: "var(--sf-muted)" }}>
            Empowering businesses with cutting-edge IT solutions, AI development, and
            cybersecurity services.
          </p>
          <div className="sf-mono flex gap-2 text-[12px] font-medium" style={{ color: "var(--sf-faint)" }}>
            {SOCIALS.map((social, i) => (
              <span key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[color:var(--sf-accent)]"
                >
                  {social.name}
                </a>
                {i < SOCIALS.length - 1 ? " ·" : ""}
              </span>
            ))}
          </div>
          <div className="sf-mono flex flex-col gap-1 text-[12px] font-medium" style={{ color: "var(--sf-faint)" }}>
            <a
              href="mailto:info@rounddigital.co"
              className="transition-colors hover:text-[color:var(--sf-accent)]"
            >
              info@rounddigital.co
            </a>
            <a
              href="tel:+19054075009"
              className="transition-colors hover:text-[color:var(--sf-accent)]"
            >
              +1 905-407-5009
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {["SOC 2 ALIGNED", "ISO 27001 ALIGNED"].map((badge) => (
              <span
                key={badge}
                className="sf-mono rounded-full px-3 py-[5px] text-[10.5px] font-medium tracking-[0.08em]"
                style={{
                  border: "1px solid var(--sf-border)",
                  color: "var(--sf-faint)",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[10px] text-[13.5px]" style={{ color: "var(--sf-muted)" }}>
          <span
            className="sf-sora mb-1 text-[12px] font-semibold tracking-[0.1em]"
            style={{ color: "var(--sf-text)" }}
          >
            QUICK LINKS
          </span>
          {QUICK_LINKS.map((link) => (
            <Link key={link.path} href={link.path} className="transition-colors hover:text-[color:var(--sf-accent)]">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-[10px] text-[13.5px]" style={{ color: "var(--sf-muted)" }}>
          <span
            className="sf-sora mb-1 text-[12px] font-semibold tracking-[0.1em]"
            style={{ color: "var(--sf-text)" }}
          >
            SERVICES
          </span>
          {SF_SERVICES.slice(0, 6).map((service) => (
            <Link
              key={service.path}
              href={service.path}
              className="transition-colors hover:text-[color:var(--sf-accent)]"
            >
              {service.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3 text-[13.5px] leading-[1.55]" style={{ color: "var(--sf-muted)" }}>
          <span
            className="sf-sora text-[12px] font-semibold tracking-[0.1em]"
            style={{ color: "var(--sf-text)" }}
          >
            OFFICES
          </span>
          <span>
            <strong style={{ color: "var(--sf-text)" }}>Mississauga</strong>
            <br />
            160B - 110 Matheson Blvd W, ON L5M 6B8
          </span>
          <span>
            <strong style={{ color: "var(--sf-text)" }}>Dallas</strong>
            <br />
            450 Century Pkwy, Ste 250, Allen, TX 75013
          </span>
          <span>
            <strong style={{ color: "var(--sf-text)" }}>Pune</strong>
            <br />
            Supreme HQ, 302, Mumbai-Pune Expressway, Baner Annex, Baner, Pune, Maharashtra
            411045
          </span>
        </div>
      </div>

      <div
        className="sf-container mt-9 flex flex-col items-center justify-between gap-2 py-6 text-[12px] sm:flex-row"
        style={{ borderTop: "1px solid var(--sf-border)", color: "var(--sf-faint)" }}
      >
        <span>© {new Date().getFullYear()} RoundDigital. All rights reserved.</span>
        <span>
          <Link href="/privacy" className="transition-colors hover:text-[color:var(--sf-accent)]">
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/terms" className="transition-colors hover:text-[color:var(--sf-accent)]">
            Terms of Service
          </Link>
          {" · "}
          <Link href="/contact" className="transition-colors hover:text-[color:var(--sf-accent)]">
            Contact Us
          </Link>
        </span>
      </div>
    </footer>
  );
}
