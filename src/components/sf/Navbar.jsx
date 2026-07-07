import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useSfTheme } from "./theme";
import { ScrollProgress } from "./ui";

export const SF_SERVICES = [
  {
    name: "AI & Machine Learning",
    path: "/services/ai-machine-learning",
    desc: "Agents, ML models & intelligent automation",
  },
  {
    name: "Cloud Solutions",
    path: "/services/cloud-solutions",
    desc: "AWS, Azure & GCP architecture",
  },
  {
    name: "Cybersecurity",
    path: "/services/cybersecurity",
    desc: "Assessments, compliance & pen testing",
  },
  {
    name: "Custom Software",
    path: "/services/custom-software",
    desc: "Enterprise apps built to spec",
  },
  {
    name: "Data & Analytics",
    path: "/services/data-analytics",
    desc: "Pipelines, dashboards & insights",
  },
  {
    name: "Digital Transformation",
    path: "/services/digital-transformation",
    desc: "Modernize legacy systems",
  },
  {
    name: "Global Talent",
    path: "/services/global-talent",
    desc: "Scale teams on demand",
  },
  {
    name: "Engagement Models",
    path: "/services/engagement-models",
    desc: "Flexible ways to work together",
  },
];

const NAV_LINKS = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services", dropdown: true },
  { name: "Industries", path: "/industries" },
  { name: "Careers", path: "/careers" },
  { name: "Blog", path: "/blogs" },
];

export function SfLogo({ size = 30, wordmarkClass = "text-[18px]" }) {
  return (
    <Link href="/" className="flex items-center gap-[10px]">
      <img
        src="/images/sf/logo-on-dark.png"
        alt="RoundDigital logo"
        className="sf-logo-dark"
        style={{ height: size, width: "auto", filter: "var(--sf-logo-glow)" }}
      />
      <img
        src="/images/sf/logo-on-light.png"
        alt="RoundDigital logo"
        className="sf-logo-light"
        style={{ height: size, width: "auto" }}
      />
      <span className={`sf-sora font-bold tracking-[-0.01em] ${wordmarkClass}`}>
        RoundDigital
      </span>
    </Link>
  );
}

