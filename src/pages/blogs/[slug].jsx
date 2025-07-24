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
import { categoryColors } from '@/utlis/categoryColors';

export default function BlogSlugPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const posts = await getPosts('blogs');
        const allPosts = posts[0]?.blogArray || [];
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

  console.log(post)

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

  // Get the first category or use a default
  const category = post.categories?.[0]?.title || 'Uncategorized';
  const categoryColor = categoryColors[category] || categoryColors.default;

  return (
    <Layout>
      <Seo
        title={`${post?.heading} | RoundDigital Blog`}
        description={
          post?.description || 'No description available'
        }
        keywords={`RoundDigital, ${post?.heading}, blog, tech insights, web development tips, digital marketing strategies, branding, startup growth, Canada tech blog`}
      />

      <section className="w-full mt-8 md:mt-12 bg-gradient-to-br from-white via-zinc-50 to-white py-16 px-2 sm:px-6 md:px-12 min-h-[80vh]">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          {post?.image && (
            <div className="mb-10 relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={urlFor(post?.image).url()}
                alt={post.heading || 'Blog post image'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
          )}
          
          {/* Title & Meta */}
          <div className="mb-6">
            <span className={`inline-block text-xs font-bold text-white px-5 py-1.5 rounded-full shadow tracking-widest uppercase mb-4 ${categoryColor.replace('text-', 'bg-')}`}>
              {category}
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4">
              {post.title || 'Untitled Post'}
            </h1>
            
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-6">
              {post?.testimonial?.image ? (
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary shadow-lg">
                  <Image
                    src={urlFor(post?.testimonial?.image).url()}
                    alt={post?.testimonial?.author || 'Author'}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
                  {post?.testimonial?.author?.[0] || 'A'}
                </div>
              )}
              <div>
                <span className="text-base font-semibold text-zinc-800">
                  {post?.testimonial?.author || 'Anonymous'}
                </span>
                <span className="block text-xs text-gray-500">
                  {formattedDate}
                  {post.estimatedReadingTime && ` • ${post.estimatedReadingTime} min read`}
                </span>
              </div>
            </div>
          </div>
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Content */}
          <div className="prose max-w-none mb-12">

          <div className="mt-6 space-y-6 text-base text-neutral-600">
            {renderRichText(post.richTextContent)}
          </div>

            {post.excerpt && (
              <p className="text-lg text-gray-700 mb-8 font-medium">
                {post.edxcerpt}
              </p>
            )}
            {post.body ? (
              <div className="prose max-w-none">
                {/* If you're using PortableText for content, render it here */}
                {/* <PortableText value={post.body} /> */}
                {post.body}
              </div>
            ) : (
              <p className="text-gray-500 italic">No content available.</p>
            )}
          </div>

          {/* Gallery */}
          {post.gallery && post.gallery.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 text-zinc-800">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {post.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={urlFor(image).url()}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-zinc-900">
                You might also like
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {post.relatedPosts.map((related) => {
                  const relatedPost = blogPosts.find(p => p.slug?.current === related.slug?.current);
                  if (!relatedPost) return null;
                  
                  return (
                    <Link
                      key={related.slug?.current}
                      href={`/blogs/${related.slug?.current}`}
                      className="group block"
                    >
                      <div className="overflow-hidden rounded-lg mb-3">
                        {relatedPost.mainImage?.asset?.url ? (
                          <div className="relative aspect-video">
                            <Image
                              src={urlFor(relatedPost.mainImage).url()}
                              alt={relatedPost.title || 'Related post'}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        ) : (
                          <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-400">
                            <span>No image</span>
                          </div>
                        )}
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
                        {relatedPost.title || 'Untitled Post'}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {relatedPost.publishedAt 
                          ? format(new Date(relatedPost.publishedAt), 'MMMM d, yyyy')
                          : ''}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
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