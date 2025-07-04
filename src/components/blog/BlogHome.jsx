import React from "react";
import { CategorySection } from "./CategorySection";
import { FeatureVideo } from "./FeatureVideo";
import Link from "next/link";

// ✅ Updated blog post data with complete structure
const basics = [
  {
    slug: "best-real-estate-company-2025",
    title: "Best Real Estate Company to Work For in 2025",
    author: "Julia Del Rosario",
    authorImage: "/images/th.jpeg",
    img: "/images/basics1.png",
    category: "THE BASICS",
    date: "March 1, 2025",
    heroImage: "/images/basics1.png",
    description:
      "Explore the top real estate companies to work for in 2025, what makes them stand out, and how they support their agents.",
    cta: "Read more →",
    content: `
      <h3>Why Company Culture Matters</h3>
      <p>Learn why choosing the right real estate company is vital to your success.</p>
    `,
    tags: ["real estate", "companies", "career"],
    readingTime: "5 min read",
    featured: false,
    relatedPosts: [],
    gallery: [],
  },
  {
    slug: "open-house-ideas-2025",
    title: "26 Open House Ideas That Will Actually Get You Leads",
    author: "Matthew Avila",
    authorImage: "/images/th.jpeg",
    img: "/images/basics2.png",
    category: "THE BASICS",
    date: "March 5, 2025",
    heroImage: "/images/basics2.png",
    description:
      "Here are 26 creative and proven ideas to attract more leads during your next open house in 2025.",
    cta: "Explore now →",
    content: `
      <h3>Creative Strategies</h3>
      <p>From cookies to VR tours — find what converts best in your market.</p>
    `,
    tags: ["real estate", "open house", "marketing"],
    readingTime: "6 min read",
    featured: false,
    relatedPosts: [],
    gallery: [],
  },
  {
    slug: "home-inspector-guide",
    title: "How to Choose a Home Inspector: A Playbook for Investors",
    author: "Aloun Khountham",
    authorImage: "/images/th.jpeg",
    img: "/images/basics3.png",
    category: "THE BASICS",
    date: "March 8, 2025",
    heroImage: "/images/basics3.png",
    description:
      "Use this playbook to pick the right home inspector, especially if you're an investor looking to protect your assets.",
    cta: "See the playbook →",
    content: `
      <h3>Investor-Proven Tips</h3>
      <p>Discover what top investors look for when hiring a home inspector.</p>
    `,
    tags: ["real estate", "inspection", "investment"],
    readingTime: "4 min read",
    featured: false,
    relatedPosts: [],
    gallery: [],
  },
];

const leadGen = [
  {
    slug: "top-crm-2025",
    title: "The 7 Best CRM for Real Estate in 2025",
    author: "Aloun Khountham",
    authorImage: "/images/th.jpeg",
    img: "/images/lead1.png",
    category: "LEAD GENERATION",
    date: "March 9, 2025",
    heroImage: "/images/lead1.png",
    description:
      "From client tracking to deal closing, these CRMs are the best for agents and brokers in 2025.",
    cta: "Compare tools →",
    content: `
      <h3>CRM Selection Guide</h3>
      <p>Choose the CRM that best fits your business size and lead workflow.</p>
    `,
    tags: ["CRM", "lead generation", "2025"],
    readingTime: "5 min read",
    featured: false,
    relatedPosts: [],
    gallery: [],
  },
  {
    slug: "real-estate-ai-tools",
    title: "The Best 6 Real Estate AI Tools for 2025",
    author: "Andrew Wan",
    authorImage: "/images/th.jpeg",
    img: "/images/lead2.jpg",
    category: "LEAD GENERATION",
    date: "March 12, 2025",
    heroImage: "/images/lead2.jpg",
    description:
      "AI tools are transforming real estate. Here are the 6 must-have AI-powered tools for 2025.",
    cta: "Discover tools →",
    content: `
      <h3>Top AI Picks</h3>
      <p>Boost lead gen, automate tasks, and win deals with AI tools.</p>
    `,
    tags: ["AI", "software", "real estate"],
    readingTime: "6 min read",
    featured: false,
    relatedPosts: [],
    gallery: [],
  },
  {
    slug: "prospecting-letters-2025",
    title: "11 Best Real Estate Prospecting Letter Templates for 2025",
    author: "Andrew Wan",
    authorImage: "/images/th.jpeg",
    img: "/images/lead3.png",
    category: "LEAD GENERATION",
    date: "March 15, 2025",
    heroImage: "/images/lead3.png",
    description:
      "Use these proven letter templates to warm up leads and close more deals in 2025.",
    cta: "Get templates →",
    content: `
      <h3>Prospecting Made Easy</h3>
      <p>Letters that spark replies and win listings.</p>
    `,
    tags: ["letters", "templates", "prospecting"],
    readingTime: "4 min read",
    featured: false,
    relatedPosts: [],
    gallery: [],
  },
];

// ✅ Video Feature data
const hero = {
  img: "/images/feature.png",
  title: "5 Outrageous Real Estate Marketing Stunts That Actually Worked",
};

const thumbs = [
  {
    img: "/images/thumb1.png",
    title: "5 Outrageous Real Estate Marketing Stunts That Actually Worked",
  },
  {
    img: "/images/thumb2.png",
    title: "Top 5 Real Estate Productivity Hacks | REALTOR Time Management Tips for Success",
  },
];

// ✅ Wrapper to handle saving to localStorage
const handleClick = (post) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("selectedBlogPost", JSON.stringify(post));
  }
};

export const BlogHome = () => {
  return (
    <main className="px-5 md:px-10 py-10 max-w-7xl mx-auto font-playfair">
      {/* Basics Section */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-zinc-800">The Basics</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {basics.map((post) => (
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

      {/* Lead Gen Section */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-zinc-800">Lead Generation</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {leadGen.map((post) => (
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

      {/* Feature Video Section */}
      <FeatureVideo hero={hero} thumbs={thumbs} />
    </main>
  );
};
