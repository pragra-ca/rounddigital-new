import React from "react";
import Image from "next/image";
import men from "@/assets/about/men.png";
import mobile from "@/assets/about/mobile.png";

export default function Intro() {
  return (
    <div className="bg-[#F6F6F7] py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative bg-zinc-900 rounded-[2.5rem] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl flex flex-col items-center">

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-red-600/20 rounded-[2.5rem] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center w-full">
            <span className="bg-red-600 text-white text-xs font-bold px-6 py-1 rounded-full inline-block mb-7 tracking-widest shadow uppercase border-2 border-white/10">
              INTRO
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight text-center drop-shadow-lg">
              Let’s build your next <span className="text-red-500">big idea</span> with us
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-12 text-center max-w-2xl">
              Effortless editing, powerful results. Double click and type to make it yours.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* About Us */}
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-red-600/40 hover:scale-105 hover:shadow-red-300 transition-all duration-300">
                <div className="bg-red-600 w-14 h-14 flex items-center justify-center rounded-full shadow-lg mb-4 border-4 border-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">About Us</h3>
                <p className="text-sm text-gray-200 mb-4 text-center">
                  We help businesses grow and succeed online with creative digital solutions and a passionate team.
                </p>
                <a href="#" className="text-xs font-bold text-red-400 underline hover:text-white transition">
                  LEARN MORE
                </a>
              </div>

              {/* Our Services */}
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-red-600/40 hover:scale-105 hover:shadow-red-300 transition-all duration-300">
                <div className="bg-red-600 w-14 h-14 flex items-center justify-center rounded-full shadow-lg mb-4 border-4 border-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75v4.5m0 0v4.5m0-4.5h4.5m-4.5 0H7.5m12.75 0a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Our Services</h3>
                <p className="text-sm text-gray-200 mb-4 text-center">
                  Tailored digital strategies and scalable services to drive your business forward and maximize results.
                </p>
                <a href="#" className="text-xs font-bold text-red-400 underline hover:text-white transition">
                  LEARN MORE
                </a>
              </div>

              {/* Contact Us */}
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-red-600/40 hover:scale-105 hover:shadow-red-300 transition-all duration-300">
                <div className="bg-red-600 w-14 h-14 flex items-center justify-center rounded-full shadow-lg mb-4 border-4 border-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c1.657 0 3-1.567 3-3.5S13.657 1 12 1s-3 1.567-3 3.5S10.343 8 12 8zM4.75 22.25a1.25 1.25 0 011.25-1.25h12a1.25 1.25 0 011.25 1.25v.25H4.75v-.25z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Contact Us</h3>
                <p className="text-sm text-gray-200 mb-4 text-center">
                  Reach out to our team and discover how we can help your business thrive in the digital world.
                </p>
                <a href="#" className="text-xs font-bold text-red-400 underline hover:text-white transition">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}