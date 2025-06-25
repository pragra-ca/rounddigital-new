import React from "react";
import { CategorySection } from "./CategorySection";
import { FeatureVideo }   from "./FeatureVideo";

/* ─── mock data ─── */
const basics = [
  { img: "/images/basics1.png", title: "Best Real Estate Company to Work For in 2025", author: "Julia Del Rosario" },
  { img: "/images/basics2.png", title: "26 Open House Ideas That Will Actually Get You Leads", author: "Matthew Avila" },
  { img: "/images/basics3.png", title: "How to Choose a Home Inspector: A Playbook for Investors", author: "Aloun Khountham" },
];

const leadGen = [
  { img: "/images/lead1.png", title: "The 7 Best CRM for Real Estate in 2025", author: "Aloun Khountham" },
  { img: "/images/lead2.jpg", title: "The Best 6 Real Estate AI Tools for 2025", author: "Andrew Wan" },
  { img: "/images/lead3.png", title: "11 Best Real Estate Prospecting Letter Templates for 2025", author: "Andrew Wan" },
];

/* --- feature-video data (now split) --- */
const hero = {
  img:   "/images/feature.png",
  title: "5 Outrageous Real Estate Marketing Stunts That Actually Worked",
};

const thumbs = [
  {
    img:   "/images/thumb1.png",
    title: "5 Outrageous Real Estate Marketing Stunts That Actually Worked",
  },
  {
    img:   "/images/thumb2.png",
    title: "Top 5 Real Estate Productivity Hacks | REALTOR Time Management Tips for Success",
  },
];

export const BlogHome = () => (
  <main className="px-[46px] py-10 max-w-7xl mx-auto font-playfair">
    <CategorySection title="The Basics"        articles={basics}   />
    <CategorySection title="Lead Generation"   articles={leadGen}  />

    <FeatureVideo hero={hero} thumbs={thumbs} />
  </main>
);