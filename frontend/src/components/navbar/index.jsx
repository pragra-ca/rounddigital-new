"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { 
      name: "Services", 
      path: "/services",
      dropdown: [
        { name: "AI & Machine Learning", path: "/services/ai-machine-learning" },
        { name: "Cloud Solutions", path: "/services/cloud-solutions" },
        { name: "Cybersecurity", path: "/services/cybersecurity" },
        { name: "Custom Software Development", path: "/services/custom-software" },
        { name: "Data & Analytics", path: "/services/data-analytics" },
        { name: "Digital Transformation", path: "/services/digital-transformation" },
        { name: "Global Talent Solutions", path: "/services/global-talent" },
        { name: "Engagement Models", path: "/services/engagement-models" },
      ]
    },
    { name: "Industries", path: "/industries" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blogs" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-2xl bg-white/80 backdrop-blur-lg" : "bg-white"
      }`}
      style={{
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        backgroundColor: "white", // Always white background
        boxShadow: scrolled
          ? "0 8px 32px 0 rgba(225,66,66,0.08), 0 2px 8px 0 rgba(25,26,35,0.10)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <Image
              src="/images/home/page-1.svg"
              alt="Rounddigital Logo"
              width={200}
              height={40}
              priority
              className="drop-shadow-lg group-hover:scale-105 transition-all duration-300 contrast-125 saturate-110"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 ml-4">
            {navLinks.map(({ name, path, dropdown }) => (
              <div key={name} className="relative">
                {dropdown ? (
                  <div
                    className="relative group"
                  >
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      onMouseEnter={() => setServicesOpen(true)}
                      className={`text-base font-semibold transition-all duration-200 px-3 py-2 rounded-xl shadow-none hover:bg-white/10 hover:scale-105 flex items-center gap-1 ${
                        pathname.startsWith('/services')
                          ? "text-red-600 bg-white/20 shadow-[0_2px_12px_#e14242] scale-110"
                          : "text-gray-800 hover:text-red-600"
                      }`}
                    >
                      {name}
                      <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50"
                        onMouseLeave={() => setServicesOpen(false)}
                        onMouseEnter={() => setServicesOpen(true)}
                      >
                        {dropdown.map((item) => (
                          <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setServicesOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={path}
                    className={`text-base font-semibold transition-all duration-200 px-3 py-2 rounded-xl shadow-none hover:bg-white/10 hover:scale-105 ${
                      isActive(path)
                        ? "text-red-600 bg-white/20 shadow-[0_2px_12px_#e14242] scale-110"
                        : "text-gray-800 hover:text-red-600"
                    }`}
                  >
                    {name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="ml-2 border border-red-600 px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#e14242] to-[#ff6a6a] text-white shadow-md border-b-4 border-[#e14242] transition-all duration-200 hover:from-[#ff6a6a] hover:to-[#e14242] hover:text-white hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#e14242]/40"
              style={{
                boxShadow:
                  "0 2px 8px 0 rgba(225,66,66,0.10), 0 1.5px 6px 0 rgba(25,26,35,0.07)",
              }}
            >
              Book a call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Improved Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/60 z-50 flex flex-col">
          <div className="bg-white/95 px-6 py-8 shadow-2xl rounded-b-3xl border-t border-zinc-200 mx-2 mt-2 animate-fade-in-down flex flex-col gap-4">
            <div className="flex justify-between items-center mb-4">
              <Link href="/" onClick={() => setIsOpen(false)} aria-label="Home">
                <Image
                  src="/images/logo.svg"
                  alt="Rounddigital Logo"
                  width={140}
                  height={32}
                  priority
                  className="drop-shadow-md"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-800 focus:outline-none"
                aria-label="Close menu"
              >
                <XMarkIcon className="h-7 w-7" />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map(({ name, path, dropdown }) => (
                <div key={name}>
                  {dropdown ? (
                    <div>
                      <Link
                        href={path}
                        onClick={() => setIsOpen(false)}
                        className={`block text-base font-semibold px-3 py-3 rounded-xl transition-all duration-200 hover:shadow-[0_2px_12px_#e14242] hover:scale-105 ${
                          pathname.startsWith('/services')
                            ? "text-red-600 scale-105"
                            : "text-gray-800 hover:text-red-600"
                        }`}
                      >
                        {name}
                      </Link>
                      <div className="pl-4 mt-2 space-y-1">
                        {dropdown.map((item) => (
                          <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm px-3 py-2 text-gray-600 hover:text-red-600 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={path}
                      onClick={() => setIsOpen(false)}
                      className={`block text-base font-semibold px-3 py-3 rounded-xl transition-all duration-200 hover:shadow-[0_2px_12px_#e14242] hover:scale-105 ${
                        isActive(path)
                          ? "text-red-600 scale-105"
                          : "text-gray-800 hover:text-red-600"
                      }`}
                    >
                      {name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full block border border-red-600 px-4 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-[#e14242] to-[#ff6a6a] text-white shadow-md border-b-4 border-[#e14242] transition-all duration-200 hover:from-[#ff6a6a] hover:to-[#e14242] hover:text-white hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#e14242]/40 text-center mt-2"
                style={{
                  boxShadow:
                    "0 2px 8px 0 rgba(225,66,66,0.10), 0 1.5px 6px 0 rgba(25,26,35,0.07)",
                }}
              >
                Book a call
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
