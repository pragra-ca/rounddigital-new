"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "@/assets/logo.svg";
import Image from "next/image";
const page1 = "/images/home/page-1.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`relative w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
      <div className="flex w-[1440px] items-center justify-between px-[100px] py-0 relative flex-[0_0_auto]">
          <img
            className="relative w-[230px] h-[38px]"
            alt="Page"
            src={page1}
          />

          <div className="inline-flex items-center justify-center gap-10 relative flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#000000] text-xl tracking-[0] leading-7 whitespace-nowrap">
              About us
            </div>

            <div className="relative w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#000000] text-xl tracking-[0] leading-7 whitespace-nowrap">
              Services
            </div>

            <div className="relative w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#000000] text-xl tracking-[0] leading-7 whitespace-nowrap">
              Use Cases
            </div>

            <div className="relative w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#000000] text-xl tracking-[0] leading-7 whitespace-nowrap">
              Pricing
            </div>

            <div className="relative w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#000000] text-xl tracking-[0] leading-7 whitespace-nowrap">
              Blog
            </div>

            <button className="all-[unset] box-border inline-flex items-start relative flex-[0_0_auto] border border-solid border-[#191a23] gap-2.5 px-[35px] py-5 rounded-[14px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#000000] text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
                Book a call
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-200">
              <Link
                href="/login"
                className="block w-full px-4 py-2 text-base font-medium text-center text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="block w-full px-4 py-2 mt-2 text-base font-medium text-center text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
    
  );
};

export default Navbar;
