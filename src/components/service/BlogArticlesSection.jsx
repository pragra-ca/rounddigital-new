"use client";

import React from "react";
import Image from "next/image";
import blog1 from "@/assets/service/images/blog1.png";
import blog2 from "@/assets/service/images/blog2.png";
import blog3 from "@/assets/service/images/blog3.png";
import blog4 from "@/assets/service/images/blog4.png";
import blog5 from "@/assets/service/images/blog5.png";
import blog6 from "@/assets/service/images/blog6.png";
import Link from "next/link";

const articles = [
  {
    slug: "cybersecurity-best-practices-2025",
    tag: "CYBERSECURITY",
    title:
      "Essential Cybersecurity Best Practices for Small Businesses in 2025",
    desc: "Protect your business from cyber threats with these proven security strategies and implementation guidelines...",
    image: blog1,
    category: "CYBERSECURITY",
    date: "January 15, 2025",
    author: "Andy Smith",
    authorImage: "/images/th.jpeg",
    heroImage: "/images/tech1.png",
    img: blog1,
    description:
      "Learn the essential cybersecurity practices every small business needs to implement in 2025 to protect against evolving threats.",
    content: `
      <h3>Why Cybersecurity Matters for Small Businesses</h3>
      <p>Small businesses are increasingly targeted by cybercriminals. Here's how to protect your organization with essential security practices.</p>
      <ul>
        <li>Multi-factor authentication implementation</li>
        <li>Regular security awareness training</li>
        <li>Data backup and recovery strategies</li>
        <li>Network security best practices</li>
      </ul>
      <h3>Implementation Guide</h3>
      <p>Follow our step-by-step guide to implement these security measures in your organization.</p>
    `,
    tags: ["cybersecurity", "small business", "data protection", "security"],
    readingTime: "8 min read",
  },
  {
    slug: "cloud-migration-guide-2025",
    tag: "CLOUD SOLUTIONS",
    title: "Complete Guide to Cloud Migration: Strategy, Planning & Execution",
    desc: "Step-by-step guide to successfully migrate your business to the cloud with minimal downtime and maximum benefits...",
    image: blog2,
    category: "CLOUD SOLUTIONS",
    date: "January 12, 2025",
    author: "Sarah Chen",
    authorImage: "/images/th.jpeg",
    heroImage: "/images/tech2.png",
    img: blog2,
    description:
      "A comprehensive guide to planning and executing a successful cloud migration strategy for your business.",
    content: `
      <h3>Planning Your Cloud Migration</h3>
      <p>Successful cloud migration requires careful planning and execution. Here's our proven methodology.</p>
      <ul>
        <li>Assessment of current infrastructure</li>
        <li>Cloud platform selection criteria</li>
        <li>Migration timeline and phases</li>
        <li>Risk mitigation strategies</li>
      </ul>
      <h3>Best Practices</h3>
      <p>Learn from our experience migrating hundreds of businesses to the cloud successfully.</p>
    `,
    tags: [
      "cloud migration",
      "infrastructure",
      "digital transformation",
      "planning",
    ],
    readingTime: "10 min read",
  },
  {
    slug: "custom-software-development-trends-2025",
    tag: "SOFTWARE DEVELOPMENT",
    title: "Top Custom Software Development Trends to Watch in 2025",
    desc: "Discover the latest trends in custom software development that will drive business innovation and competitive advantage...",
    image: blog3,
    category: "SOFTWARE DEVELOPMENT",
    date: "January 10, 2025",
    author: "Michael Torres",
    authorImage: "/images/th.jpeg",
    heroImage: "/images/tech3.png",
    img: blog3,
    description:
      "Stay ahead of the curve with these emerging trends in custom software development for 2025.",
    content: `
      <h3>Emerging Development Trends</h3>
      <p>The software development landscape is evolving rapidly. Here are the key trends shaping 2025.</p>
      <ul>
        <li>AI-powered development tools</li>
        <li>Low-code/No-code platforms</li>
        <li>Microservices architecture</li>
        <li>DevOps and CI/CD integration</li>
      </ul>
      <h3>Implementation Strategies</h3>
      <p>Learn how to leverage these trends in your next software development project.</p>
    `,
    tags: ["software development", "trends", "AI", "microservices"],
    readingTime: "7 min read",
  },
  {
    slug: "enterprise-content-management-systems",
    tag: "ENTERPRISE SOLUTIONS",
    title: "Choosing the Right Enterprise Content Management System",
    desc: "Compare ECM solutions and learn how to select the best system for your organization's content management needs...",
    image: blog4,
    category: "ENTERPRISE SOLUTIONS",
    date: "January 8, 2025",
    author: "James Rodriguez",
    authorImage: "/images/th.jpeg",
    heroImage: "/images/mkt1.png",
    img: blog4,
    description:
      "A detailed comparison of enterprise content management systems to help you make the right choice for your organization.",
    content: `
      <h3>Understanding ECM Systems</h3>
      <p>Enterprise Content Management systems help organizations capture, manage, and deliver content efficiently.</p>
      <ul>
        <li>Document management capabilities</li>
        <li>Workflow automation features</li>
        <li>Security and compliance requirements</li>
        <li>Integration with existing systems</li>
      </ul>
      <h3>Selection Criteria</h3>
      <p>Use our comprehensive checklist to evaluate ECM solutions for your organization.</p>
    `,
    tags: ["ECM", "enterprise", "content management", "workflow"],
    readingTime: "9 min read",
  },
  {
    slug: "it-consulting-digital-transformation",
    tag: "IT CONSULTING",
    title: "How IT Consulting Drives Successful Digital Transformation",
    desc: "Learn how professional IT consulting services can accelerate your digital transformation journey and deliver measurable results...",
    image: blog5,
    category: "IT CONSULTING",
    date: "January 5, 2025",
    author: "Lisa Wang",
    authorImage: "/images/th.jpeg",
    heroImage: "/images/mkt2.png",
    img: blog5,
    description:
      "Discover how strategic IT consulting can transform your business operations and drive growth through digital innovation.",
    content: `
      <h3>The Role of IT Consulting</h3>
      <p>Professional IT consulting provides the expertise and strategy needed for successful digital transformation.</p>
      <ul>
        <li>Technology assessment and roadmap</li>
        <li>Change management strategies</li>
        <li>ROI optimization techniques</li>
        <li>Risk mitigation planning</li>
      </ul>
      <h3>Success Metrics</h3>
      <p>Measure the impact of your digital transformation initiatives with these key performance indicators.</p>
    `,
    tags: ["IT consulting", "digital transformation", "strategy", "ROI"],
    readingTime: "6 min read",
  },
  {
    slug: "web-application-security-testing",
    tag: "SOFTWARE TESTING",
    title: "Comprehensive Guide to Web Application Security Testing",
    desc: "Master the essential techniques for testing web application security and protecting against common vulnerabilities...",
    image: blog6,
    category: "SOFTWARE TESTING",
    date: "January 3, 2025",
    author: "David Park",
    authorImage: "/images/th.jpeg",
    heroImage: "/images/mkt3.png",
    img: blog6,
    description:
      "Learn the critical security testing methods to ensure your web applications are protected against threats.",
    content: `
      <h3>Security Testing Fundamentals</h3>
      <p>Comprehensive security testing is essential for protecting web applications from cyber threats.</p>
      <ul>
        <li>Vulnerability assessment techniques</li>
        <li>Penetration testing methodologies</li>
        <li>Automated security scanning tools</li>
        <li>Code review best practices</li>
      </ul>
      <h3>Testing Checklist</h3>
      <p>Use our detailed checklist to ensure comprehensive security testing coverage.</p>
    `,
    tags: [
      "security testing",
      "web applications",
      "vulnerabilities",
      "penetration testing",
    ],
    readingTime: "8 min read",
  },
];

