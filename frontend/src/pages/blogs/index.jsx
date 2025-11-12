import { BlogHome } from "@/components/blog/BlogHome";
import { Email } from "@/components/blog/Email";
import { HeroSection } from "@/components/blog/HeroSection";
import LatestArticles from "@/components/blog/LatestArticles";
import { MarketingSection } from "@/components/blog/MarketingSection";
import Layout from "@/components/layout";
import Seo from "@/components/seo";
import { getPosts } from "@/utlis/sanity";
import React, { useEffect, useState } from "react";

const BlogIndex = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [heroData, setHeroData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogData() {
      try {
        setIsLoading(true);
        const data = await getPosts('blogs');
        
        if (data && data[0]?.blogArray) {
          setBlogPosts(data[0].blogArray);
          setHeroData(data[0]?.heroDataComponent);
          console.log(data[0]?.heroDataComponent)
        } else {
          console.warn('No blog data found in the expected format');
        }
      } catch (err) {
        console.error('Error fetching blog data:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchBlogData();
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center p-6 max-w-md mx-auto">
            <div className="text-red-500 text-4xl mb-4">⚠️</div>
            <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo
        title="Insights & Trends in Tech, Design & Marketing | RoundDigital Blog"
        description="Stay ahead with expert insights from RoundDigital. Explore blogs on tech trends, web and mobile development, digital marketing, branding strategies, MVP building, and more."
        keywords="RoundDigital blog, tech trends, web development blogs, mobile app development, digital marketing tips, branding strategies, startup growth, MVP development, UI/UX design, Canada tech"
      />
      {/* <HeroSection heroData={heroData}/> */}
      <main className="py-12 md:py-16 lg:py-20">
        {/* <BlogHome /> */}
        <LatestArticles blogPosts={blogPosts} />
      </main>
      <Email />
      {/* <MarketingSection /> */}
    </Layout>
  );
};

export default BlogIndex;
