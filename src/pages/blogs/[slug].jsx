import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import { getPosts } from '@/utlis/sanity';
import { urlFor } from '@/utlis/sanity';

export default function BlogSlugPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const posts = await getPosts('blogs');
        const allPosts = posts[0]?.blogArray || [];
        setBlogPosts(allPosts);
        const foundPost = allPosts.find(p => p.slug?.current === slug);
        
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load post. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  //

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
          <div className="text-4xl mb-4">😕</div>
          <h1 className="text-2xl font-bold mb-2">Post Not Found</h1>
          <p className="text-gray-600 mb-6">
            {error || 'The post you are looking for does not exist or has been removed.'}
          </p>
          <Link 
            href="/blogs" 
            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  // Format the published date
  const formattedDate = post.date 
    ? format(new Date(post.date), 'MMMM d, yyyy')
    : '';

  return (
    <Layout>
      <Seo
        title={`${post?.heading} | RoundDigital Blog`}
        description={
          post?.description || 'No description available'
        }
        keywords={`RoundDigital, ${post?.heading}, blog, tech insights, web development tips, digital marketing strategies, branding, startup growth, Canada tech blog`}
      />
      <section id="top" className="w-full mt-8 md:mt-12 bg-white text-zinc-800 pb-16">
        {/* Hero */}
        <div className="relative h-[36vh] md:h-[44vh] min-h-[260px] md:min-h-[340px] w-full overflow-hidden">
          {post?.image && (
            <Image
              src={urlFor(post?.image).url()}
              alt={post.heading || 'Blog post image'}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="2xl:container mx-auto px-6  md:px-8 lg:px-12 pb-14 md:pb-20">
              <div className="max-w-6xl mx-auto">
                <div className="max-w-4xl">
                  <p className="text-xs md:text-sm text-zinc-300/80">
                    {formattedDate}
                    {post.estimatedReadingTime && ` • ${post.estimatedReadingTime} min read`}
                  </p>
                  <h1 className="mt-3 md:mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                    {post.title || 'Untitled Post'}
                  </h1>
                  <div className="mt-5 md:mt-6 flex items-center gap-3">
                    {post?.testimonial?.image ? (
                      <span className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-white/20">
                        <Image
                          src={urlFor(post?.testimonial?.image).url()}
                          alt={post?.testimonial?.author || 'Author'}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </span>
                    ) : (
                      <span className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm">
                        {post?.testimonial?.author?.[0] || 'A'}
                      </span>
                    )}
                    <div>
                      <p className="text-sm font-semibold text-white/90">
                        {post?.testimonial?.author || 'Anonymous'}
                      </p>
                      <p className="text-xs text-white/60">Author</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="2xl:container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
              {/* Main Article */}
              <div className="lg:col-span-8">
                <div className="mx-auto max-w-4xl lg:max-w-none rounded-2xl border border-zinc-200 bg-white shadow-2xl p-5 md:p-8 text-zinc-700">
                  {/* Tags */}
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

                  {/* Content */}
                  <div className="space-y-6 text-[15px] leading-7 text-zinc-700">
                    {post.richTextContent ? (
                      <div className="mt-2">
                        {renderRichText(post.richTextContent)}
                      </div>
                    ) : post.body ? (
                      <div className="whitespace-pre-wrap">{post.body}</div>
                    ) : (
                      <p className="text-zinc-500 italic">No content available.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="rounded-2xl border border-zinc-200 bg-white shadow-xl p-5 md:p-6 sticky top-24">
                  {/* Author Box */}
                  {post?.testimonial?.image || post?.testimonial?.author ? (
                    <div className="flex items-center gap-4">
                      {post?.testimonial?.image && (
                        <span className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-zinc-200">
                          <Image
                            src={urlFor(post.testimonial.image).width(96).height(96).url()}
                            alt={post.testimonial.author || 'Author'}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </span>
                      )}
                      <div>
                        <p className="font-semibold text-zinc-900">{post?.testimonial?.author || 'Author'}</p>
                        {post?.testimonial?.authorRole && (
                          <p className="text-sm text-zinc-500">{post.testimonial.authorRole}</p>
                        )}
                      </div>
                    </div>
                  ) : null}

                  {/* Divider */}
                  <div className="my-5 border-t border-zinc-200" />

                  {/* Share / Copy Link */}
                  <div>
                    <p className="text-sm font-medium text-zinc-900 mb-3">Share</p>
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-3">
                      <div className="flex flex-wrap items-center gap-3">
                      {/* X / Twitter */}
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post?.title || '')}&url=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-sm ring-1 ring-zinc-200 hover:ring-zinc-300 hover:text-black transition hover:-translate-y-0.5"
                        aria-label="Share on X"
                        title="Share on X"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path d="M18.244 2H21l-6.52 7.455L22.5 22h-6.89l-4.51-5.882L5.88 22H3.12l6.93-7.92L1.5 2h6.89l4.14 5.4L18.244 2Zm-2.41 18h1.86L8.28 4h-1.86l9.414 16Z"/>
                        </svg>
                      </a>

                      {/* LinkedIn */}
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-sm ring-1 ring-zinc-200 hover:ring-zinc-300 hover:text-[#0A66C2] transition hover:-translate-y-0.5"
                        aria-label="Share on LinkedIn"
                        title="Share on LinkedIn"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path d="M20.447 20.452H17.21v-5.569c0-1.329-.027-3.039-1.852-3.039-1.853 0-2.136 1.447-2.136 2.944v5.664H9.001V9h3.111v1.561h.045c.434-.824 1.492-1.693 3.07-1.693 3.287 0 3.893 2.164 3.893 4.98v6.604zM5.337 7.433a1.804 1.804 0 1 1 0-3.609 1.804 1.804 0 0 1 0 3.609zM6.984 20.452H3.688V9h3.296v11.452z"/>
                        </svg>
                      </a>

                      {/* Facebook */}
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-sm ring-1 ring-zinc-200 hover:ring-zinc-300 hover:text-[#1877F2] transition hover:-translate-y-0.5"
                        aria-label="Share on Facebook"
                        title="Share on Facebook"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.91V12.06h2.41V9.88c0-2.39 1.43-3.71 3.62-3.71 1.05 0 2.15.19 2.15.19v2.36h-1.21c-1.19 0-1.56.74-1.56 1.5v1.84h2.65l-.42 2.91h-2.23v7.03c4.78-.75 8.44-4.92 8.44-9.94Z"/>
                        </svg>
                      </a>

                      {/* WhatsApp */}
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent((post?.title || '') + ' ')}${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-sm ring-1 ring-zinc-200 hover:ring-zinc-300 hover:text-[#25D366] transition hover:-translate-y-0.5"
                        aria-label="Share on WhatsApp"
                        title="Share on WhatsApp"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.49 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.59 5.96L0 24l6.3-1.64a11.85 11.85 0 0 0 5.76 1.47h.01c6.57 0 11.9-5.33 11.9-11.9a11.84 11.84 0 0 0-3.45-8.45ZM12.06 21.1h-.01a9.17 9.17 0 0 1-4.67-1.28l-.34-.2-3.73.97.99-3.64-.22-.37a9.17 9.17 0 0 1-1.38-4.84c0-5.06 4.12-9.18 9.2-9.18a9.15 9.15 0 0 1 6.49 2.68 9.15 9.15 0 0 1 2.69 6.5c0 5.07-4.12 9.18-9.2 9.18Zm5.28-6.84c-.29-.14-1.71-.84-1.97-.93-.27-.1-.46-.14-.65.14-.19.29-.74.93-.9 1.12-.17.19-.33.22-.62.08-.29-.14-1.24-.46-2.36-1.48-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.59.14-.14.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.08-.14-.65-1.58-.89-2.17-.24-.58-.48-.5-.65-.5h-.56c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.17 3 .14.19 2.01 3.08 4.87 4.32.68.29 1.22.46 1.64.59.69.22 1.32.19 1.82.12.56-.08 1.71-.7 1.95-1.38.24-.67.24-1.24.17-1.38-.07-.14-.26-.22-.55-.36Z"/>
                        </svg>
                      </a>

                      {/* Copy link */}
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
                        aria-label="Copy link"
                        title="Copy link"
                      >
                        {copied ? (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-green-600">
                            <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z"/>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v12h2V3h12V1Zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2Zm0 16H8V7h11v14Z"/>
                          </svg>
                        )}
                        {copied ? 'Copied!' : 'Copy link'}
                      </button>

                      {/* Back to top */}
                      <a
                        href="#top"
                        onClick={(e) => {
                          e.preventDefault();
                          if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        className="inline-flex items-center gap-2.5 rounded-full bg-white px-3 py-1.5 text-sm text-zinc-700 shadow-sm ring-1 ring-zinc-200 hover:ring-zinc-300 transition hover:-translate-y-0.5"
                        aria-label="Back to top"
                        title="Back to top"
                      >
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 ring-1 ring-zinc-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-3.5 w-3.5 -mt-px"
                          >
                            <path d="M12 2l6 6h-4v8h-4V8H6l6-6Z"/>
                          </svg>
                        </span>
                        <span className="leading-none font-medium">Top</span>
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="2xl:container mx-auto px-6 md:px-8 lg:px-12 mt-14">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-zinc-900">You might also like</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {post.relatedPosts.map((related) => {
                  const relatedPost = blogPosts.find(p => p.slug?.current === related.slug?.current);
                  if (!relatedPost) return null;

                  return (
                    <Link
                      key={related.slug?.current}
                      href={`/blogs/${related.slug?.current}`}
                      className="group block h-full"
                    >
                      <article className="h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-shadow shadow-sm hover:shadow-xl">
                        <div className="overflow-hidden">
                          {relatedPost.mainImage?.asset?.url ? (
                            <div className="relative aspect-video">
                              <Image
                                src={urlFor(relatedPost.mainImage).url()}
                                alt={relatedPost.title || 'Related post'}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                          ) : (
                            <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-400">
                              <span>No image</span>
                            </div>
                          )}
                        </div>
                        <div className="p-5">
                          <h4 className="font-semibold text-lg text-zinc-900 group-hover:text-red-600 transition-colors line-clamp-2">
                            {relatedPost.title || 'Untitled Post'}
                          </h4>
                          <p className="text-sm text-zinc-500 mt-1">
                            {relatedPost.publishedAt
                              ? format(new Date(relatedPost.publishedAt), 'MMMM d, yyyy')
                              : ''}
                          </p>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}




const renderRichText = (richTextContent) => {
  return richTextContent.map((block) => {
    switch (block._type) {
      case 'block':
        return (
          <p key={block._key} className={`text-${block.style}`}>
            {block.children.map((span) => {
              // Handle marks if any
              const marks = span.marks.join(' ')

              return (
                <span key={span._key} className={`${block.style == 'h2'? 'text-bold text-2xl' : block.style == 'h2'? 'text-bold text-2xl' : 'text-normal'}`}>
                  {span.text}
                </span>
              )
            })}
          </p>
        )
      case 'span':
        // Handle span block separately
        return (
          <span key={block._key} className={`${block.style == 'h2'? 'text-bold text-2xl border border-blue-700' : block.style == 'h2'? 'text-bold text-2xl' : 'text-normal'}`}>
            {block.text}
          </span>
        )
      // Add more cases for other block types if necessary
      default:
        return null
    }
  })
}