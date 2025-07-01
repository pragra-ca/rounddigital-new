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

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blogs" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-2xl bg-white/80 backdrop-blur-lg"
          : "bg-white"
      }`}
      style={{
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled
          ? "0 8px 32px 0 rgba(225,66,66,0.08), 0 2px 8px 0 rgba(25,26,35,0.10)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Home">
            <Image
              src="/images/logo.svg"
              alt="Rounddigital Logo"
              width={180}
              height={38}
              priority
              className="drop-shadow-md group-hover:scale-105 group-hover:drop-shadow-[0_8px_32px_#e14242] transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 ml-4">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className={`text-base font-semibold transition-all duration-200 px-3 py-2 rounded-xl shadow-none hover:shadow-[0_2px_12px_#e14242] hover:bg-white/10 hover:scale-105 ${
                  isActive(path)
                    ? "text-red-600 bg-white/20 shadow-[0_2px_12px_#e14242] scale-110"
                    : "text-gray-800 hover:text-red-600"
                }`}
              >
                {name}
              </Link>
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
              {navLinks.map(({ name, path }) => (
                <Link
                  key={name}
                  href={path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-semibold px-3 py-3 rounded-xl transition-all duration-200 hover:shadow-[0_2px_12px_#e14242] hover:bg-[#e14242]/10 hover:scale-105 ${
                    isActive(path)
                      ? "text-red-600 bg-[#e14242]/10 shadow-[0_2px_12px_#e14242] scale-105"
                      : "text-gray-800 hover:text-red-600"
                  }`}
                >
                  {name}
                </Link>
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