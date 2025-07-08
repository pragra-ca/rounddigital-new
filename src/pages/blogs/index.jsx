import { BlogHome } from "@/components/blog/BlogHome";
import { Email } from "@/components/blog/Email";
import { HeroSection } from "@/components/blog/HeroSection";
import { LatestArticles } from "@/components/blog/LatestArticles";
import { MarketingSection } from "@/components/blog/MarketingSection";
import Layout from "@/components/layout";
import Seo from "@/components/seo";
import React from "react";

const index = () => {
  return (
    <Layout>
      <Seo
        title="Insights & Trends in Tech, Design & Marketing | RoundDigital Blog"
        description="Stay ahead with expert insights from RoundDigital. Explore blogs on tech trends, web and mobile development, digital marketing, branding strategies, MVP building, and more."
        keywords="RoundDigital blog, tech trends, web development blogs, mobile app development, digital marketing tips, branding strategies, startup growth, MVP development, UI/UX design, Canada tech"
      />
      <HeroSection />
      <LatestArticles />
      <Email />
      <BlogHome />
      <MarketingSection />
    </Layout>
  );
};

export default index;
