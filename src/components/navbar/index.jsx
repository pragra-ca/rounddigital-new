"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-3 md:py-4 px-4 md:px-8 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" width={50} height={50} className="w-[80%]" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-gray-600 text-sm md:text-base">
          <Link href="/about" className="hover:text-gray-900">About us</Link>
          <Link href="/services" className="hover:text-gray-900">Services</Link>
          {/* <Link href="/use-cases" className="hover:text-gray-900">Use Cases</Link> */}
          <Link href="/pricing" className="hover:text-gray-900">Pricing</Link>
          <Link href="/blog" className="hover:text-gray-900">Blog</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="border border-gray-800 px-4 md:px-6 py-2 rounded-full text-sm md:text-base hover:bg-gray-100">
              Book a call
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="h-8 w-8 text-gray-700" /> : <Bars3Icon className="h-8 w-8 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-left px-8 bg-white py-4 space-y-4 shadow-lg">
          <Link href="/about" className="hover:text-gray-900 text-base" onClick={() => setIsOpen(false)}>About us</Link>
          <Link href="/services" className="hover:text-gray-900 text-base" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/use-cases" className="hover:text-gray-900 text-base" onClick={() => setIsOpen(false)}>Use Cases</Link>
          <Link href="/pricing" className="hover:text-gray-900 text-base" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="/blog" className="hover:text-gray-900 text-base" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact">
            <button className="border border-gray-800 px-6 py-2 rounded-full hover:bg-gray-100 text-base">
              Book a call
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
