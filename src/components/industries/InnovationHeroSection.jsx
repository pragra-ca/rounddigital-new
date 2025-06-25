"use client";

import React from "react";
import Image from "next/image";

export default function InnovationHeroSection() {
  return (
    <section className="bg-[#f7f7f7] py-16 px-4 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Content */}
        <div className="md:col-span-6 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            Bridging Innovation <br /> with <span className="text-black">Production.</span>
          </h1>

          <div className="flex items-center gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md text-sm font-semibold">
              Explore Now
            </button>
            <div className="text-3xl font-bold text-red-500">240<span className="text-black"> +</span></div>
            <p className="text-sm text-gray-700 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>

        {/* Right Top Rating Content */}
        <div className="md:col-span-6 flex justify-end items-start gap-4">
          <div className="flex flex-col items-end space-y-1">
            <p className="text-sm text-black font-medium">Over 2500 Users Have Trusted</p>
            <div className="flex items-center gap-2">
              <Image src="https://via.placeholder.com/32" alt="User 1" width={32} height={32} className="rounded-full border border-white" />
              <Image src="https://via.placeholder.com/32" alt="User 2" width={32} height={32} className="rounded-full border border-white" />
              <Image src="https://via.placeholder.com/32" alt="User 3" width={32} height={32} className="rounded-full border border-white" />
              <span className="text-green-500 text-xl font-bold">4.9</span>
            </div>
          </div>
        </div>

        {/* Bottom Image Row */}
        <div className="md:col-span-12 mt-10 flex flex-wrap justify-center md:justify-between gap-6">
          <Image
            src="https://via.placeholder.com/180x240"
            alt="Worker 1"
            width={180}
            height={240}
            className="rounded-lg object-cover w-[180px] h-[240px]"
          />
          <Image
            src="https://via.placeholder.com/180x240"
            alt="Developer"
            width={180}
            height={240}
            className="rounded-lg object-cover w-[180px] h-[240px]"
          />
          <Image
            src="https://via.placeholder.com/180x240"
            alt="Worker 2"
            width={180}
            height={240}
            className="rounded-lg object-cover w-[180px] h-[240px]"
          />
          <Image
            src="https://via.placeholder.com/180x240"
            alt="Worker 3"
            width={180}
            height={240}
            className="rounded-lg object-cover w-[180px] h-[240px]"
          />
        </div>
      </div>
    </section>
  );
}