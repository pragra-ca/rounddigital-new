import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "@/components/layout";
import Seo from "@/components/seo";

export default function BlogSlugPage() {
  const router = useRouter();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    if (!router.isReady) return;

    if (typeof window !== "undefined") {
      const raw = localStorage.getItem("selectedBlogPost");
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          setPost(parsed);
        } catch {
          setPost(null);
        }
      }
    }
  }, [router.isReady]);

  if (!router.isReady || post === undefined) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-lg text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-2xl text-gray-500">Blog post not found.</p>
      </div>
    );
  }

  return (
    <Layout>
      <Seo
        title={`${post?.title} | RoundDigital Blog`}
        description={
          "Read the latest insights, strategies, and trends in web development, mobile apps, digital marketing, and branding by RoundDigital."
        }
        keywords={`RoundDigital, ${post?.title}, blog, tech insights, web development tips, digital marketing strategies, branding, startup growth, Canada tech blog`}
      />

      <section className="w-full mt-8 md:mt-12 bg-gradient-to-br from-white via-zinc-50 to-white py-16 px-2 sm:px-6 md:px-12 min-h-[80vh]">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="mb-10">
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full h-80 object-cover rounded-3xl shadow-2xl"
            />
          </div>
          {/* Title & Meta */}
          <span className="inline-block text-xs font-bold text-white bg-[#dc2626] px-5 py-1.5 rounded-full shadow tracking-widest uppercase mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl font-black text-zinc-900 mb-2">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <img
              src={post.authorImage}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#dc2626] shadow-lg"
              alt={post.author}
            />
            <div>
              <span className="text-base font-semibold text-zinc-800">
                {post.author}
              </span>
              <span className="block text-xs text-gray-500">
                {post.date} • {post.readingTime}
              </span>
            </div>
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-[#dc2626]/10 text-[#dc2626] px-3 py-1 rounded-full text-xs font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
          {/* Content */}
          <div
            className="prose max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {/* Gallery */}
          {post.gallery && post.gallery.length > 0 && (
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-3 text-zinc-800">Gallery</h3>
              <div className="flex gap-4 flex-wrap">
                {post.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Gallery image ${i + 1}`}
                    className="w-40 h-32 object-cover rounded-xl shadow"
                  />
                ))}
              </div>
            </div>
          )}
          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-3 text-zinc-800">
                Related Posts
              </h3>
              <div className="flex flex-col gap-2">
                {post.relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blogs/${rel.slug}`}
                    className="text-[#dc2626] hover:underline font-semibold"
                  >
                    {rel.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
