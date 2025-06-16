import React from "react";
import Image from "next/image";
import men from "@/assets/about/men.png";
import mobile from "@/assets/about/mobile.png";

export default function Intro() {
  return (
    <div className="bg-[#F6F6F7] py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="bg-[#2C2C2C] rounded-[2.5rem] text-white p-16 relative overflow-hidden shadow-2xl">
          <span className="bg-red-500 text-white text-[10px] font-semibold px-4 py-1 rounded-full inline-block mb-6 tracking-wider">
            INTRO
          </span>
          <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-bold mb-4 leading-tight">
            Let’s build your next big idea with us
          </h2>
          <p className="text-[16px] text-gray-300 mb-16">
            As easy as just double click and type to edit
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="bg-red-500 w-16 h-16 flex items-center justify-center rounded-full shadow-md">
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
              <h3 className="text-[16px] font-semibold">About Us</h3>
              <p className="text-[14px] text-gray-300 leading-relaxed">
                At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
              </p>
              <a href="#" className="text-[12px] underline font-semibold hover:text-red-400">
                LEARN MORE
              </a>
            </div>

            <div className="space-y-6">
              <div className="bg-red-500 w-16 h-16 flex items-center justify-center rounded-full shadow-md">
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
              <h3 className="text-[16px] font-semibold">Our Services</h3>
              <p className="text-[14px] text-gray-300 leading-relaxed">
                We help businesses grow through tailored digital strategies and services that scale results and drive online success.
              </p>
              <a href="#" className="text-[12px] underline font-semibold hover:text-red-400">
                LEARN MORE
              </a>
            </div>

            <div className="space-y-6">
              <div className="bg-red-500 w-16 h-16 flex items-center justify-center rounded-full shadow-md">
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
              <h3 className="text-[16px] font-semibold">Contact Us</h3>
              <p className="text-[14px] text-gray-300 leading-relaxed">
                Reach out to our team to explore how we can help your business thrive and navigate the digital landscape.
              </p>
              <a href="#" className="text-[12px] underline font-semibold hover:text-red-400">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}