"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Use Cases", path: "/use-cases" },
  { name: "Blog", path: "/blogs" },
];

const Footer = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

    const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      setStatus("loading");

      // Replace this with your API or email service
      console.log("Subscribed email:", email);

      // Simulate API delay
      await new Promise((res) => setTimeout(res, 1000));

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Subscription failed:", error);
      setStatus("error");
    }
  };

  return (
    <footer className="bg-[#0E0E14] text-white px-6 md:px-12 pt-12 pb-8 rounded-t-3xl relative overflow-hidden">
      {/* 3D Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#e14242]/20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#e14242]/10 via-transparent to-transparent rounded-full blur-[120px] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-14 px-6 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Logo */}
          <Link href="/" className="shrink-0 group" aria-label="Home">
            <Image
              src="/images/home/page-1.svg"
              alt="Rounddigital Logo"
              width={200}
              height={38}
              priority
              className="drop-shadow-xl group-hover:scale-110 group-hover:drop-shadow-[0_12px_48px_#e14242] transition-all duration-300"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-7 text-base font-semibold text-white/90 tracking-wide">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className={`transition px-3 py-1 rounded-xl shadow-none hover:bg-white/10 hover:scale-105 ${
                  isActive(path) ? "text-red-500 scale-110" : "hover:text-red-500"
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 text-white text-2xl">
            <a
              href="https://www.linkedin.com/company/rounddigital/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition transform hover:scale-125 hover:drop-shadow-[0_4px_24px_#e14242] bg-[#181824] p-2 rounded-full border border-[#23232c] hover:border-[#e14242]"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-500 transition transform hover:scale-125 hover:drop-shadow-[0_4px_24px_#e14242] bg-[#181824] p-2 rounded-full border border-[#23232c] hover:border-[#e14242]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-sky-400 transition transform hover:scale-125 hover:drop-shadow-[0_4px_24px_#e14242] bg-[#181824] p-2 rounded-full border border-[#23232c] hover:border-[#e14242]"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Contact Info */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-white/90">
            {/* Left: Mississauga */}
            <div className="space-y-4 min-w-[240px]">
              <div className="bg-gradient-to-r from-[#e14242] to-[#ff6a6a] px-4 py-1 rounded-full text-xs font-bold w-fit tracking-widest shadow uppercase shadow-[0_2px_12px_#e14242] animate-pulse">
                Contact Us
              </div>
              <p>
                <span className="font-semibold text-white">Service:</span>{" "}
                <a
                  href="mailto:info@rounddigital.co"
                  className="hover:text-red-400 transition"
                >
                  info@rounddigital.co
                </a>
              </p>
              <address className="not-italic mt-2 leading-6">
                <span className="font-semibold text-white">Mississauga Office:</span>
                <br />
                160B - 110 Matheson Blvd W,
                <br />
                Mississauga, ON L5M 6B8, Canada
              </address>
            </div>

            {/* Right: Texas */}
            <div className="space-y-4 min-w-[240px] pt-6 md:pt-10">
              <p>
                <span className="font-semibold text-white">Careers:</span>{" "}
                <a
                  href="mailto:careers@rounddigital.co"
                  className="hover:text-red-400 transition"
                >
                  careers@rounddigital.co
                </a>
              </p>
              <address className="not-italic mt-2 leading-6">
                <span className="font-semibold text-white">Texas Office:</span>
                <br />
                450 Century Pkwy,
                <br />
                Ste 250, Allen, Texas 75013
              </address>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-[#181824] p-8 rounded-2xl w-full max-w-md shadow-2xl border border-zinc-800 relative overflow-hidden group">
            <div className="pointer-events-none absolute left-4 top-4 w-2/3 h-1/4 bg-white/20 rounded-t-2xl blur-[2px] opacity-60 z-10" />
            <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-4 relative z-20"
      autoComplete="off"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border border-gray-700 rounded bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition shadow-sm"
        required
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto bg-gradient-to-r from-[#e14242] to-[#ff6a6a] hover:from-[#ff6a6a] hover:to-[#e14242] text-white px-6 py-2 rounded-full font-bold shadow transition text-sm tracking-wide border-b-4 border-[#e14242] hover:scale-105 hover:shadow-lg duration-300"
      >
        {status === "loading" ? "Submitting..." : "Subscribe"}
      </button>

      {status === "success" && (
        <p className="text-green-400 text-xs mt-2 w-full sm:w-auto">Subscribed successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-xs mt-2 w-full sm:w-auto">Something went wrong.</p>
      )}
    </form>
            <p className="text-xs text-gray-400 mt-3 text-center z-20 relative">
              Get the latest updates and offers.
            </p>
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 z-10"
              style={{
                boxShadow: "0 0 0 24px #e1424244, 0 12px 48px 0 #e1424244",
              }}
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-3 pt-2">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">Rounddigital</span>. All Rights Reserved.
          </p>
          <Link href="/privacy" className="hover:text-red-400 transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
