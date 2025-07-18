import dynamic from "next/dynamic";
import Head from "next/head";
import {
  CaseStudies,
  ContactUs,
  Hero,
  Services,
  Team,
  Testimonials,
} from "@/components/home/sections";
import Partners from "@/components/home/sections/Partners";
import Faqs from "@/components/home/sections/Faqs";
import Layout from "@/components/layout";
import Seo from "@/components/seo";

export default function Home() {
  return (
    <Layout>
      <Seo
        title="RoundDigital | IT Services, Cybersecurity & Custom Software Development"
        description="RoundDigital provides comprehensive IT solutions including cybersecurity, IT consulting, application development, cloud management, custom software development, enterprise content management, and web development services."
        keywords="RoundDigital, IT services, cybersecurity, IT consulting, application development, cloud applications, cloud management, custom software development, enterprise content management, software testing, web design, web development, canada tech"
      />
      <Hero />
      <Partners />
      <Services />
      <CaseStudies />
      <Faqs />
      <Team />
      <Testimonials />
      <ContactUs />
    </Layout>
  );
}
