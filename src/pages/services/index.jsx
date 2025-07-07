// import { HeroSection } from '@/components/blog/HeroSection'
import { Testimonials } from "@/components/home/sections";
import Faqs from "@/components/home/sections/Faqs";
import Layout from "@/components/layout";
import BeautifulWorks from "@/components/service/BeautifulWorks";
import BlogArticlesSection from "@/components/service/BlogArticlesSection";
import CapabilitiesAndBenefits from "@/components/service/CapabilitiesAndBenefits";
import FaqSection from "@/components/service/FaqSection";
// import PricingSection from "@/components/service/PricingSection";
import CapabilitySection from "@/components/service/sections/CapabilitySection";
import HeroSection from "@/components/service/sections/HeroSection";
import Works from "@/components/service/sections/Works";
import React from "react";

const index = () => {
  return (
    <Layout>
      <HeroSection />
      <Works />
      <CapabilitySection />
      <Testimonials/>
      {/* <PricingSection /> */}
      <BlogArticlesSection />
      <Faqs/>
    </Layout>
  );
};

export default index;
