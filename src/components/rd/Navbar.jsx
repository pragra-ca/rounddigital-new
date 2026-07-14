import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useRdTheme } from "./theme";

export const RD_SERVICES = [
  { title: "AI & Machine Learning", tag: "Intelligent automation", id: "ai-machine-learning" },
  { title: "Cloud Solutions", tag: "Scalable infrastructure", id: "cloud-solutions" },
  { title: "Cybersecurity", tag: "Enterprise protection", id: "cybersecurity" },
  { title: "Custom Software", tag: "Tailored solutions", id: "custom-software" },
  { title: "Data & Analytics", tag: "Decision intelligence", id: "data-analytics" },
  { title: "Digital Transformation", tag: "Modernize operations", id: "digital-transformation" },
  { title: "Global Talent", tag: "Scale on demand", id: "global-talent" },
  { title: "Engagement Models", tag: "Ways to work", id: "engagement-models" },
];

const INDUSTRIES_MENU = [
  { label: "Industries", href: "/industries" },
  { label: "Case studies", href: "/#case-studies" },
  { label: "Technology", href: "/#technology" },
  { label: "Insights", href: "/#insights" },
];

function Chevron({ open }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden="true"
      style={{ transition: "transform 0.3s ease", transform: `rotate(${open ? 180 : 0}deg)` }}
    >
      <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function RdLogo({ withWordmark = true }) {
  return (
    <Link href="/" aria-label="RoundDigital home" style={{ display: "flex", alignItems: "center", gap: 11 }}>
      <img src="/rd/logo-fd-t.png" alt="RoundDigital logo" className="rd-logo" />
      {withWordmark ? (
        <span
          className="rd-wordmark"
          style={{ font: "700 18px 'Space Mono',monospace", letterSpacing: "-0.02em", textTransform: "uppercase" }}
        >
          round.digital
        </span>
      ) : null}
    </Link>
  );
}

export default function RdNavbar() {
  const router = useRouter();
  const { theme, toggle } = useRdTheme();
  const [svcOpen, setSvcOpen] = useState(false);
  const [indOpen, setIndOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const svcTimer = useRef(null);
  const indTimer = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setSvcOpen(false);
    setIndOpen(false);
  }, [router.asPath]);

  const hover = (setter, timer) => ({
    onMouseEnter: () => {
      clearTimeout(timer.current);
      setter(true);
    },
    onMouseLeave: () => {
      timer.current = setTimeout(() => setter(false), 130);
    },
  });

  const menuPanel = (open) => ({
    position: "absolute",
    top: "calc(100% + 10px)",
    background: "var(--rd-nav-bg)",
    backdropFilter: "blur(16px)",
    border: "1px solid var(--rd-border-2)",
    boxShadow: "0 24px 48px -16px rgba(0,0,0,0.5)",
    transition: "opacity 0.25s cubic-bezier(0.22,1,0.36,1), transform 0.25s cubic-bezier(0.22,1,0.36,1)",
    opacity: open ? 1 : 0,
    visibility: open ? "visible" : "hidden",
    pointerEvents: open ? "auto" : "none",
    transformOrigin: "top center",
  });

  const navPill = { padding: "9px 18px", borderRadius: 100, fontSize: 16, whiteSpace: "nowrap" };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        padding: "16px 4% 0",
        animation: "rd-nav-in 0.7s cubic-bezier(0.22,1,0.36,1) both",
      }}
    >
      <div
        className="rd-navbar"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          background: "var(--rd-nav-bg)",
          backdropFilter: "blur(16px)",
          border: "1px solid var(--rd-border)",
          borderRadius: 100,
          padding: "0 12px 0 28px",
          minHeight: 64,
          display: "grid",
          gridTemplateColumns: "max-content 1fr max-content",
          alignItems: "center",
          gap: 24,
          boxShadow: "0 12px 40px -18px rgba(0,0,0,0.35)",
        }}
      >
        <RdLogo />

        {/* Center links (desktop) */}
        <nav className="rd-navlinks" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
          <Link href="/services" className="rd-navlink" style={navPill}>
            Solutions
          </Link>

          {/* Services mega dropdown */}
          <div style={{ position: "relative" }} {...hover(setSvcOpen, svcTimer)}>
            <Link
              href="/services"
              className="rd-navlink"
              style={{ ...navPill, display: "flex", alignItems: "center", gap: 8, background: svcOpen ? "var(--rd-card)" : "transparent" }}
            >
              Services <Chevron open={svcOpen} />
            </Link>
            <div
              style={{
                ...menuPanel(svcOpen),
                left: "50%",
                width: 560,
                borderRadius: 24,
                padding: 12,
                transform: `translateX(-50%) translateY(${svcOpen ? 0 : -8}px) scale(${svcOpen ? 1 : 0.96})`,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
              }}
            >
              {RD_SERVICES.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  className="rd-menu-item"
                  style={{ display: "block", padding: "12px 14px", borderRadius: 14 }}
                >
                  <span style={{ display: "block", font: "700 15px 'Space Mono',monospace", textTransform: "uppercase" }}>
                    {s.title}
                  </span>
                  <span style={{ display: "block", fontSize: 13, color: "var(--rd-text-3)", marginTop: 2 }}>
                    {s.tag}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Industries dropdown */}
          <div style={{ position: "relative" }} {...hover(setIndOpen, indTimer)}>
            <button
              type="button"
              className="rd-navlink"
              style={{
                ...navPill,
                display: "flex",
                alignItems: "center",
                gap: 8,
                border: "none",
                cursor: "pointer",
                color: "var(--rd-text)",
                font: "400 16px 'Inter',sans-serif",
                background: indOpen ? "var(--rd-card)" : "transparent",
              }}
            >
              Industries <Chevron open={indOpen} />
            </button>
            <div
              style={{
                ...menuPanel(indOpen),
                left: "50%",
                minWidth: 230,
                borderRadius: 20,
                padding: 8,
                transform: `translateX(-50%) translateY(${indOpen ? 0 : -8}px) scale(${indOpen ? 1 : 0.96})`,
              }}
            >
              {INDUSTRIES_MENU.map((m) => (
                <Link key={m.href} href={m.href} className="rd-menu-item" style={{ display: "block", padding: "10px 14px", borderRadius: 12, fontSize: 16 }}>
                  {m.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/#case-studies" className="rd-navlink" style={navPill}>
            Case studies
          </Link>
        </nav>

        {/* Right actions */}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 10 }}>
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="rd-theme-toggle"
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "1px solid var(--rd-border-2)",
              background: "none",
              color: "var(--rd-text)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.25s ease",
            }}
          >
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            )}
          </button>
          <Link
            href="/contact"
            className="rd-contact-cta"
            style={{
              padding: "11px 28px",
              borderRadius: 100,
              background: "var(--rd-accent)",
              color: "#fff",
              fontWeight: 500,
              fontSize: 16,
              whiteSpace: "nowrap",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
          >
            Contact
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="rd-hamburger"
            style={{
              display: "none",
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "1px solid var(--rd-border-2)",
              background: "none",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              cursor: "pointer",
            }}
          >
            <span style={{ display: "block", width: 16, height: 2, background: "var(--rd-text)", transform: mobileOpen ? "translateY(3.5px) rotate(45deg)" : "none", transition: "transform 0.2s" }} />
            <span style={{ display: "block", width: 16, height: 2, background: "var(--rd-text)", transform: mobileOpen ? "translateY(-3.5px) rotate(-45deg)" : "none", transition: "transform 0.2s" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <div
          className="rd-mobile-menu"
          style={{
            maxWidth: 1280,
            margin: "10px auto 0",
            background: "var(--rd-nav-bg)",
            backdropFilter: "blur(16px)",
            border: "1px solid var(--rd-border)",
            borderRadius: 24,
            padding: 16,
            animation: "rd-view-in 0.3s ease both",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link href="/services" style={{ padding: "12px 14px", borderRadius: 12, fontSize: 16 }}>
              Solutions
            </Link>
            <div className="rd-mono" style={{ padding: "12px 14px 4px", fontSize: 12, color: "var(--rd-text-3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Services
            </div>
            {RD_SERVICES.map((s) => (
              <Link key={s.id} href={`/services/${s.id}`} style={{ padding: "10px 14px", borderRadius: 12, fontSize: 15, color: "var(--rd-text-2)" }}>
                {s.title}
              </Link>
            ))}
            <Link href="/industries" style={{ padding: "12px 14px", borderRadius: 12, fontSize: 16 }}>
              Industries
            </Link>
            <Link href="/#case-studies" style={{ padding: "12px 14px", borderRadius: 12, fontSize: 16 }}>
              Case studies
            </Link>
            <Link href="/careers" style={{ padding: "12px 14px", borderRadius: 12, fontSize: 16 }}>
              Careers
            </Link>
            <Link href="/contact" className="rd-btn rd-btn-primary" style={{ marginTop: 12 }}>
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
