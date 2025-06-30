import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import { HomeComponent } from '@/Home1/Home1';
import { CaseStudies, ContactUs, Hero, Services, Team, Testimonials } from '@/components/home/sections';
import { Contact } from 'lucide-react';
import Partners from '@/components/home/sections/Partners';
import Faqs from '@/components/home/sections/Faqs';
import Layout from '@/components/layout';

// Import HomePage component with SSR disabled to avoid hydration issues
const HomePage = dynamic(() => import('@/components/home/HomePage'), {
  ssr: false,
});

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Round Digital - Digital Marketing & Web Development</title>
        <meta name="description" content="Round Digital is a full-service digital marketing and web development agency that helps businesses grow online." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Partners/>
      <Services/>
      <CaseStudies/>
      <Faqs/>
      <Team/>
      <Testimonials/>
      <ContactUs/>
      </Layout>
  );
}
