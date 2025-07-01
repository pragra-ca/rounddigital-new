"use client";

import React from "react";
import Image from "next/image";
import blog1 from '@/assets/service/images/blog1.png';
import blog2 from '@/assets/service/images/blog2.png';
import blog3 from '@/assets/service/images/blog3.png';
import blog4 from '@/assets/service/images/blog4.png';
import blog5 from '@/assets/service/images/blog5.png';
import blog6 from '@/assets/service/images/blog6.png';

const articles = [
  {
    tag: "BRANDING",
    title: "What is the branding, and what we need it?",
    desc: "On the other hand, we denounce with righteous indignation and...",
    image: blog1,
  },
  {
    tag: "TIKTOK",
    title: "What is the branding, and what we need it?",
    desc: "On the other hand, we denounce with righteous indignation and...",
    image: blog2,
  },
  {
    tag: "LOGO DESIGN",
    title: "What is the branding, and what we need it?",
    desc: "On the other hand, we denounce with righteous indignation and...",
    image: blog3,
  },
  {
    tag: "FB",
    title: "What is the branding, and what we need it?",
    desc: "On the other hand, we denounce with righteous indignation and...",
    image: blog4,
  },
  {
    tag: "AI",
    title: "What is the branding, and what we need it?",
    desc: "On the other hand, we denounce with righteous indignation and...",
    image: blog5,
  },
  {
    tag: "NFT",
    title: "What is the branding, and what we need it?",
    desc: "On the other hand, we denounce with righteous indignation and...",
    image: blog6,
  },
];

export default function BlogArticlesSection() {
  return (
    <section className="relative bg-[#181818] py-20 px-4 md:px-20 text-white font-sans overflow-hidden">
      {/* Animated BG: Fewer Floating Dots */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* 5 floating balls for a subtle effect */}
        <div className="absolute top-[12%] left-[10%] w-4 h-4 bg-[#e14242] rounded-full opacity-25 animate-float1" />
        <div className="absolute top-[35%] left-[80%] w-6 h-6 bg-[#ff6a6a] rounded-full opacity-18 animate-float2" />
        <div className="absolute top-[70%] left-[60%] w-5 h-5 bg-[#e14242] rounded-full opacity-20 animate-float3" />
        <div className="absolute top-[55%] left-[20%] w-3 h-3 bg-[#ff6a6a] rounded-full opacity-22 animate-float4" />
        <div className="absolute top-[80%] left-[35%] w-4 h-4 bg-[#e14242] rounded-full opacity-15 animate-float5" />
      </div>

      <div className="text-center mb-14 relative z-10">
        <p className="text-sm text-red-500 font-semibold uppercase tracking-wide animate-pulse">
          Blogs
        </p>
        <h2 className="text-4xl md:text-5xl font-bold drop-shadow-[0_2px_16px_#e1424222]">
          News & Articles
        </h2>
        <p className="text-gray-400 mt-2">Best Articles to get started</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {articles.map((article, index) => (
          <div
            key={index}
            className="relative group rounded-2xl bg-[#232323] shadow-xl border border-[#e14242]/20 flex overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl"
            style={{ minHeight: 180 }}
          >
            {/* 3D Glow on hover */}
            <div className="absolute -inset-3 rounded-2xl bg-[#e14242]/20 blur-2xl opacity-0 group-hover:opacity-80 transition-all duration-300 pointer-events-none z-0" />
            {/* Shine effect */}
            <div className="absolute left-4 top-4 w-10 h-10 bg-white/10 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-all duration-300 pointer-events-none z-0" />

            <div className="w-1/2 h-full min-h-[160px] relative z-10">
              <Image
                src={article.image}
                alt="Article Thumbnail"
                width={500}
                height={300}
                className="object-cover w-full h-full rounded-l-2xl transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
              />
            </div>
            <div className="w-1/2 p-6 flex flex-col justify-center relative z-10">
              <div>
                <span className="inline-block px-3 py-1 bg-[#e14242]/20 text-[#e14242] font-bold uppercase text-xs rounded-full mb-3 tracking-wider shadow-sm">
                  {article.tag}
                </span>
                <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-[#e14242] transition-colors duration-300 drop-shadow">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                  {article.desc}
                </p>
              </div>
            </div>
            {/* Glassy overlay for 3D effect */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#181818]/80 via-transparent to-transparent pointer-events-none z-10" />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center relative z-10">
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#e14242] to-[#ff6a6a] text-white font-semibold shadow-lg border-b-4 border-[#e14242] hover:scale-105 hover:shadow-xl transition-all duration-300">
          LOAD MORE
        </button>
      </div>
      <style jsx>{`
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-float1 { animation: float1 7s ease-in-out infinite alternate; }
        .animate-float2 { animation: float2 9s ease-in-out infinite alternate; }
        .animate-float3 { animation: float3 8s ease-in-out infinite alternate; }
        .animate-float4 { animation: float4 10s ease-in-out infinite alternate; }
        .animate-float5 { animation: float5 12s ease-in-out infinite alternate; }
        @keyframes float1 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(-30px) scale(1.15);} }
        @keyframes float2 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(24px) scale(1.1);} }
        @keyframes float3 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(-22px) scale(1.12);} }
        @keyframes float4 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(18px) scale(1.08);} }
        @keyframes float5 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(-26px) scale(1.13);} }
      `}</style>
    </section>
  );
}
