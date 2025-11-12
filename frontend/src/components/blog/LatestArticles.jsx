import React, { useState } from "react";
import Link from "next/link";
import GridArticleCard from "./GridArticleCard";
import { format } from "date-fns";
import { urlFor } from "@/utlis/sanity";

export const LatestArticles = ({ blogPosts = [] }) => {
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <section className="bg-[#0b0b0b] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">No blog posts found.</p>
        </div>
      </section>
    );
  }

  // removed category filtering and sort; using simple pagination
  const [visible, setVisible] = useState(7); // featured + 6 in grid

  // use posts as-is (no sorting)
  const sorted = blogPosts;

  const safeDate = (v) => {
    if (!v) return "";
    const t = Date.parse(v);
    if (Number.isNaN(t)) return "";
    try {
      return format(new Date(t), "MMMM d, yyyy");
    } catch {
      return "";
    }
  };

  // Reset pagination when posts list updates
  // (keeps UX predictable when data changes)
  // Note: if you want to preserve pagination on data changes, remove this effect.
  // React rule-of-hooks requires useEffect import only if used; currently not needed.

  const featured = sorted[0];
  const rest = sorted.slice(1, Math.min(visible, Math.max(sorted.length, 1)));

  return (
    <section className="bg-[#0b0b0b] text-white py-12">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-4 space-y-12">
        
        {/* Featured Article */}
        {sorted.length > 0 && (
        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-lg">
          <div className="relative h-[360px] sm:h-[420px] md:h-[480px]">
            {featured?.image && (
              <img
                src={urlFor(featured.image).url()}
                alt={featured?.heading || "Featured"}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="relative z-10 h-full flex items-end p-6 sm:p-10">
              <div>
                {safeDate(featured?.publishedAt) && (
                  <span className="text-sm text-zinc-300 block mb-2">
                    {safeDate(featured?.publishedAt)}
                  </span>
                )}
                <Link href={`/blogs/${featured?.slug?.current || ""}`}>
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight hover:text-red-400 transition-colors">
                    {featured?.heading || featured?.title || "Untitled Post"}
                  </h1>
                </Link>
                {featured?.description && (
                  <p className="mt-3 text-zinc-300 max-w-2xl line-clamp-3">
                    {featured.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Intro */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Latest IT Articles</h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400">
              Insights on web and mobile development, product, and growth — curated by RoundDigital.
            </p>
          </div>
          {/* controls removed */}
        </div>

        {/* Articles Grid */}
        {sorted.length === 0 ? (
          <p className="text-zinc-400">No posts available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug?.current || post._id}
                href={`/blogs/${post.slug?.current || ""}`}
                className="block h-full"
              >
                <GridArticleCard
                  variant="dark"
                  img={post?.image}
                  date={safeDate(post.publishedAt)}
                  category={post.categories?.[0]?.title || "Uncategorized"}
                  title={post?.heading || post?.title || "Untitled Post"}
                  summary={post.description || ""}
                />
              </Link>
            ))}
          </div>
        )}

        {/* Load More */}
        {sorted.length > visible && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setVisible((v) => v + 6)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-500/60"
            >
              Load more
            </button>
          </div>
        )}

        {/* Stacked list removed to keep layout concise with pagination */}
      </div>
    </section>
  );
};

export default LatestArticles;
