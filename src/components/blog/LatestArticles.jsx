import React from "react";
import Link from "next/link";
import ArticleCard from "./ArticleCard";
import { format } from 'date-fns';

// const blogPosts = [
//   {
//     slug: "real-estate-referral-fees-2025",
//     title: "The Complete Guide to Real Estate Referral Fees for 2025",
//     category: "THE BASICS",
//     date: "April 8, 2025",
//     author: "Yasbel Garcia",
//     authorImage: "/images/th.jpeg",
//     heroImage: "/images/article1.png",
//     description:
//       "Let's remove some of the mystery around real estate referrals and the associated fees. We'll review why referrals happen, explore how agreements work and offer you a template to get started.",
//     cta: "Read the full guide →",
//     content: `
//       <h3>What Are Referral Fees?</h3>
//       <p>Referral fees are payments made to agents who refer clients to other agents. This guide covers everything you need to know for 2025.</p>
//       <ul>
//         <li>Why referrals happen</li>
//         <li>How agreements work</li>
//         <li>Referral fee templates</li>
//       </ul>
//       <h3>Referral Agreement Template</h3>
//       <p>Download our free template to get started with your own referral agreements.</p>
//     `,
//     tags: ["real estate", "referral", "fees", "guide", "2025"],
//     readingTime: "5 min read",
//     featured: false,
//     relatedPosts: [
//       {
//         slug: "real-estate-conferences-2025",
//         title: "10 Must-Attend Real Estate Conferences + Events in 2025",
//       },
//     ],
//     gallery: ["/images/article1.png", "/images/event2.jpg"],
//   },
//   {
//     slug: "best-real-estate-ai-tools-2025",
//     title: "The Best 6 Real Estate AI Tools for 2025",
//     category: "APPS + SOFTWARE",
//     date: "April 6, 2025",
//     author: "Andrew Wan",
//     authorImage: "/images/th.jpeg",
//     heroImage: "/images/article2.png",
//     description:
//       "Tools powered by artificial intelligence (AI) continue to become more popular in the real estate industry, and it's easy to see why!",
//     cta: "Explore the tools →",
//     content: `
//       <h3>Why Use AI Tools?</h3>
//       <p>AI tools can help you automate tasks, analyze data, and improve your workflow.</p>
//       <ul>
//         <li>Lead generation</li>
//         <li>Market analysis</li>
//         <li>Client communication</li>
//       </ul>
//       <h3>Top 6 AI Tools</h3>
//       <ol>
//         <li>Tool 1: RealAI</li>
//         <li>Tool 2: PropBot</li>
//         <li>Tool 3: HomeGenius</li>
//         <li>Tool 4: MarketMind</li>
//         <li>Tool 5: DealFinder</li>
//         <li>Tool 6: SmartAgent</li>
//       </ol>
//     `,
//     tags: ["real estate", "AI", "tools", "software", "2025"],
//     readingTime: "6 min read",
//     featured: false,
//     relatedPosts: [
//       {
//         slug: "real-estate-referral-fees-2025",
//         title: "The Complete Guide to Real Estate Referral Fees for 2025",
//       },
//     ],
//     gallery: ["/images/article2.png", "/images/event3.jpg"],
//   },
//   {
//     slug: "real-estate-trivia-2025",
//     title: "Real Estate Trivia: 16 Fun Facts You Must Know in 2025",
//     category: "REAL ESTATE HUMOR",
//     date: "April 7, 2025",
//     author: "Yasbel Garcia",
//     authorImage: "/images/th.jpeg",
//     heroImage: "/images/article3.png",
//     description:
//       "We compiled a list of real estate facts that are peculiar, surprising, quirky, and even bizarre but they're all actually true.",
//     cta: "See all the facts →",
//     content: `
//       <h3>Fun Facts</h3>
//       <ul>
//         <li>The White House has 132 rooms.</li>
//         <li>There's a house shaped like a shoe in Pennsylvania.</li>
//         <li>In Scotland, homeowners paint their doors red when they pay off their mortgage.</li>
//       </ul>
//       <h3>More Trivia</h3>
//       <p>Check out our full list for more fun real estate trivia!</p>
//     `,
//     tags: ["real estate", "trivia", "fun facts", "2025"],
//     readingTime: "4 min read",
//     featured: false,
//     relatedPosts: [
//       {
//         slug: "best-real-estate-ai-tools-2025",
//         title: "The Best 6 Real Estate AI Tools for 2025",
//       },
//     ],
//     gallery: ["/images/article3.png"],
//   },
// ];

export const LatestArticles = ({ blogPosts = [] }) => {
  console.log(blogPosts);
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center py-12">
            <p className="text-gray-500">No blog posts found.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Latest Articles
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Stay up to date with the latest real estate news, tips, and insights from our team of experts.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          {blogPosts && blogPosts.map((post) => {
            // Format date if it's a string or Date object
            const formattedDate = post.publishedAt 
              ? format(new Date(post.publishedAt), 'MMMM d, yyyy')
              : 'No date';
              
            return (
              <Link 
                key={post.slug?.current || post._id} 
                href={`/blogs/${post.slug?.current || ''}`}
                className="block hover:opacity-90 transition-opacity"
              >
                <ArticleCard
                  img={post?.image}
                  date={post?.date}
                  category={post.categories?.[0]?.title || 'Uncategorized'}
                  title={post?.heading || 'Untitled Post'}
                  summary={post.description || ''}
                  testimonial={post?.testimonial}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
