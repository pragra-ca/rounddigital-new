/*  src/components/RoundDigitalPage.jsx  */
import React from "react";
import { CategorySection } from "./CategorySection";
import { TeamCarousel    } from "./TeamCarousel";
import { MissionSection  } from "./MissionSection";

/* ── article data ── */
const marketing = [
  {
    img: "/images/mkt1.png",
    title: "Drones for Real Estate Photography: How to Get Started + Top Picks",
    author: "Aloun Khountham",
  },
  {
    img: "/images/mkt2.png",
    title: "22 Real Estate Postcard Templates to Generate Leads [Design Guide]",
    author: "Ysabel Garcia",
  },
  {
    img: "/images/mkt3.png",
    title: "The 6 Best Virtual Staging Software + Virtual Staging Guide in 2025",
    author: "Julia Del Rosario",
  },
];

const techReviews = [
  {
    img: "/images/tech1.png",
    title: "15 Best Real Estate Software for Agents in 2025 (+ Pricing)",
    author: "Julia Del Rosario",
  },
  {
    img: "/images/tech2.png",
    title: "6 Best Real Estate Investing Apps",
    author: "Theresa Landicho",
  },
  {
    img: "/images/tech3.png",
    title: "6 Best Real Estate Website Builders of 2025",
    author: "Andrew Wan",
  },
];

/* ── team data ── */
const team = [
  { img: "/images/team1.png", name: "Gina Baker" },
  { img: "/images/team2.png", name: "Melanie Patterson" },
  { img: "/images/team3.png", name: "Britnay Wrenn" },
  { img: "/images/team4.png", name: "Julia Del Rosario" },
  { img: "/images/team5.png", name: "Hesed Joy Cabrera" },
];


export const MarketingSection = () => (
  <>
    <main className="px-[46px] py-10 max-w-7xl mx-auto font-playfair">
      <CategorySection title="Marketing"    articles={marketing}    />
      <CategorySection title="Tech Reviews" articles={techReviews} />
      <TeamCarousel   members={team} />
      <MissionSection />
    </main>

  </>
);