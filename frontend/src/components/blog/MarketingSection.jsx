"use client";

import React from "react";
import { CategorySection } from "./CategorySection";
import { TeamCarousel } from "./TeamCarousel";
import { MissionSection } from "./MissionSection";
import Link from "next/link";

// ✅ Full data structure
const marketing = [
  {
    slug: "real-estate-drones-2025",
    img: "/images/mkt1.png",
    title: "Drones for Real Estate Photography: How to Get Started + Top Picks",
    author: "Aloun Khountham",
    authorImage: "/images/th.jpeg",
    category: "MARKETING",
    date: "April 1, 2025",
    heroImage: "/images/mkt1.png",
    description:
      "Get started with drones for real estate marketing. See the best drones and tips to shoot stunning property videos.",
    cta: "Learn how →",
    content: `
      <h3>Why Use Drones?</h3>
      <p>Drones can give your listings a unique edge with dynamic aerial views.</p>
      <h3>Top Picks</h3>
      <ul>
        <li>DJI Mini 3 Pro</li>
        <li>Autel EVO Lite+</li>
        <li>Skydio 2+</li>
      </ul>
    `,
    tags: ["drones", "real estate", "marketing"],
    readingTime: "5 min read",
    featured: false,
    relatedPosts: [],
    gallery: [],
  },
  {
    slug: "postcard-templates-2025",
    img: "/images/mkt2.png",
    title: "22 Real Estate Postcard Templates to Generate Leads [Design Guide]",
    author: "Ysabel Garcia",
    authorImage: "/images/th.jpeg",
    category: "MARKETING",
    date: "April 3, 2025",
    heroImage: "/images/mkt2.png",
    description:
      "Boost your lead gen with 22 postcard templates that catch attention and convert. Includes expert design tips.",
    cta: "Get templates →",
    content: `
      <h3>Postcard Best Practices</h3>
      <p>Design postcards that pop in a pile of mail and drive action.</p>
    `,
    tags: ["postcards", "design", "templates"],
    readingTime: "4 min read",
    featured: false,
    relatedPosts: [],
    gallery: [],
  },
  {
    slug: "virtual-staging-guide-2025",
    img: "/images/mkt3.png",
    title: "The 6 Best Virtual Staging Software + Virtual Staging Guide in 2025",
    author: "Julia Del Rosario",
    authorImage: "/images/th.jpeg",
    category: "MARKETING",
    date: "April 5, 2025",
    heroImage: "/images/mkt3.png",
    description:
      "A full breakdown of the top virtual staging software and a step-by-step staging guide for 2025 listings.",
    cta: "Start staging →",
    content: `
      <h3>Virtual vs Traditional</h3>
      <p>Learn how digital staging can save time and cost while selling faster.</p>
    `,
    tags: ["staging", "virtual", "real estate"],
    readingTime: "6 min read",
    featured: false,
    relatedPosts: [],
    gallery: [],
  },
];

const techReviews = [
  {
    slug: "real-estate-software-2025",
    img: "/images/tech1.png",
    title: "15 Best Real Estate Software for Agents in 2025 (+ Pricing)",
    author: "Julia Del Rosario",
    authorImage: "/images/th.jpeg",
    category: "TECH REVIEWS",
    date: "April 6, 2025",
    heroImage: "/images/tech1.png",
    description:
      "Explore 15 top software tools every agent needs in 2025. See pricing, features, and use cases.",
    cta: "See full list →",
    content: `
      <h3>Top Tools in 2025</h3>
      <p>From lead gen to closing deals — we cover them all.</p>
    `,
    tags: ["software", "real estate", "2025"],
    readingTime: "7 min read",
    featured: false,
    relatedPosts: [],
    gallery: [],
  },
  {
    slug: "real-estate-investing-apps-2025",
    img: "/images/tech2.png",
    title: "6 Best Real Estate Investing Apps",
    author: "Theresa Landicho",
    authorImage: "/images/th.jpeg",
    category: "TECH REVIEWS",
    date: "April 8, 2025",
    heroImage: "/images/tech2.png",
    description:
      "Looking to invest in property? These top apps make it easy, efficient, and smarter.",
    cta: "Compare now →",
    content: `
      <h3>Why Use Investing Apps?</h3>
      <p>Invest anytime, anywhere — even with small capital.</p>
    `,
    tags: ["apps", "investing", "real estate"],
    readingTime: "5 min read",
    featured: false,
    relatedPosts: [],
    gallery: [],
  },
  {
    slug: "real-estate-builders-2025",
    img: "/images/tech3.png",
    title: "6 Best Real Estate Website Builders of 2025",
    author: "Andrew Wan",
    authorImage: "/images/th.jpeg",
    category: "TECH REVIEWS",
    date: "April 10, 2025",
    heroImage: "/images/tech3.png",
    description:
      "These website builders make it fast and easy to launch a pro-level site for your real estate brand.",
    cta: "Start building →",
    content: `
      <h3>Top Picks</h3>
      <p>Find the builder that fits your brand style and budget.</p>
    `,
    tags: ["website", "builders", "real estate"],
    readingTime: "6 min read",
    featured: false,
    relatedPosts: [],
    gallery: [],
  },
];

// ✅ Team data remains unchanged
const team = [
  { img: "/images/team1.png", name: "Gina Baker" },
  { img: "/images/team2.png", name: "Melanie Patterson" },
  { img: "/images/team3.png", name: "Britnay Wrenn" },
  { img: "/images/team4.png", name: "Julia Del Rosario" },
  { img: "/images/team5.png", name: "Hesed Joy Cabrera" },
];

// ✅ Save selected post
const handleClick = (post) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("selectedBlogPost", JSON.stringify(post));
  }
};

export const MarketingSection = () => {
  return (
    <main className="px-5 md:px-10 py-10 max-w-7xl mx-auto font-playfair">
      {/* Marketing */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-zinc-800">Marketing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {marketing.map((post) => (
            <Link
              href={`/blogs/${post.slug}`}
              key={post.slug}
              onClick={() => handleClick(post)}
              className="group block"
            >
              <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
                <img src={post.img} alt={post.title} className="w-full h-52 object-cover" />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#dc2626] transition">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">By {post.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tech Reviews */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-zinc-800">Tech Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {techReviews.map((post) => (
            <Link
              href={`/blogs/${post.slug}`}
              key={post.slug}
              onClick={() => handleClick(post)}
              className="group block"
            >
              <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
                <img src={post.img} alt={post.title} className="w-full h-52 object-cover" />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#dc2626] transition">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">By {post.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Team + Mission */}
      <TeamCarousel members={team} />
      <MissionSection />
    </main>
  );
};
