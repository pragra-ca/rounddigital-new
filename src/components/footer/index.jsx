"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Use Cases", path: "/use-cases" },
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blogs" },
];

const Footer = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <footer className="bg-[#0E0E14] text-white px-6 md:px-12 pt-12 pb-8 rounded-t-3xl">
      <div className="max-w-7xl mx-auto space-y-14 px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="Home">
            <Image
              src="/images/home/page-1.svg"
              alt="Rounddigital Logo"
              width={200}
              height={38}
              priority
              className="drop-shadow-xl"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-7 text-base font-semibold text-white/90 tracking-wide">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className={`transition px-2 py-1 rounded-lg ${
                  isActive(path)
                    ? "text-red-500 bg-white/10"
                    : "hover:text-red-500"
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 text-white text-2xl">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition"><FaLinkedinIn /></a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition"><FaTwitter /></a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Contact Info */}
          <div className="space-y-4 text-sm text-white/90 min-w-[220px]">
            <div className="bg-red-600 px-4 py-1 rounded-full text-xs font-bold w-fit tracking-widest shadow uppercase">
              Contact us
            </div>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a href="mailto:info@rounddigital.com" className="hover:text-red-400 transition">info@rounddigital.com</a>
            </p>
            <p>
              <span className="font-semibold text-white">Phone:</span>{" "}
              <a href="tel:5555678901" className="hover:text-red-400 transition">555-567-8901</a>
            </p>
            <address className="not-italic">
              <span className="font-semibold text-white">Address:</span><br />
              1234 Main St<br />
              Moonstone City, Stardust State 12345
            </address>
          </div>

          {/* Newsletter Form */}
          <div className="bg-[#181824] p-8 rounded-2xl w-full max-w-md ml-auto mt-4 lg:mt-0 shadow-xl border border-zinc-800">
            <form className="flex flex-col sm:flex-row items-center gap-4" autoComplete="off">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-700 rounded bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold shadow transition text-sm tracking-wide"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-3 text-center">
              Get the latest updates and offers.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-3 pt-2">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-white">Rounddigital</span>. All Rights Reserved.
          </p>
          <Link href="#" className="hover:text-red-400 transition">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;