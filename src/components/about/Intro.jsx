import React from "react";
import Image from "next/image";
import men from "@/assets/about/men.png";
import mobile from "@/assets/about/mobile.png";

export default function Intro() {
  return (
    <div className="bg-[#F6F6F7] py-20 relative overflow-hidden">
      {/* 3D Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#e14242]/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-black/10 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#e14242]/10 via-transparent to-transparent rounded-full blur-[120px] z-0 pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-[#1a1a1a] rounded-[2.5rem] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-lg flex flex-col items-center border-2 border-[#e14242]/20">
          {/* Overlay Shine */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-[#e14242]/10 rounded-[2.5rem] pointer-events-none" />

          {/* Floating Images for 3D effect */}
          <div className="hidden md:block absolute -top-16 left-16 z-20 animate-float-slow">
            <div className="bg-gradient-to-tr from-[#e14242]/80 via-white/80 to-zinc-200/80 rounded-full p-2 shadow-lg ring-4 ring-[#e14242]/10">
              <Image
                src={mobile}
                alt="Mobile"
                width={80}
                height={80}
                className="w-20 h-20 object-contain rounded-full border-4 border-white shadow"
              />
            </div>
          </div>
          <div className="hidden md:block absolute -bottom-16 right-16 z-20 animate-float-slow-reverse">
            <div className="bg-gradient-to-tr from-black/80 via-white/80 to-zinc-200/80 rounded-full p-2 shadow-lg ring-4 ring-black/10">
              <Image
                src={men}
                alt="Men"
                width={80}
                height={80}
                className="w-20 h-20 object-contain rounded-full border-4 border-white shadow"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center w-full">
            <span className="bg-gradient-to-r from-[#e14242] to-[#ff6a6a] text-white text-xs font-bold px-7 py-2 rounded-full inline-block mb-7 tracking-widest shadow uppercase border border-white/10 shadow-[0_2px_8px_#e14242] animate-pulse">
              INTRO
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight text-center drop-shadow-[0_4px_16px_#e1424244]">
              Let’s build your next{" "}
              <span className="text-[#e14242]">big idea</span> with us
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-12 text-center max-w-2xl drop-shadow">
              Effortless editing, powerful results. Double click and type to
              make it yours.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* About Us */}
              <div className="flex flex-col items-center bg-gradient-to-br from-[#e14242]/10 via-white/10 to-black/10 backdrop-blur-md rounded-3xl p-10 shadow-lg border border-[#e14242]/20 hover:scale-105 hover:shadow-xl hover:border-[#e14242] transition-all duration-300 group">
                <div className="bg-gradient-to-tr from-[#e14242] to-[#ff6a6a] w-16 h-16 flex items-center justify-center rounded-full shadow mb-5 border-4 border-white/10 animate-pulse group-hover:scale-110 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white drop-shadow">
                  About Us
                </h3>
                <p className="text-base text-gray-200 mb-4 text-center">
                  We help businesses secure, scale, and succeed with
                  comprehensive IT solutions and cybersecurity expertise.
                </p>
                <a
                  href="/about"
                  className="text-xs font-bold text-[#e14242] underline hover:text-white transition"
                >
                  LEARN MORE
                </a>
              </div>

              {/* Our Services */}
              <div className="flex flex-col items-center bg-gradient-to-br from-[#e14242]/10 via-white/10 to-black/10 backdrop-blur-md rounded-3xl p-10 shadow-lg border border-[#e14242]/20 hover:scale-105 hover:shadow-xl hover:border-[#e14242] transition-all duration-300 group">
                <div className="bg-gradient-to-tr from-[#e14242] to-[#ff6a6a] w-16 h-16 flex items-center justify-center rounded-full shadow mb-5 border-4 border-white/10 animate-pulse group-hover:scale-110 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75v4.5m0 0v4.5m0-4.5h4.5m-4.5 0H7.5m12.75 0a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white drop-shadow">
                  Our Services
                </h3>
                <p className="text-base text-gray-200 mb-4 text-center">
                  Comprehensive IT services from cybersecurity and cloud
                  management to custom software development and enterprise
                  solutions.
                </p>
                <a
                  href="/services"
                  className="text-xs font-bold text-[#e14242] underline hover:text-white transition"
                >
                  LEARN MORE
                </a>
              </div>

              {/* Contact Us */}
              <div className="flex flex-col items-center bg-gradient-to-br from-[#e14242]/10 via-white/10 to-black/10 backdrop-blur-md rounded-3xl p-10 shadow-lg border border-[#e14242]/20 hover:scale-105 hover:shadow-xl hover:border-[#e14242] transition-all duration-300 group">
                <div className="bg-gradient-to-tr from-[#e14242] to-[#ff6a6a] w-16 h-16 flex items-center justify-center rounded-full shadow mb-5 border-4 border-white/10 animate-pulse group-hover:scale-110 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c1.657 0 3-1.567 3-3.5S13.657 1 12 1s-3 1.567-3 3.5S10.343 8 12 8zM4.75 22.25a1.25 1.25 0 011.25-1.25h12a1.25 1.25 0 011.25 1.25v.25H4.75v-.25z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white drop-shadow">
                  Contact Us
                </h3>
                <p className="text-base text-gray-200 mb-4 text-center">
                  Connect with our IT experts to discuss cybersecurity, cloud
                  solutions, and custom software development for your business.
                </p>
                <a
                  href="/contact"
                  className="text-xs font-bold text-[#e14242] underline hover:text-white transition"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }
        @keyframes float-slow-reverse {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(18px);
          }
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .animate-float-slow-reverse {
          animation: float-slow-reverse 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
