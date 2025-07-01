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
        scrolled ? "shadow-lg bg-white/90 " : "bg-white"
      }`}
      style={{ WebkitBackdropFilter: scrolled ? "blur(8px)" : "none", backdropFilter: scrolled ? "blur(8px)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Home">
            <Image
              src="/images/logo.svg"
              alt="Rounddigital Logo"
              width={180}
              height={38}
              priority
              className="drop-shadow-md"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 ml-4">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className={`text-base font-semibold transition-colors duration-200 px-2 py-1 rounded-lg ${
                  isActive(path)
                    ? "text-red-600 bg-red-50"
                    : "text-gray-800 hover:text-red-600 hover:bg-zinc-100"
                }`}
              >
                {name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 border border-red-600 px-5 py-2 rounded-full text-sm font-semibold bg-red-600 text-white hover:bg-white hover:text-red-600 hover:shadow transition-all duration-200"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 px-4 pb-6 pt-4 shadow-xl space-y-4 rounded-b-2xl border-t border-zinc-200 animate-fade-in-down">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              onClick={() => setIsOpen(false)}
              className={`block text-base font-semibold px-2 py-2 rounded-lg transition-colors duration-200 ${
                isActive(path)
                  ? "text-red-600 bg-red-50"
                  : "text-gray-800 hover:text-red-600 hover:bg-zinc-100"
              }`}
            >
              {name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full block border border-red-600 px-4 py-3 rounded-full text-sm font-semibold bg-red-600 text-white hover:bg-white hover:text-red-600 hover:shadow transition-all duration-200 text-center"
          >
            Book a call
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;