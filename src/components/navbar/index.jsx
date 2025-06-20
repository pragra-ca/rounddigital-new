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
    { name: "Blog", path: "/blog" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      } bg-white`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/home/page-1.svg"
              alt="Logo"
              width={230}
              height={38}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 ml-4">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className={`text-base font-medium transition hover:text-blue-800 ${
                  isActive(path) ? "text-red-600" : "text-gray-800"
                }`}
              >
                {name}
              </Link>
            ))}
            <button className="border border-gray-800 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 hover:text-white transition">
              Book a call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
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
        <div className="md:hidden bg-white px-4 pb-6 pt-4 shadow-md space-y-4">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              onClick={() => setIsOpen(false)}
              className={`block text-base font-medium transition ${
                isActive(path) ? "text-red-600" : "text-gray-800"
              } hover:text-blue-700`}
            >
              {name}
            </Link>
          ))}
          <button className="w-full border border-gray-800 px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-900 hover:text-white transition">
            Book a call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
