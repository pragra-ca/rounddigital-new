import React from 'react';
import Head from 'next/head';
import { 
  Hero, 
  // ClientLogos, 
  Services, 
  CaseStudies, 
  Process, 
  Team, 
  Testimonials, 
  ContactUs 
} from './sections';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Round Digital - Digital Marketing & Web Development</title>
        <meta name="description" content="Round Digital is a full-service digital marketing and web development agency that helps businesses grow online." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero />
        
        {/* Client Logos Section */}
        {/* <ClientLogos /> */}
        
        {/* Services Section */}
        <Services />
        
        {/* Case Studies Section */}
        <CaseStudies />
        
        {/* Process Section */}
        <Process />
        
        {/* Team Section */}
        <Team />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Contact Us Section */}
        <ContactUs />
      </main>
    </>
  );
};

export default HomePage;
