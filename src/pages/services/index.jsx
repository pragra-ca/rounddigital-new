// import { HeroSection } from '@/components/blog/HeroSection'
import Layout from "@/components/layout";
import BeautifulWorks from "@/components/service/BeautifulWorks";
import BlogArticlesSection from "@/components/service/BlogArticlesSection";
import CapabilitiesAndBenefits from "@/components/service/CapabilitiesAndBenefits";
import FaqSection from "@/components/service/FaqSection";
import PricingSection from "@/components/service/PricingSection";
import CapabilitySection from "@/components/service/sections/CapabilitySection";
import HeroSection from "@/components/service/sections/HeroSection";
import Works from "@/components/service/sections/Works";
import TestimonialSection from "@/components/service/TestimonialSection";
import React from "react";

const index = () => {
  return (
    <Layout>
      <HeroSection />
      <Works />
      <CapabilitySection />
      <TestimonialSection />
      <PricingSection />
      <BlogArticlesSection />
      <FaqSection />
    </Layout>
  );
};

export default index;
