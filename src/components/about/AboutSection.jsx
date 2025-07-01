import React from "react";
import Image from "next/image";
import men from "@/assets/about/men.png";
import mobile from "@/assets/about/mobile.png";
import Blcover from "@/assets/about/blcover.png";
import Yellowbg from "@/assets/about/yellowbg.png";

export default function AboutSection() {
  return (
    <div className="w-full bg-[#f6f6f6] py-16 px-4 lg:pt-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 items-center">
        {/* Left Section */}
        <div className="w-full lg:w-[50%] relative">
          {/* Contact Text */}
          <div className="mb-8">
            <h1 className="text-[48px] font-semibold text-gray-900">Contact</h1>
            <p className="text-gray-600 mt-2">
              Let’s build your next big idea with rounddigital.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="bg-[#E14242] w-10 h-10 flex items-center justify-center rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#FFF"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.093 15.093 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.75a1 1 0 01-1 1C10.63 22.79 1.21 13.37 1.21 2a1 1 0 011-1H6a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
                </svg>
              </div>
              <p className="text-gray-800 font-medium">Call Us Today 100-01-9719</p>
            </div>
          </div>

          {/* Left Card (Mobile + Text) */}
          <div
            className="relative w-full max-w-[445px] h-[417px] bg-no-repeat bg-bottom rounded-xl overflow-hidden"
            style={{ backgroundImage: `url(${Blcover.src})` }}
          >
            <Image
              src={mobile}
              alt="Mobile UI"
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-8 right-8 text-white space-y-2 max-w-[200px] text-right">
              <h3 className="text-xl font-semibold">Who We Are</h3>
              <p className="text-sm">Learn how to become a sales machine</p>
              <a href="#" className="underline text-sm">
                Learn more
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[50%] flex flex-col items-start justify-start gap-6">
          {/* Business Badge + Heading */}
          <div className="space-y-4">
            <button className="bg-[#E14242] text-white text-sm px-3 py-1 rounded-md">
              BUSINESS
            </button>
            <h1 className="text-[48px] leading-tight font-semibold text-gray-900">
              Grow Your Business <br /> With Our Help
            </h1>
          </div>

          {/* Right Card (Man + Text) */}
          <div
            className="relative w-full h-[417px] bg-no-repeat bg-bottom rounded-xl overflow-hidden"
            style={{ backgroundImage: `url(${Yellowbg.src})` }}
          >
            <Image
              src={men}
              alt="Business Man"
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-8 left-8 text-black space-y-2 max-w-[200px]">
              <h3 className="text-xl font-semibold">Small Business</h3>
              <p className="text-sm">See how can we help your business</p>
              <a href="#" className="underline text-sm">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
