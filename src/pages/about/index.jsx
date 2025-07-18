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
        description="RoundDigital delivers comprehensive IT solutions including cybersecurity, cloud management, custom software development, enterprise applications, and web development services to help businesses succeed in the digital landscape."
        keywords="RoundDigital, IT services, cybersecurity solutions, IT consulting, application development, cloud management, custom software development, enterprise content management, software testing, web development, Canada tech company"
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
