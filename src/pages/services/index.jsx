import Layout from '@/components/layout'
import BeautifulWorks from '@/components/service/BeautifulWorks'
import BlogArticlesSection from '@/components/service/BlogArticlesSection'
import CapabilitiesAndBenefits from '@/components/service/CapabilitiesAndBenefits'
import FaqSection from '@/components/service/FaqSection'
import PricingSection from '@/components/service/PricingSection'
import ServiceHero from '@/components/service/ServiceHero'
import TestimonialSection from '@/components/service/TestimonialSection'
import React from 'react'

const index = () => {
  return (
    <Layout>
        <ServiceHero/>
        <BeautifulWorks/>
        <CapabilitiesAndBenefits/>
        <TestimonialSection/>
        <PricingSection/>
        <BlogArticlesSection/>
        <FaqSection/>
    </Layout>
  )
}

export default index