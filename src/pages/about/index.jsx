import AboutSection from "@/components/about/AboutSection";
import BenefitsSection from "@/components/about/BenefitsSection";
import Intro from "@/components/about/Intro";
import Overview from "@/components/about/Overview";
import TeamSection from "@/components/about/TeamSection";
import WorksSection from "@/components/about/WorksSection";
import Layout from "@/components/layout";
import Seo from "@/components/seo";
import React from "react";

const index = () => {
  return (
    <Layout>
      <Seo
        title="Empowering Your Digital Journey | About RoundDigital"
        description="At RoundDigital, we empower startups and businesses with cutting-edge solutions — from idea to MVP. Our expert team delivers web and mobile development, digital marketing, branding, and scalable design strategies to help your business thrive."
        keywords="RoundDigital, RoundDigital Technologies, MVP development, startup solutions, web development, mobile app development, digital marketing, branding, UI/UX design, Canada tech company"
      />
      <AboutSection />
      <Intro />
      <Overview />
      <BenefitsSection />
      <TeamSection />
      <WorksSection />
    </Layout>
  );
};

export default index;
