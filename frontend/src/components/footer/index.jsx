"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      setStatus("loading");
      
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Subscription failed:", error);
      setStatus("error");
    }
  };

  const isActive = (path) => pathname === path;

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blogs" },
  ];

  const serviceLinks = [
    { name: "AI & Machine Learning", path: "/services/ai-machine-learning" },
    { name: "Cloud Solutions", path: "/services/cloud-solutions" },
    { name: "Cybersecurity", path: "/services/cybersecurity" },
    { name: "Custom Software", path: "/services/custom-software" },
    { name: "Data & Analytics", path: "/services/data-analytics" },
    { name: "Digital Transformation", path: "/services/digital-transformation" },
    { name: "Global Talent", path: "/services/global-talent" },
    { name: "Engagement Models", path: "/services/engagement-models" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#191a23] to-[#0a0a0f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/home/page-1.svg"
                alt="Rounddigital Logo"
                width={180}
                height={36}
                className="hover:opacity-80 transition-opacity brightness-0 invert"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering businesses with cutting-edge IT solutions, AI development, and cybersecurity services.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/rounddigital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white/5 hover:bg-[#e14242] rounded-lg flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#e14242]"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/5 hover:bg-[#e14242] rounded-lg flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#e14242]"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 bg-white/5 hover:bg-[#e14242] rounded-lg flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#e14242]"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    href={path}
                    className={`text-gray-400 hover:text-[#e14242] transition-colors text-sm ${
                      isActive(path) ? "text-[#e14242]" : ""
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#e14242] transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-[#e14242] transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    href={path}
                    className="text-gray-400 hover:text-[#e14242] transition-colors text-sm"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e14242] transition-colors text-sm"
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-[#e14242] hover:bg-[#c93838] text-white font-semibold rounded-lg transition-all duration-300 text-sm disabled:opacity-50"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
              {status === "success" && (
                <p className="text-green-400 text-xs">Successfully subscribed!</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-xs">Something went wrong. Try again.</p>
              )}
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">RoundDigital</span>. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-[#e14242] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#e14242] transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-[#e14242] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
