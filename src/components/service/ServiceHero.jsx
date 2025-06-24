"use client";

import React from "react";
import {
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";

const brands = ["Layers", "Quotient", "Circooles", "Hourglass", "Command+R"];

export default function ServiceHero() {
  return (
    <section className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] text-white py-24 px-4 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute right-10 top-10 w-36 h-36 bg-red-500 rounded-full blur-3xl opacity-30 animate-pulse z-0" />

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
          Bringing Your <br />
          Dream Into <span className="text-red-500">Reality</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mt-6">
          We increase revenue and ensure sustainable long-term growth for your business through powerful I.T Solutions
        </p>
        <button className="mt-6 bg-red-500 hover:bg-red-600 transition-colors text-white font-semibold px-6 py-3 rounded-md text-sm">
          Book A Meeting
        </button>

        {/* Brand Section */}
        <div className="mt-16">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs tracking-wider uppercase">
            <div className="w-8 h-px bg-gray-600" />
            Trusted by Amazing Brands
            <div className="w-8 h-px bg-gray-600" />
          </div>
          <div className="mt-6 bg-[#2A2A2A] rounded-xl px-6 py-4 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex items-center gap-2 text-white font-semibold text-sm"
              >
                <span className="bg-gray-500 w-2.5 h-2.5 rounded-full" />
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="relative z-10 max-w-7xl mx-auto mt-28 px-4 py-8">
        <div className="flex flex-col gap-16 items-center text-center">
          {/* Row 1 - Text Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full text-left">
            {/* Left Column */}
            <div>
              <p className="text-red-500 uppercase text-xs font-semibold mb-2">How We Work</p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-4">
                Get a dedicated design team at a fraction of the cost.
              </h2>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between">
              <p className="text-gray-300 text-base mb-4">
                Grow your brand with high-quality design for a flat monthly fee. Work with senior designers. Subscribe and make as many requests as you need – no limits.
              </p>
              <button className="mt-2 bg-red-500 hover:bg-red-600 transition-colors text-black font-semibold px-6 py-3 rounded-md text-sm w-max">
                See Pricing
              </button>
            </div>
          </div>

          {/* Row 2 - Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-3 px-4">
              <div className="bg-[#333] p-4 rounded-full">
                <RocketLaunchIcon className="h-8 w-8 text-red-500" />
              </div>
              <h4 className="text-white font-semibold text-base">
                Subscribe & get started
              </h4>
              <p className="text-gray-400 text-sm">
                Submit as many design tasks as you need without worrying about individual project fees.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-3 px-4">
              <div className="bg-[#333] p-4 rounded-full">
                <CheckCircleIcon className="h-8 w-8 text-red-500" />
              </div>
              <h4 className="text-white font-semibold text-base">
                Polished designs – on time
              </h4>
              <p className="text-gray-400 text-sm">
                Our designers get to work to deliver your request. Receive your design within a few days.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-3 px-4">
              <div className="bg-[#333] p-4 rounded-full">
                <ArrowPathIcon className="h-8 w-8 text-red-500" />
              </div>
              <h4 className="text-white font-semibold text-base">
                Revisions made simple
              </h4>
              <p className="text-gray-400 text-sm">
                Custom designs, prompt replies and as many revisions as you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
