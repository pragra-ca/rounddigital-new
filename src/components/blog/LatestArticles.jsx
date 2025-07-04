import React from "react";
import { ArticleCard } from "./ArticleCard";
import Link from "next/link";

const blogPosts = [
  {
    slug: "real-estate-referral-fees-2025",
    title: "The Complete Guide to Real Estate Referral Fees for 2025",
    category: "THE BASICS",
    date: "April 8, 2025",
    author: "Yasbel Garcia",
    authorImage: "/images/th.jpeg",
    heroImage: "/images/article1.png",
    description:
      "Let's remove some of the mystery around real estate referrals and the associated fees. We'll review why referrals happen, explore how agreements work and offer you a template to get started.",
    cta: "Read the full guide →",
    content: `
      <h3>What Are Referral Fees?</h3>
      <p>Referral fees are payments made to agents who refer clients to other agents. This guide covers everything you need to know for 2025.</p>
      <ul>
        <li>Why referrals happen</li>
        <li>How agreements work</li>
        <li>Referral fee templates</li>
      </ul>
      <h3>Referral Agreement Template</h3>
      <p>Download our free template to get started with your own referral agreements.</p>
    `,
    tags: ["real estate", "referral", "fees", "guide", "2025"],
    readingTime: "5 min read",
    featured: false,
    relatedPosts: [
      {
        slug: "real-estate-conferences-2025",
        title: "10 Must-Attend Real Estate Conferences + Events in 2025",
      },
    ],
    gallery: ["/images/article1.png", "/images/event2.jpg"],
  },
  {
    slug: "best-real-estate-ai-tools-2025",
    title: "The Best 6 Real Estate AI Tools for 2025",
    category: "APPS + SOFTWARE",
    date: "April 6, 2025",
    author: "Andrew Wan",
    authorImage: "/images/th.jpeg",
    heroImage: "/images/article2.png",
    description:
      "Tools powered by artificial intelligence (AI) continue to become more popular in the real estate industry, and it's easy to see why!",
    cta: "Explore the tools →",
    content: `
      <h3>Why Use AI Tools?</h3>
      <p>AI tools can help you automate tasks, analyze data, and improve your workflow.</p>
      <ul>
        <li>Lead generation</li>
        <li>Market analysis</li>
        <li>Client communication</li>
      </ul>
      <h3>Top 6 AI Tools</h3>
      <ol>
        <li>Tool 1: RealAI</li>
        <li>Tool 2: PropBot</li>
        <li>Tool 3: HomeGenius</li>
        <li>Tool 4: MarketMind</li>
        <li>Tool 5: DealFinder</li>
        <li>Tool 6: SmartAgent</li>
      </ol>
    `,
    tags: ["real estate", "AI", "tools", "software", "2025"],
    readingTime: "6 min read",
    featured: false,
    relatedPosts: [
      {
        slug: "real-estate-referral-fees-2025",
        title: "The Complete Guide to Real Estate Referral Fees for 2025",
      },
    ],
    gallery: ["/images/article2.png", "/images/event3.jpg"],
  },
  {
    slug: "real-estate-trivia-2025",
    title: "Real Estate Trivia: 16 Fun Facts You Must Know in 2025",
    category: "REAL ESTATE HUMOR",
    date: "April 7, 2025",
    author: "Yasbel Garcia",
    authorImage: "/images/th.jpeg",
    heroImage: "/images/article3.png",
    description:
      "We compiled a list of real estate facts that are peculiar, surprising, quirky, and even bizarre but they're all actually true.",
    cta: "See all the facts →",
    content: `
      <h3>Fun Facts</h3>
      <ul>
        <li>The White House has 132 rooms.</li>
        <li>There's a house shaped like a shoe in Pennsylvania.</li>
        <li>In Scotland, homeowners paint their doors red when they pay off their mortgage.</li>
      </ul>
      <h3>More Trivia</h3>
      <p>Check out our full list for more fun real estate trivia!</p>
    `,
    tags: ["real estate", "trivia", "fun facts", "2025"],
    readingTime: "4 min read",
    featured: false,
    relatedPosts: [
      {
        slug: "best-real-estate-ai-tools-2025",
        title: "The Best 6 Real Estate AI Tools for 2025",
      },
    ],
    gallery: ["/images/article3.png"],
  },
];

export const LatestArticles = () => {
  const handleCardClick = (post) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedBlogPost", JSON.stringify(post));
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <h3 className="text-2xl sm:text-3xl font-semibold mx-auto max-w-[50rem] font-playfair text-gray-700 mb-8 py-2">
        The Latest
      </h3>

      <div className="grid gap-10">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="block group"
            onClick={() => handleCardClick(post)}
          >
            <ArticleCard
              img={post.heroImage}
              date={post.date}
              category={post.category}
              title={post.title}
              summary={post.description}
              author={post.author}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
