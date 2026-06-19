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
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

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

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "AI & Machine Learning", path: "/services/ai-machine-learning" },
    { name: "Cloud Solutions", path: "/services/cloud-solutions" },
    { name: "Cybersecurity", path: "/services/cybersecurity" },
    { name: "Custom Software", path: "/services/custom-software" },
    { name: "Data & Analytics", path: "/services/data-analytics" },
    { name: "Digital Transformation", path: "/services/digital-transformation" },
  ];

  return (
    <footer className="bg-gradient-to-br from-ink to-[#0a0a0f] text-white">
      <div className="section-container">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/home/page-1.svg"
                alt="RoundDigital Logo"
                width={170}
                height={34}
                className="brightness-0 invert opacity-95 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering businesses with cutting-edge IT solutions, AI development, and cybersecurity services.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://www.linkedin.com/company/rounddigital/", icon: FaLinkedinIn, label: "LinkedIn" },
                { href: "https://facebook.com/", icon: FaFacebookF, label: "Facebook" },
                { href: "https://twitter.com/", icon: FaTwitter, label: "Twitter" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-white/5 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-primary"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    href={path}
                    className={`text-sm transition-colors ${
                      pathname === path ? "text-primary-light" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link href={path} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe for the latest insights on AI, cloud, and digital transformation.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors text-sm"
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors text-sm disabled:opacity-50"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
              {status === "success" && <p className="text-brand-green text-xs">Successfully subscribed!</p>}
              {status === "error" && <p className="text-red-400 text-xs">Something went wrong. Try again.</p>}
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">RoundDigital</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-primary-light transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-400 hover:text-primary-light transition-colors">Terms of Service</Link>
            <Link href="/contact" className="text-slate-400 hover:text-primary-light transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
