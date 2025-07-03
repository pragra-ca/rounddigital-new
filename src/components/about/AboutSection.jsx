import React from "react";
import Image from "next/image";
import men from "@/assets/about/men.png";
import mobile from "@/assets/about/mobile.png";
import Blcover from "@/assets/about/blcover.png";
import Yellowbg from "@/assets/about/yellowbg.png";

export default function AboutSection() {
  return (
    <section className="w-full bg-gradient-to-br mt-12 from-white via-zinc-100 to-white py-24 px-2 sm:px-6 md:px-12 relative overflow-hidden">
      {/* 3D Blobs for Depth */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#e14242]/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-black/10 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#e14242]/10 via-transparent to-transparent rounded-full blur-[120px] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center justify-between relative z-10">
        {/* Left: Modern Card */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10 items-center">
          <div className="relative w-full max-w-md rounded-[2.5rem] overflow-visible shadow-2xl border-0 bg-gradient-to-br from-white via-[#fff7f7] to-[#ffeaea] px-10 pt-20 pb-12 flex flex-col items-center transition-all duration-300 hover:shadow-[0_24px_64px_0_rgba(225,66,66,0.18)] hover:-translate-y-2 hover:scale-105">
            {/* Floating Mobile Image with Glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-gradient-to-tr from-[#e14242]/80 via-white/80 to-zinc-200/80 rounded-full p-3 shadow-2xl ring-4 ring-[#e14242]/10">
                <Image
                  src={mobile}
                  alt="Mobile UI"
                  className="w-36 h-36 object-contain rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
            {/* Card Content */}
            <span className="bg-[#e14242] text-white text-xs font-bold px-6 py-1 rounded-full shadow mb-6 mt-2 tracking-widest uppercase border border-white/80 shadow-[0_2px_16px_#e14242]">
              Mobile UI
            </span>
            <h3 className="text-3xl font-extrabold text-zinc-900 mb-2 text-center tracking-tight drop-shadow-2xl">
              Who We Are
            </h3>
            <p className="text-zinc-600 mb-6 text-center text-base">
              We design seamless mobile experiences that help you stand out and connect with your audience.
            </p>
            <a
              href="#"
              className="inline-block text-base font-bold text-white bg-gradient-to-r from-[#e14242] to-[#ff6a6a] px-6 py-2 rounded-full shadow-lg border-b-4 border-[#e14242] hover:from-[#ff6a6a] hover:to-[#e14242] hover:scale-105  transition-all duration-300"
            >
              Learn more
            </a>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col items-center mt-8">
            <div className="flex items-center gap-3 justify-center">
              <div className="bg-[#e14242] w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg shadow-[0_4px_24px_#e14242] animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#FFF"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.093 15.093 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.75a1 1 0 01-1 1C10.63 22.79 1.21 13.37 1.21 2a1 1 0 011-1H6a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
                </svg>
              </div>
              <span className="text-zinc-800 font-semibold text-lg">
                Call Us Today <span className="text-[#e14242] font-bold">905-407-5009</span>
              </span>
            </div>
            <p className="text-zinc-600 mt-3 text-center text-base">
              Let’s build your next big idea with{" "}
              <span className="text-[#e14242] font-bold">Rounddigital</span>.
            </p>
          </div>
        </div>

        {/* Right: Modern Card */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10 items-center">
          <div className="space-y-3 w-full flex flex-col items-center mb-4">
            <span className="inline-block bg-black text-white text-xs font-bold px-6 py-1 rounded-full shadow border border-[#e14242] tracking-widest uppercase shadow-[0_2px_16px_#e14242]">
              Business
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-zinc-900 text-center drop-shadow-2xl">
              Grow Your Business <br />
              <span className="text-[#e14242]">With Our Help</span>
            </h1>
          </div>
          <div className="relative w-full max-w-md rounded-[2.5rem] overflow-visible shadow-2xl border-0 bg-gradient-to-br from-white via-[#f7f7ff] to-[#eaeaff] px-10 pt-20 pb-12 flex flex-col items-center transition-all duration-300 hover:shadow-[0_24px_64px_0_rgba(25,26,35,0.18)] hover:-translate-y-2 hover:scale-105">
            {/* Floating Man Image with Glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-gradient-to-tr from-black/80 via-white/80 to-zinc-200/80 rounded-full p-3 shadow-2xl ring-4 ring-black/10">
                <Image
                  src={men}
                  alt="Business Man"
                  className="w-36 h-36 object-contain rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
            {/* Card Content */}
            <span className="bg-black text-white text-xs font-bold px-6 py-1 rounded-full shadow mb-6 mt-2 tracking-widest uppercase border border-[#e14242] shadow-[0_2px_16px_#e14242]">
              Team
            </span>
            <h3 className="text-3xl font-extrabold text-zinc-900 mb-2 text-center tracking-tight drop-shadow-2xl">
              Small Business
            </h3>
            <p className="text-zinc-600 mb-6 text-center text-base">
              See how our expert team can help your business grow and thrive in the digital world.
            </p>
            <a
              href="#"
              className="inline-block text-base font-bold text-white bg-gradient-to-r from-black to-[#e14242] px-6 py-2 rounded-full shadow-lg border-b-4 border-black hover:from-[#e14242] hover:to-black hover:scale-105  transition-all duration-300"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}