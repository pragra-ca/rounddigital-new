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
      {/* Animated BG: Floating Dots */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* 20+ floating balls for a richer effect */}
        <div className="absolute top-[10%] left-[8%] w-3 h-3 bg-[#e14242] rounded-full opacity-30 animate-float1" />
        <div className="absolute top-[20%] left-[18%] w-4 h-4 bg-[#ff6a6a] rounded-full opacity-20 animate-float2" />
        <div className="absolute top-[30%] left-[80%] w-2 h-2 bg-[#e14242] rounded-full opacity-40 animate-float3" />
        <div className="absolute top-[8%] left-[60%] w-5 h-5 bg-[#ff6a6a] rounded-full opacity-15 animate-float4" />
        <div className="absolute top-[75%] left-[85%] w-3 h-3 bg-[#e14242] rounded-full opacity-25 animate-float5" />
        <div className="absolute top-[33%] left-[66%] w-2 h-2 bg-[#ff6a6a] rounded-full opacity-25 animate-float6" />
        <div className="absolute top-[50%] left-[25%] w-4 h-4 bg-[#e14242] rounded-full opacity-20 animate-float7" />
        <div className="absolute top-[42%] left-[55%] w-3 h-3 bg-[#ff6a6a] rounded-full opacity-30 animate-float8" />
        <div className="absolute top-[60%] left-[10%] w-2 h-2 bg-[#e14242] rounded-full opacity-20 animate-float9" />
        <div className="absolute top-[80%] left-[40%] w-3 h-3 bg-[#ff6a6a] rounded-full opacity-15 animate-float10" />
        <div className="absolute top-[15%] left-[70%] w-4 h-4 bg-[#e14242] rounded-full opacity-18 animate-float11" />
        <div className="absolute top-[60%] left-[60%] w-2 h-2 bg-[#ff6a6a] rounded-full opacity-22 animate-float12" />
        <div className="absolute top-[85%] left-[20%] w-3 h-3 bg-[#e14242] rounded-full opacity-18 animate-float13" />
        <div className="absolute top-[70%] left-[70%] w-5 h-5 bg-[#ff6a6a] rounded-full opacity-13 animate-float14" />
        <div className="absolute top-[40%] left-[10%] w-2 h-2 bg-[#e14242] rounded-full opacity-22 animate-float15" />
        <div className="absolute top-[90%] left-[90%] w-3 h-3 bg-[#ff6a6a] rounded-full opacity-18 animate-float16" />
        <div className="absolute top-[5%] left-[50%] w-4 h-4 bg-[#e14242] rounded-full opacity-18 animate-float17" />
        <div className="absolute top-[55%] left-[80%] w-2 h-2 bg-[#ff6a6a] rounded-full opacity-22 animate-float18" />
        <div className="absolute top-[25%] left-[45%] w-3 h-3 bg-[#e14242] rounded-full opacity-18 animate-float19" />
        <div className="absolute top-[85%] left-[60%] w-5 h-5 bg-[#ff6a6a] rounded-full opacity-13 animate-float20" />
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
        .animate-float3 { animation: float3 6s ease-in-out infinite alternate; }
        .animate-float4 { animation: float4 10s ease-in-out infinite alternate; }
        .animate-float5 { animation: float5 8s ease-in-out infinite alternate; }
        .animate-float6 { animation: float6 11s ease-in-out infinite alternate; }
        .animate-float7 { animation: float7 13s ease-in-out infinite alternate; }
        .animate-float8 { animation: float8 8s ease-in-out infinite alternate; }
        .animate-float9 { animation: float9 12s ease-in-out infinite alternate; }
        .animate-float10 { animation: float10 9s ease-in-out infinite alternate; }
        .animate-float11 { animation: float11 10s ease-in-out infinite alternate; }
        .animate-float12 { animation: float12 12s ease-in-out infinite alternate; }
        .animate-float13 { animation: float13 8s ease-in-out infinite alternate; }
        .animate-float14 { animation: float14 14s ease-in-out infinite alternate; }
        .animate-float15 { animation: float15 9s ease-in-out infinite alternate; }
        .animate-float16 { animation: float16 11s ease-in-out infinite alternate; }
        .animate-float17 { animation: float17 13s ease-in-out infinite alternate; }
        .animate-float18 { animation: float18 7s ease-in-out infinite alternate; }
        .animate-float19 { animation: float19 10s ease-in-out infinite alternate; }
        .animate-float20 { animation: float20 15s ease-in-out infinite alternate; }
        @keyframes float1 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(-40px) scale(1.2);} }
        @keyframes float2 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(30px) scale(0.9);} }
        @keyframes float3 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(-25px) scale(1.1);} }
        @keyframes float4 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(35px) scale(1.15);} }
        @keyframes float5 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(-30px) scale(1);} }
        @keyframes float6 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(25px) scale(1.1);} }
        @keyframes float7 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(-35px) scale(1.15);} }
        @keyframes float8 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(20px) scale(1.05);} }
        @keyframes float9 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(-20px) scale(1.1);} }
        @keyframes float10 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(15px) scale(1.08);} }
        @keyframes float11 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(-32px) scale(1.1);} }
        @keyframes float12 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(28px) scale(1.13);} }
        @keyframes float13 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(-18px) scale(1.09);} }
        @keyframes float14 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(38px) scale(1.17);} }
        @keyframes float15 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(-22px) scale(1.07);} }
        @keyframes float16 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(24px) scale(1.11);} }
        @keyframes float17 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(-28px) scale(1.12);} }
        @keyframes float18 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(19px) scale(1.06);} }
        @keyframes float19 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(-26px) scale(1.13);} }
        @keyframes float20 { 0% { transform: translateY(0) scale(1);} 100% { transform: translateY(40px) scale(1.18);} }
      `}</style>
    </section>
  );
}
