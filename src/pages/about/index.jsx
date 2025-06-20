import AboutSection from "@/components/about/AboutSection";
import BenefitsSection from "@/components/about/BenefitsSection";
import Intro from "@/components/about/Intro";
import Overview from "@/components/about/Overview";
import TeamSection from "@/components/about/TeamSection";
import WorksSection from "@/components/about/WorksSection";
import Layout from "@/components/layout";
import React from "react";

const index = () => {
  return (
    <Layout>
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
