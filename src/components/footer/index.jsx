"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0E0E14] text-white px-6 md:px-12 pt-14 pb-8 rounded-t-3xl">
      <div className="max-w-7xl container mx-auto space-y-10 px-4">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/home/page-1.svg"
              alt="Logo"
              width={230}
              height={38}
              priority
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-white/90">
            <a href="#" className="hover:underline transition">About us</a>
            <a href="#" className="hover:underline transition">Services</a>
            <a href="#" className="hover:underline transition">Use Cases</a>
            <a href="#" className="hover:underline transition">Pricing</a>
            <a href="#" className="hover:underline transition">Blog</a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 text-white text-lg">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition"><FaLinkedinIn /></a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition"><FaTwitter /></a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Contact Info */}
          <div className="space-y-4 text-sm text-white/90">
            <div className="bg-red-600 px-3 py-1 rounded text-xs font-semibold w-fit">
              Contact us:
            </div>
            <p>Email: info@rounddigital.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="bg-[#1A1A24] p-6 rounded-lg w-full max-w-md ml-auto mt-4 lg:mt-0">
            <form className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-600 rounded bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded transition text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-3">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="hover:underline transition">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
