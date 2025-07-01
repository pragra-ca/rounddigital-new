import React from "react";
import Image from "next/image";
import men from "@/assets/about/men.png";
import mobile from "@/assets/about/mobile.png";
import Blcover from "@/assets/about/blcover.png";
import Yellowbg from "@/assets/about/yellowbg.png";

export default function AboutSection() {
  return (
    <section className="w-full bg-gradient-to-br mt-12 from-white via-zinc-100 to-white py-24 px-2 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center justify-between">
        {/* Left: Card with floating image and info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10 items-center">
          <div className="relative w-full max-w-md rounded-3xl overflow-visible shadow-2xl border border-zinc-200 bg-white/95 px-8 pt-16 pb-10 flex flex-col items-center">
            {/* Floating Mobile Image */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-gradient-to-tr from-red-600/80 via-white/70 to-zinc-200/80 rounded-full p-2 shadow-xl">
                <Image
                  src={mobile}
                  alt="Mobile UI"
                  className="w-32 h-32 object-contain rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
            {/* Card Content */}
            <span className="bg-red-600 text-white text-xs font-bold px-5 py-1 rounded-full shadow mb-6 mt-2 tracking-widest uppercase border border-white/80">
              Mobile UI
            </span>
            <h3 className="text-2xl font-extrabold text-zinc-900 mb-2 text-center tracking-tight">
              Who We Are
            </h3>
            <p className="text-zinc-600 mb-6 text-center text-base">
              We design seamless mobile experiences that help you stand out and connect with your audience.
            </p>
            <a
              href="#"
              className="inline-block text-sm font-bold text-red-600 border-b-2 border-red-600 hover:text-black hover:border-black transition"
            >
              Learn more
            </a>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col items-center mt-8">
            <div className="flex items-center gap-3 justify-center">
              <div className="bg-red-600 w-11 h-11 flex items-center justify-center rounded-xl shadow-lg">
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
                Call Us Today <span className="text-red-600 font-bold">100-01-9719</span>
              </span>
            </div>
            <p className="text-zinc-600 mt-3 text-center text-base">
              Let’s build your next big idea with{" "}
              <span className="text-red-600 font-bold">Rounddigital</span>.
            </p>
          </div>
        </div>

        {/* Right: Card with floating image and info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10 items-center">
          <div className="space-y-3 w-full flex flex-col items-center mb-4">
            <span className="inline-block bg-black text-white text-xs font-bold px-5 py-1 rounded-full shadow border border-red-600 tracking-widest uppercase">
              Business
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-zinc-900 text-center drop-shadow">
              Grow Your Business <br />
              <span className="text-red-600">With Our Help</span>
            </h1>
          </div>
          <div className="relative w-full max-w-md rounded-3xl overflow-visible shadow-2xl border border-zinc-200 bg-white/95 px-8 pt-16 pb-10 flex flex-col items-center">
            {/* Floating Man Image */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-gradient-to-tr from-black/80 via-white/70 to-zinc-200/80 rounded-full p-2 shadow-xl">
                <Image
                  src={men}
                  alt="Business Man"
                  className="w-32 h-32 object-contain rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
            {/* Card Content */}
            <span className="bg-black text-white text-xs font-bold px-5 py-1 rounded-full shadow mb-6 mt-2 tracking-widest uppercase border border-red-600">
              Team
            </span>
            <h3 className="text-2xl font-extrabold text-zinc-900 mb-2 text-center tracking-tight">
              Small Business
            </h3>
            <p className="text-zinc-600 mb-6 text-center text-base">
              See how our expert team can help your business grow and thrive in the digital world.
            </p>
            <a
              href="#"
              className="inline-block text-sm font-bold text-red-600 border-b-2 border-red-600 hover:text-black hover:border-black transition"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}