export default function SfNavbar() {
  const router = useRouter();
  const { theme, toggle } = useSfTheme();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [router.asPath]);

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  const isActive = (path) =>
    path === "/blogs"
      ? router.pathname.startsWith("/blogs")
      : router.pathname === path || router.pathname.startsWith(`${path}/`);

  return (
    <header className="sticky top-0 z-50">
      <ScrollProgress />
      {/* Top strip */}
      <div
        className="sf-mono hidden items-center justify-between border-b px-5 py-2 text-[11px] font-medium sm:px-8 md:flex lg:px-11"
        style={{
          borderColor: "var(--sf-border)",
          color: "var(--sf-faint)",
          backgroundColor: "var(--sf-bg)",
        }}
      >
        <a href="mailto:info@rounddigital.co" className="transition-colors hover:text-[color:var(--sf-accent)]">
          info@rounddigital.co
        </a>
        <span>
          TORONTO · DALLAS&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="tel:+19054075009" className="transition-colors hover:text-[color:var(--sf-accent)]">
            +1 905-407-5009
          </a>
        </span>
      </div>

      {/* Main nav */}
      <nav
        className="border-b transition-all duration-300"
        style={{
          borderColor: scrolled ? "var(--sf-border)" : "transparent",
          backgroundColor: scrolled ? "color-mix(in srgb, var(--sf-bg) 82%, transparent)" : "var(--sf-bg)",
          backdropFilter: scrolled ? "blur(14px)" : "none",
        }}
      >
        <div className="flex items-center justify-between px-5 py-[14px] sm:px-8 lg:px-11 lg:py-[18px]">
          <SfLogo />

          {/* Desktop links */}
          <div className="sf-sora hidden items-center gap-7 text-[13px] font-semibold lg:flex">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                >
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex items-center gap-[5px] transition-colors"
                    style={{
                      color: isActive("/services") ? "var(--sf-accent)" : "var(--sf-muted)",
                    }}
                  >
                    {link.name}
                    <span className="text-[9px]" style={{ color: "var(--sf-accent)" }}>
                      ▼
                    </span>
                  </button>
                  {servicesOpen && (
                    <div
                      className="absolute left-1/2 top-full z-50 mt-4 w-[560px] -translate-x-1/2 rounded-2xl p-3 animate-fade-in-down"
                      style={{
                        backgroundColor: "var(--sf-bg)",
                        border: "1px solid var(--sf-border)",
                        boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
                      }}
                    >
                      <div className="grid grid-cols-2 gap-1">
                        {SF_SERVICES.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            className="group rounded-xl px-4 py-3 transition-colors hover:bg-[color:var(--sf-surface)]"
                          >
                            <div
                              className="text-[13.5px] font-semibold transition-colors group-hover:text-[color:var(--sf-accent)]"
                              style={{ color: "var(--sf-text)" }}
                            >
                              {service.name}
                            </div>
                            <div
                              className="mt-[2px] font-normal"
                              style={{ color: "var(--sf-faint)", fontSize: 12 }}
                            >
                              {service.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/services"
                        className="mt-2 block rounded-xl px-4 py-3 text-[13px] font-semibold transition-colors hover:bg-[color:var(--sf-surface)]"
                        style={{ color: "var(--sf-accent)" }}
                      >
                        All services →
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.path}
                  className="transition-colors hover:text-[color:var(--sf-accent)]"
                  style={{
                    color: isActive(link.path) ? "var(--sf-accent)" : "var(--sf-muted)",
                  }}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              className="sf-sora hidden cursor-pointer items-center gap-[7px] rounded-full px-4 py-[9px] text-[12px] font-semibold transition-colors sm:flex"
              style={{
                border: "1px solid var(--sf-border-strong)",
                color: "var(--sf-muted)",
              }}
            >
              <span className="text-[13px]">{theme === "dark" ? "☀" : "☾"}</span>
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <Link
              href="/contact"
              className="sf-btn-primary hidden px-[22px] py-[11px] text-[13px] sm:inline-flex"
            >
              Book a call
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full lg:hidden"
              style={{ border: "1px solid var(--sf-border-strong)" }}
            >
              <span
                className="block h-[2px] w-4 transition-transform"
                style={{
                  backgroundColor: "var(--sf-text)",
                  transform: mobileOpen ? "translateY(3.5px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block h-[2px] w-4 transition-transform"
                style={{
                  backgroundColor: "var(--sf-text)",
                  transform: mobileOpen ? "translateY(-3.5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="border-t px-5 pb-8 pt-4 lg:hidden animate-fade-in-down"
            style={{ borderColor: "var(--sf-border)", backgroundColor: "var(--sf-bg)" }}
          >
            <div className="sf-sora flex flex-col gap-1 text-[15px] font-semibold">
              {NAV_LINKS.filter((l) => !l.dropdown).map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="rounded-xl px-3 py-3"
                  style={{
                    color: isActive(link.path) ? "var(--sf-accent)" : "var(--sf-text)",
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <div className="sf-mono mt-3 px-3 text-[11px] font-medium tracking-[0.15em]" style={{ color: "var(--sf-faint)" }}>
                SERVICES
              </div>
              {SF_SERVICES.map((service) => (
                <Link
                  key={service.path}
                  href={service.path}
                  className="rounded-xl px-3 py-2 text-[14px]"
                  style={{ color: "var(--sf-muted)" }}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3 px-3">
              <button
                type="button"
                onClick={toggle}
                className="sf-sora flex cursor-pointer items-center gap-[7px] rounded-full px-4 py-[9px] text-[12px] font-semibold"
                style={{ border: "1px solid var(--sf-border-strong)", color: "var(--sf-muted)" }}
              >
                <span className="text-[13px]">{theme === "dark" ? "☀" : "☾"}</span>
                {theme === "dark" ? "Light" : "Dark"}
              </button>
              <Link href="/contact" className="sf-btn-primary px-[22px] py-[11px] text-[13px]">
                Book a call
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
