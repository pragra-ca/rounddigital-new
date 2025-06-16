import React from "react";
import Image from "next/image";
import men from "@/assets/about/men.png";
import mobile from "@/assets/about/mobile.png";

export default function Overview() {
  return (
    <div className="bg-[#F6F6F7] py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <div className="flex-1 bg-[#2C2C2C] text-white rounded-tl-[60px] rounded-br-[30px] p-10 md:p-14 relative overflow-hidden shadow-xl">
            <span className="bg-red-500 text-white text-[10px] font-semibold px-3 py-1 rounded-full inline-block mb-3 tracking-wider">
              OVERVIEW
            </span>
            <h2 className="text-[26px] md:text-[32px] font-semibold mb-1">
              Welcome to
            </h2>
            <h2 className="text-[26px] md:text-[32px] text-[#E5474B] font-semibold mb-3">
              Rounddigital
            </h2>
            <p className="text-[14px] text-gray-300 mb-8">
              An overview of Our Works
            </p>

            <div className="flex items-center gap-6">
              <div className="text-left">
                <p className="text-[32px] font-bold leading-snug">97%</p>
                <p className="text-[14px] text-white">
                  Focus on what is more <br /> important to you and be <br /> more productive
                </p>
              </div>
              <Image
                src={men}
                alt="woman holding tablet"
                className="w-[150px] h-auto object-contain"
              />
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 gap-6">
            <div className="bg-[#E5474B] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-semibold mb-2 uppercase">Benefits</p>
                <p className="text-[14px] leading-relaxed">
                  With Pulsar you save <br /> time, money and stress
                </p>
              </div>
              <button className="mt-4 border border-white text-white text-[12px] font-semibold px-4 py-2 rounded-full w-fit hover:bg-white hover:text-[#E5474B] transition">
                Read More
              </button>
            </div>

            <div className="bg-[#E5474B] text-white p-6 rounded-2xl shadow-lg flex items-center gap-4">
              <div>
                <p className="text-[10px] font-semibold mb-2 uppercase">Feature</p>
                <p className="text-[14px] leading-relaxed">
                  Maximize the return over your <br /> investments with Pulsar Template
                </p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            <div className="bg-[#2C2C2C] text-white p-6 rounded-2xl shadow-lg flex items-center gap-6">
              <div className="flex-1">
                <p className="text-[10px] font-semibold mb-2 uppercase">Mobile</p>
                <p className="text-[14px] leading-relaxed">
                  Fast and supreme <br /> support 24/7 all year <br /> around for your company
                </p>
              </div>
              <Image
                src={mobile}
                alt="mobile phone"
                className="w-[70px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
