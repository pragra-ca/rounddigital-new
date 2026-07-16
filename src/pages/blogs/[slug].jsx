import Link from 'next/link';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Layout from "@/components/rd/Layout";
import Seo from '@/components/seo';
import { blogs, getBlogBySlug, toBlogPost } from '@/data/blogs';

export async function getStaticPaths() {
  return {
    paths: blogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return { notFound: true };
  }

  return {
    props: {
      post: toBlogPost(blog),
    },
  };
}

function renderBlogContent(content) {
  if (!content) return null;

  return content.split('\n\n').map((paragraph, index) => {
    const trimmed = paragraph.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      return (
        <h3 key={index} className="text-xl font-bold text-zinc-900 mt-8 mb-3">
          {trimmed.replace(/\*\*/g, '')}
        </h3>
      );
    }

    const parts = trimmed.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

    return (
      <p key={index} className="text-[15px] leading-7 text-zinc-700">
        {parts.map((part, partIndex) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={partIndex} className="font-semibold text-zinc-900">
              {part.replace(/\*\*/g, '')}
            </strong>
          ) : (
            <span key={partIndex}>{part}</span>
          )
        )}
      </p>
    );
  });
}

export default function BlogSlugPage({ post }) {
  const [copied, setCopied] = useState(false);
  const formattedDate = post.date
    ? format(new Date(post.date), 'MMMM d, yyyy')
    : '';

  return (
    <Layout>
      <Seo
        title={`${post?.title} | RoundDigital Blog`}
        description={post?.excerpt || 'RoundDigital blog article'}
        keywords={`RoundDigital, ${post?.title}, blog, tech insights, AI agents, digital transformation, Canada tech blog`}
      />
      <section id="top" className="w-full mt-8 md:mt-12 bg-white text-zinc-800 pb-16">
        <div className="relative h-[36vh] md:h-[44vh] min-h-[260px] md:min-h-[340px] w-full overflow-hidden bg-gradient-to-br from-[#e14242]/30 via-zinc-900 to-black">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="2xl:container mx-auto px-6 md:px-8 lg:px-12 pb-14 md:pb-20">
              <div className="max-w-6xl mx-auto">
                <div className="max-w-4xl">
                  <p className="text-xs md:text-sm text-zinc-300/80">
                    {formattedDate}
                  </p>
                  <h1 className="mt-3 md:mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                    {post.title || 'Untitled Post'}
                  </h1>
                  <div className="mt-5 md:mt-6 flex items-center gap-3">
                    <span className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm font-semibold">
                      {post?.testimonial?.author?.[0] || 'A'}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white/90">
                        {post?.testimonial?.author || post?.author?.name || 'RoundDigital'}
                      </p>
                      <p className="text-xs text-white/60">Author</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="2xl:container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
              <div className="lg:col-span-8">
                <div className="mx-auto max-w-4xl lg:max-w-none rounded-2xl border border-zinc-200 bg-white shadow-2xl p-5 md:p-8 text-zinc-700">
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full text-xs font-medium border border-zinc-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="space-y-4">
                    {post.body ? renderBlogContent(post.body) : (
                      <p className="text-zinc-500 italic">No content available.</p>
                    )}
                  </div>
                </div>
              </div>

              <aside className="lg:col-span-4">
                <div className="rounded-2xl border border-zinc-200 bg-white shadow-xl p-5 md:p-6 sticky top-24">
                  <div className="flex items-center gap-4">
                    <span className="h-12 w-12 rounded-full bg-[#e14242]/10 flex items-center justify-center text-[#e14242] font-semibold">
                      {post?.testimonial?.author?.[0] || 'A'}
                    </span>
                    <div>
                      <p className="font-semibold text-zinc-900">
                        {post?.testimonial?.author || post?.author?.name || 'Author'}
                      </p>
                      <p className="text-sm text-zinc-500">RoundDigital Team</p>
                    </div>
                  </div>

                  <div className="my-5 border-t border-zinc-200" />

                  <div>
                    <p className="text-sm font-medium text-zinc-900 mb-3">Share</p>
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            if (typeof window !== 'undefined') {
                              navigator.clipboard?.writeText(window.location.href);
                              setCopied(true);
                              setTimeout(() => setCopied(false), 1500);
                            }
                          }}
                          className={`inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm text-zinc-700 shadow-sm ring-1 ring-zinc-200 hover:ring-zinc-300 transition hover:-translate-y-0.5 ${copied ? 'ring-2 ring-green-400/50' : ''}`}
                        >
                          {copied ? 'Copied!' : 'Copy link'}
                        </button>

                        <Link
                          href="/blogs"
                          className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm text-zinc-700 shadow-sm ring-1 ring-zinc-200 hover:ring-zinc-300 transition hover:-translate-y-0.5"
                        >
                          All articles
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
