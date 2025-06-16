import React from "react";
import Image from "next/image";
import men from "@/assets/about/men.png";
import mobile from "@/assets/about/mobile.png";

export default function AboutSection() {
  return (
    <div className="w-full bg-[#f6f6f6] py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Left */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
          <p className="text-gray-600 text-lg">
            Let’s build your next big idea with rounddigital.
          </p>
          <div className="flex items-center gap-3">
            <div className="bg-red-500 text-white p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m0 4h12m-6-2v2m0 4h12m-6-2v2m0 4h12m-6-2v2"
                />
              </svg>
            </div>
            <span className="text-gray-800 font-medium text-base">
              Call Us Today 100-01-9719
            </span>
          </div>

          {/* Black card with hand + phone */}
          <div
            className="relative rounded-3xl w-full min-h-[340px] overflow-hidden px-6 py-6 bg-cover object-fit bg-left"
            style={{
              backgroundImage: `url(${mobile.src})`,
              backgroundColor: "#000000",
            }}
          >
            {/* Optional dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Text Content */}
            <div className="relative z-10 top-40 left-72 text-white max-w-xs">
              <h3 className="text-lg font-semibold">Who We Are</h3>
              <p className="text-sm">Learn how to become a sales machine</p>
              <a href="#" className="underline text-sm mt-1 inline-block">
                Learn more
              </a>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2">
          <p className="bg-red-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-4 font-medium">
            BUSINESS
          </p>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Grow Your Business <br /> With Our Help
          </h2>

          {/* Peach card with person */}
          <div
            className="relative rounded-3xl px-6 py-6 min-h-[340px] flex items-start justify-between overflow-hidden bg-cover bg-right"
            style={{
              backgroundImage: `url(${men.src})`,
              backgroundColor: "#fde9dc",
            }}
          >
            <div className="z-10 max-w-xs">
              <p className="bg-red-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-4 font-medium">
                BUSINESS
              </p>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                Grow Your Business <br /> With Our Help
              </h2>
              <h3 className="font-semibold text-lg text-gray-800">
                Small Business
              </h3>
              <p className="text-sm text-gray-700">
                See how we can help your business
              </p>
              <a href="#" className="underline text-sm mt-1 inline-block">
                Learn more
              </a>
            </div>

            {/* Optional: semi-transparent overlay for better text readability */}
            <div className="absolute inset-0 bg-[#fde9dc]/80 z-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
