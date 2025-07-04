import React from "react";
import Link from "next/link";

// Example blog data array
const blogPosts = [
  {
    slug: "real-estate-conferences-2025",
    title: "10 Must-Attend Real Estate Conferences + Events in 2025",
    category: "The Basics",
    date: "March 4, 2025",
    author: "Jolina Aliva",
    authorImage: "/images/th.jpeg",
    heroImage: "/images/hero.png",
    description:
      "Discover the top must-attend events in 2025 to network, gain industry insights, and stay ahead. Don’t miss these opportunities!",
    cta: "Keep reading →",
    content: `
      <h3>Why Attend Real Estate Conferences?</h3>
      <p>Attending real estate conferences is a great way to network with industry leaders, learn about the latest trends, and discover new opportunities for growth.</p>
      <ul>
        <li>Networking with top professionals</li>
        <li>Learning from keynote speakers</li>
        <li>Exploring new technologies</li>
        <li>Workshops and hands-on sessions</li>
      </ul>
      <h3>Featured Events</h3>
      <ol>
        <li><strong>Global Real Estate Summit</strong> – Toronto, Jan 2025</li>
        <li><strong>PropTech Expo</strong> – Vancouver, Feb 2025</li>
        <li><strong>Commercial Real Estate Forum</strong> – Calgary, Mar 2025</li>
        <li><strong>Women in Real Estate Conference</strong> – Montreal, Apr 2025</li>
      </ol>
      <h3>FAQs</h3>
      <p><strong>Q:</strong> How do I register?<br/><strong>A:</strong> Visit the official event website for registration details.</p>
      <p><strong>Q:</strong> Are there early bird discounts?<br/><strong>A:</strong> Yes, most events offer early bird pricing.</p>
    `,
    tags: ["real estate", "conferences", "events", "2025", "networking"],
    readingTime: "7 min read",
    featured: true,
    relatedPosts: [
      {
        slug: "networking-tips-2025",
        title: "Networking Tips for Real Estate Pros in 2025",
      },
      {
        slug: "proptech-trends",
        title: "PropTech Trends to Watch This Year",
      },
    ],
    gallery: ["/images/event1.jpg", "/images/event2.jpg", "/images/event3.jpg"],
  },
];

export const HeroSection = () => {
  const handlePostClick = (post) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedBlogPost", JSON.stringify(post));
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-white via-zinc-50 to-white border-b mt-12 py-12">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-8 lg:gap-14">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className="w-full flex flex-col md:flex-row items-center md:items-start gap-8"
          >
            {/* Hero Image */}
            <Link
              href={`/blogs/${post.slug}`}
              className="w-full md:w-1/2 flex justify-center md:justify-start group"
              data-aos="fade-right"
              data-aos-duration="900"
              onClick={() => handlePostClick(post)}
            >
              <div className="relative w-full max-w-lg cursor-pointer">
                <img
                  src={post.heroImage}
                  alt={post.title}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="hidden md:block absolute -top-8 -left-8 w-32 h-32 bg-[#dc2626]/20 rounded-full blur-2xl z-0" />
                <div className="hidden md:block absolute -bottom-8 -right-8 w-20 h-20 bg-[#dc2626]/10 rounded-full blur-2xl z-0" />
              </div>
            </Link>

            {/* Text Content */}
            <div
              className="w-full md:w-1/2 flex flex-col justify-center"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <span className="inline-block text-xs sm:text-sm font-bold text-white bg-[#dc2626] px-5 py-1.5 rounded-full shadow tracking-widest uppercase w-fit mb-3 animate-fade-in">
                {post.category}
              </span>

              <Link
                href={`/blogs/${post.slug}`}
                onClick={() => handlePostClick(post)}
              >
                <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-black font-playfair leading-tight text-zinc-900 animate-fade-in-up drop-shadow-sm hover:underline cursor-pointer">
                  {post.title.split("+")[0]}
                  <span className="text-[#dc2626]">
                    {post.title.includes("+") ? "+" + post.title.split("+")[1] : ""}
                  </span>
                </h2>
              </Link>

              {/* Author Info */}
              <div
                className="flex items-center gap-4 pt-6 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <img
                  src={post.authorImage}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#dc2626] shadow-lg"
                  alt={post.author}
                />
                <div className="flex flex-col">
                  <span className="text-base font-semibold font-roboto text-zinc-800">
                    {post.author}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
              </div>

              {/* Description */}
              <p
                className="mt-6 text-base sm:text-lg text-zinc-700 font-roboto leading-relaxed max-w-xl animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                {post.description}
              </p>

              {/* CTA */}
              <Link
                href={`/blogs/${post.slug}`}
                onClick={() => handlePostClick(post)}
                className="mt-7 inline-block text-base font-extrabold font-roboto text-[#dc2626] hover:underline hover:text-black transition-colors duration-200 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                {post.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s both;
        }
      `}</style>
    </section>
  );
};
