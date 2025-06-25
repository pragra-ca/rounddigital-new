"use client";

import React from "react";
import Image from "next/image";

const articles = [
  {
    tag: "BRANDING",
    title: "What is the branding, and what we need it?",
    desc: "On the other hand, we denounce with righteous indignation and...",
    image: "/blog-1.jpg",
  },
  {
    tag: "TIKTOK",
    title: "What is the branding, and what we need it?",
    desc: "On the other hand, we denounce with righteous indignation and...",
    image: "/blog-2.jpg",
  },
  {
    tag: "LOGO DESIGN",
    title: "What is the branding, and what we need it?",
    desc: "On the other hand, we denounce with righteous indignation and...",
    image: "/blog-3.jpg",
  },
  {
    tag: "FB",
    title: "What is the branding, and what we need it?",
    desc: "On the other hand, we denounce with righteous indignation and...",
    image: "/blog-4.jpg",
  },
  {
    tag: "AI",
    title: "What is the branding, and what we need it?",
    desc: "On the other hand, we denounce with righteous indignation and...",
    image: "/blog-5.jpg",
  },
  {
    tag: "NFT",
    title: "What is the branding, and what we need it?",
    desc: "On the other hand, we denounce with righteous indignation and...",
    image: "/blog-6.jpg",
  },
];

export default function BlogArticlesSection() {
  return (
    <section className="bg-[#1E1E1E] py-20 px-4 md:px-20 text-white font-sans">
      <div className="text-center mb-14">
        <p className="text-sm text-red-500 font-semibold uppercase tracking-wide">
          Blogs
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">News & Articles</h2>
        <p className="text-gray-400 mt-2">Best Articles to get started</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border border-red-500 rounded-xl overflow-hidden flex bg-[#1E1E1E]"
          >
            <div className="w-1/2 h-full min-h-[160px]">
              <Image
                src={article.image}
                alt="Article Thumbnail"
                width={500}
                height={300}
                className="object-cover w-full h-full rounded-l-xl"
              />
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-between">
              <div>
                <p className="text-xs text-red-500 font-bold uppercase mb-2">
                  {article.tag}
                </p>
                <h3 className="text-md font-semibold leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                  {article.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="border border-red-500 text-white px-6 py-2 rounded-full hover:bg-red-500 transition-all">
          LOAD MORE
        </button>
      </div>
    </section>
  );
}
