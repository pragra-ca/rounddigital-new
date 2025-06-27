"use client";
import React from "react";
import Image from "next/image";

import avatar3 from "@/assets/industries/avatar1.png";
import avatar2 from "@/assets/industries/avatar2.png";
import avatar1 from "@/assets/industries/avatar3.png";
import indus1 from "@/assets/industries/indus1.png";
import indus2 from "@/assets/industries/indus2.png";
import indus3 from "@/assets/industries/indus3.png";
import indus4 from "@/assets/industries/indus4.png";

export default function InnovationHeroSection() {
  return (
    <section className="bg-[#f7f7f7] py-16 px-4 sm:px-8 lg:px-20 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center px-6">
        {/* LEFT SIDE */}
        <div className="md:col-span-7 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
            Bridging Innovation <br />
            with <span className="text-red-600">Production.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-sm font-semibold shadow-md transition">
              Explore Now
            </button>

            <div className="flex items-start gap-4">
              <div className="text-red-600 text-3xl font-bold">240+</div>
              <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
                Empowering industries to innovate, scale, and lead the market.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-5 flex flex-col items-start md:items- space-y-3">
          <p className="text-sm text-gray-800 font-medium">
            Trusted by <span className="font-semibold">2,500+ users</span>
          </p>

          <div className="flex items-center">
            <div className="flex -space-x-6">
              {[avatar1, avatar2, avatar3].map((avatar, idx) => (
                <Image
                  key={idx}
                  src={avatar}
                  alt={`User ${idx + 1}`}
                  width={42}
                  height={42}
                  className="rounded-full border-2 border-white object-cover shadow-sm w-12 h-12"
                />
              ))}
            </div>
            <div className="ml-4 text-[#c8fe62] font-bold text-lg">★ 4.9</div>
          </div>
        </div>

        {/* BOTTOM INDUSTRY CARDS */}
        <div className="md:col-span-12 mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[indus1, indus2, indus3, indus4].map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 w-full h-[260px]"
              >
                <Image
                  src={img}
                  alt={`Industry ${idx + 1}`}
                  width={300}
                  height={260}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
