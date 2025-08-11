"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import avatar3 from "@/assets/industries/avatar1.png";
import avatar2 from "@/assets/industries/avatar2.png";
import avatar1 from "@/assets/industries/avatar3.png";
import indus1 from "@/assets/industries/indus1.png";
import indus2 from "@/assets/industries/indus2.png";
import indus3 from "@/assets/industries/indus3.png";
import indus4 from "@/assets/industries/indus4.png";

export default function InnovationHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#f7f7f7] via-white to-[#f7f7f7] py-20 px-4 sm:px-8 lg:px-20 mt-12 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-60 z-0" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-40 z-0" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center px-6 z-10">
        {/* LEFT SIDE */}
        <div className="md:col-span-7 space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
            Bridging Innovation <br />
            with <span className="text-red-600 underline decoration-red-200 underline-offset-4">Production.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-7">
            <Link href="/services" className="bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 text-white px-8 py-3 rounded-lg text-base font-bold shadow-lg transition-all duration-200 animate-bounce-slow">
              Explore Now
            </Link>

            <div className="flex items-start gap-4">
              <div className="text-red-600 text-4xl font-extrabold drop-shadow animate-pulse">
                240+
              </div>
              <p className="text-base text-gray-700 max-w-xs leading-relaxed">
                Empowering industries to innovate, scale, and lead the market.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-5 flex flex-col items-start space-y-4">
          <p className="text-base text-gray-800 font-semibold">
            Trusted by <span className="font-bold text-red-600">2,500+ users</span>
          </p>

          <div className="flex items-center">
            <div className="flex -space-x-6">
              {[avatar1, avatar2, avatar3].map((avatar, idx) => (
                <Image
                  key={idx}
                  src={avatar}
                  alt={`User ${idx + 1}`}
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-white object-cover shadow-lg w-14 h-14 ring-2 ring-red-200"
                  style={{ zIndex: 10 - idx }}
                />
              ))}
            </div>
            <div className="ml-4 text-[#c8fe62] font-extrabold text-xl flex items-center">
              ★ 4.9
              <span className="ml-1 text-gray-400 text-base font-medium">/ 5</span>
            </div>
          </div>
        </div>

        {/* BOTTOM INDUSTRY CARDS */}
        <div className="md:col-span-12 mt-14">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[indus1, indus2, indus3, indus4].map((img, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_8px_32px_0_rgba(220,38,38,0.15)] transition duration-300 w-full h-[220px] group relative bg-white"
                style={{
                  border: "2px solid #f3f3f3",
                  boxShadow: "0 8px 32px 0 rgba(220,38,38,0.07)",
                }}
              >
                <Image
                  src={img}
                  alt={`Industry ${idx + 1}`}
                  width={300}
                  height={220}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-100/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 text-red-600 text-xs font-bold px-4 py-1 rounded-full shadow backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Explore Industry
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Custom animation for button */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-8px);}
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.2s infinite;
        }
      `}</style>
    </section>
  );
}