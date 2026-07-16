"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  SparklesIcon,
  CloudIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

const serviceLinks = [
  {
    name: "AI & Machine Learning",
    path: "/services/ai-machine-learning",
    desc: "Agents, ML models & intelligent automation",
    icon: SparklesIcon,
  },
  {
    name: "Cloud Solutions",
    path: "/services/cloud-solutions",
    desc: "AWS, Azure & GCP architecture",
    icon: CloudIcon,
  },
  {
    name: "Cybersecurity",
    path: "/services/cybersecurity",
    desc: "Assessments, compliance & pen testing",
    icon: ShieldCheckIcon,
  },
  {
    name: "Custom Software",
    path: "/services/custom-software",
    desc: "Enterprise apps built to spec",
    icon: CodeBracketIcon,
  },
  {
    name: "Data & Analytics",
    path: "/services/data-analytics",
    desc: "Pipelines, dashboards & insights",
    icon: ChartBarIcon,
  },
  {
    name: "Digital Transformation",
    path: "/services/digital-transformation",
    desc: "Modernize legacy systems",
    icon: RocketLaunchIcon,
  },
  {
    name: "Global Talent Sourcing",
    path: "/services/global-talent",
    desc: "Any role, any industry",
    icon: UserGroupIcon,
  },
  {
    name: "Engagement Models",
    path: "/services/engagement-models",
    desc: "Flexible ways to work together",
    icon: BriefcaseIcon,
  },
];

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services", mega: true },
  { name: "Industries", path: "/industries" },
  { name: "Careers", path: "/careers" },
  { name: "Blog", path: "/blogs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (path) => pathname === path;
  const servicesActive = pathname?.startsWith("/services");

  const NavLink = ({ name, path, active }) => (
    <Link
      href={path}
      className={`relative text-sm font-semibold px-3.5 py-2 rounded-full transition-all duration-300 group ${
        active
          ? "text-primary"
          : "text-slate-600 hover:text-ink hover:bg-slate-100/80"
      }`}
    >
      {name}
      <span
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
          active ? "w-4/5" : "w-0 group-hover:w-2/3"
        }`}
      />
    </Link>
  );

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        {/* Scroll progress */}
        <div className="h-[2px] w-full bg-slate-100/80 pointer-events-auto">
          <div
            className="h-full bg-gradient-to-r from-primary via-primary-light to-primary transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className={`section-container transition-all duration-500 pointer-events-auto ${scrolled ? "pt-2 pb-1.5" : "py-2"}`}>
          <nav
            className={`relative flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? "rounded-2xl border border-slate-200/70 bg-white/75 backdrop-blur-2xl shadow-[0_8px_40px_-12px_rgba(25,26,35,0.15)] px-4 py-2.5"
                : "px-0 py-0"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center group shrink-0" aria-label="Home">
              <Image
                src="/images/home/page-1.svg"
                alt="RoundDigital"
                width={scrolled ? 168 : 190}
                height={scrolled ? 34 : 38}
                priority
                className="transition-all duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
              {navLinks.map(({ name, path, mega }) =>
                mega ? (
                  <div
                    key={name}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`relative flex items-center gap-1 text-sm font-semibold px-3.5 py-2 rounded-full transition-all duration-300 ${
                        servicesActive
                          ? "text-primary bg-primary/5"
                          : "text-slate-600 hover:text-ink hover:bg-slate-100/80"
                      }`}
                    >
                      {name}
                      <ChevronDownIcon
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[640px] nav-mega-enter">
                        <div className="rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-2xl shadow-[0_24px_60px_-16px_rgba(25,26,35,0.2)] overflow-hidden">
                          <div className="grid grid-cols-2 gap-1 p-3">
                            {serviceLinks.map(({ name: sName, path: sPath, desc, icon: Icon }) => (
                              <Link
                                key={sPath}
                                href={sPath}
                                className={`group flex items-start gap-3 p-3 rounded-xl transition-all duration-200 ${
                                  pathname === sPath
                                    ? "bg-primary/5 border border-primary/15"
                                    : "hover:bg-slate-50 border border-transparent"
                                }`}
                              >
                                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shrink-0 group-hover:from-primary group-hover:to-primary-light transition-all duration-300">
                                  <Icon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-sm font-semibold text-ink group-hover:text-primary transition-colors truncate">
                                    {sName}
                                  </p>
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{desc}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-slate-100 px-4 py-3 bg-slate-50/50 flex items-center justify-between">
                            <p className="text-xs text-slate-500">Not sure where to start?</p>
                            <Link
                              href="/services"
                              className="text-xs font-semibold text-primary hover:text-primary-dark inline-flex items-center gap-1"
                            >
                              View all services
                              <ArrowRightIcon className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink key={path} name={name} path={path} active={isActive(path)} />
                )
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="nav-cta-shine relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-primary to-[#ff5a5a] shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="relative z-10">Book a call</span>
                <ArrowRightIcon className="w-4 h-4 relative z-10" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 rounded-xl border border-slate-200 bg-white/80 flex items-center justify-center text-ink hover:border-primary/30 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-slate-100">
            <Image src="/images/home/page-1.svg" alt="RoundDigital" width={140} height={28} />
            <button
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 rounded-lg hover:bg-slate-100 flex items-center justify-center"
              aria-label="Close menu"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-5 space-y-1">
            {navLinks.map(({ name, path, mega }) =>
              mega ? (
                <div key={path}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      servicesActive ? "text-primary bg-primary/5" : "text-ink"
                    }`}
                  >
                    {name}
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="mt-1 mb-2 space-y-1 pl-2">
                      {serviceLinks.map(({ name: sName, path: sPath, icon: Icon }) => (
                        <Link
                          key={sPath}
                          href={sPath}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors ${
                            pathname === sPath
                              ? "text-primary bg-primary/5 font-semibold"
                              : "text-slate-600 hover:text-primary hover:bg-slate-50"
                          }`}
                        >
                          <Icon className="w-4 h-4 shrink-0" />
                          {sName}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-primary"
                      >
                        All services <ArrowRightIcon className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive(path) ? "text-primary bg-primary/5" : "text-ink hover:bg-slate-50"
                  }`}
                >
                  {name}
                </Link>
              )
            )}
          </nav>

          <div className="p-5 border-t border-slate-100 space-y-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center !rounded-full"
            >
              Book a call
            </Link>
            <p className="text-xs text-center text-slate-400">info@rounddigital.co</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
