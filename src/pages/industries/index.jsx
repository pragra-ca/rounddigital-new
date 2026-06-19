import InnovationHeroSection from "@/components/industries/InnovationHeroSection";
import IndustryCard from "@/components/industries/IndustrySolutions";
import Layout from "@/components/layout";
import React from "react";
import GrowthStats from "@/components/industries/GrowthStats";
import Industries from "@/components/industries/Industries";
import Seo from "@/components/seo";

const index = () => {
  return (
    <Layout>
      <Seo
        title="Real-World Use Cases | Digital Solutions for Startups & Businesses | RoundDigital"
        description="Explore how RoundDigital has empowered startups and businesses through custom tech solutions. From MVP launches to full-scale digital transformations, see our impact across industries."
        keywords="RoundDigital use cases, startup success stories, digital transformation, MVP case studies, web development solutions, mobile app use cases, branding impact, real-world tech solutions, RoundDigital portfolio"
      />
      <InnovationHeroSection />
      <Industries />
      <IndustryCard />
      <GrowthStats />
    </Layout>
  );
};

export default index;
