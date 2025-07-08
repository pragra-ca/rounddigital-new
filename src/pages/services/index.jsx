// import { HeroSection } from '@/components/blog/HeroSection'
import { Testimonials } from "@/components/home/sections";
import Faqs from "@/components/home/sections/Faqs";
import Layout from "@/components/layout";
import Seo from "@/components/seo";
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
      <Seo
        title="Our Services | Web Development, Marketing & Branding Solutions | RoundDigital"
        description="Discover RoundDigital’s full range of services — from web and mobile app development to digital marketing, branding, UI/UX design, and MVP solutions tailored to help your business grow."
        keywords="RoundDigital services, web development, mobile app development, digital marketing, branding, UI/UX design, MVP development, tech solutions, startup services, Canada digital agency"
      />

      <HeroSection />
      <Works />
      <CapabilitySection />
      <Testimonials />
      {/* <PricingSection /> */}
      <BlogArticlesSection />
      <Faqs />
    </Layout>
  );
};

export default index;
