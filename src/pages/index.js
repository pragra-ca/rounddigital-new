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
        title="RoundDigital | Empowering Your Digital Journey to Success | RoundDigital"
        description="At RoundDigital, we empower startups with cutting-edge applications—from idea to MVP. Our expert team offers web and mobile development, digital marketing, branding, and scalable design solutions to help your business thrive."
        keywords="RoundDigital, RoundDigital Technologies, rounddigital, tech, canada tech, MVP development, web development, mobile app development, digital marketing, branding, web design, startup tech solutions"
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
