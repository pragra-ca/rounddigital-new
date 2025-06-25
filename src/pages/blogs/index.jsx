import { BlogHome } from "@/components/blog/BlogHome";
import { Email } from "@/components/blog/Email";
import { HeroSection } from "@/components/blog/HeroSection";
import { LatestArticles } from "@/components/blog/LatestArticles";
import { MarketingSection } from "@/components/blog/MarketingSection";
import Layout from "@/components/layout";
import React from "react";

const index = () => {
  return (
    <Layout>
      <HeroSection />
      <LatestArticles />
      <Email />
      <BlogHome />
      <MarketingSection />
    </Layout>
  );
};

export default index;