export default function BlogArticlesSection() {
  const handleArticleClick = (article) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedBlogPost", JSON.stringify(article));
    }
  };
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
          IT Insights
        </p>
        <h2 className="text-4xl md:text-5xl font-bold drop-shadow-[0_2px_16px_#e1424222]">
          Latest IT Articles
        </h2>
        <p className="text-gray-400 mt-2">
          Expert insights on cybersecurity, cloud solutions & software
          development
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={`/blogs/${article.slug}`}
            className="block group h-full"
            onClick={() => handleArticleClick(article)}
          >
            <div className="relative h-full bg-[#232323] rounded-2xl shadow-xl border border-[#e14242]/20 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer flex flex-col">
              {/* 3D Glow on hover */}
              <div className="absolute -inset-3 rounded-2xl bg-[#e14242]/20 blur-2xl opacity-0 group-hover:opacity-80 transition-all duration-300 pointer-events-none z-0" />
              {/* Shine effect */}
              <div className="absolute left-4 top-4 w-12 h-12 bg-white/10 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-all duration-300 pointer-events-none z-0" />

              {/* Image Section - Fixed Height */}
              <div className="w-full h-48 relative z-10 flex-shrink-0">
                <Image
                  src={article.image}
                  alt="Article Thumbnail"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full rounded-t-2xl transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
                {/* Tag Overlay on Image */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-block px-3 py-1 bg-[#e14242] text-white font-bold uppercase text-xs rounded-full tracking-wider shadow-lg backdrop-blur-sm">
                    {article.tag}
                  </span>
                </div>
              </div>

              {/* Content Section - Flexible Height */}
              <div className="p-6 flex flex-col flex-grow relative z-10">
                <div className="flex-grow">
                  <h3 className="text-lg font-bold leading-snug mb-3 group-hover:text-[#e14242] transition-colors duration-300 drop-shadow line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                    {article.desc}
                  </p>
                </div>

                {/* Footer Section */}
                <div className="flex items-center justify-between pt-4 border-t border-[#e14242]/20 mt-auto">
                  <div className="flex items-center gap-2">
                    <img
                      src={article.authorImage}
                      alt={article.author}
                      className="w-6 h-6 rounded-full object-cover border border-[#e14242]/30"
                    />
                    <span className="text-xs text-gray-400 font-medium">
                      {article.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#e14242] font-semibold">
                      {article.readingTime}
                    </span>
                    <svg
                      className="w-4 h-4 text-[#e14242] group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5-5 5M6 12h12"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Glassy overlay for 3D effect */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#232323]/90 via-transparent to-transparent pointer-events-none z-10" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center relative z-10">
        <Link href="/blogs" className="inline-block">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#e14242] to-[#ff6a6a] text-white font-semibold shadow-lg border-b-4 border-[#e14242] hover:scale-105 hover:shadow-xl transition-all duration-300">
            VIEW MORE
          </button>
        </Link>
      </div>
      <style jsx>{`
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-float1 {
          animation: float1 7s ease-in-out infinite alternate;
        }
        .animate-float2 {
          animation: float2 9s ease-in-out infinite alternate;
        }
        .animate-float3 {
          animation: float3 8s ease-in-out infinite alternate;
        }
        .animate-float4 {
          animation: float4 10s ease-in-out infinite alternate;
        }
        .animate-float5 {
          animation: float5 12s ease-in-out infinite alternate;
        }
        @keyframes float1 {
          0% {
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(-30px) scale(1.15);
          }
        }
        @keyframes float2 {
          0% {
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(24px) scale(1.1);
          }
        }
        @keyframes float3 {
          0% {
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(-22px) scale(1.12);
          }
        }
        @keyframes float4 {
          0% {
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(18px) scale(1.08);
          }
        }
        @keyframes float5 {
          0% {
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(-26px) scale(1.13);
          }
        }
      `}</style>
    </section>
  );
}
