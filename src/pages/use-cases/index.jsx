import InnovationHeroSection from '@/components/industries/InnovationHeroSection'
import IndustryCard from '@/components/industries/IndustrySolutions'
import Layout from '@/components/layout'
import React from 'react'
import GrowthStats from '@/components/industries/GrowthStats'
import Industries from '@/components/industries/Industries'

const index = () => {
  return (
    <Layout>
      <InnovationHeroSection/>
      <Industries/>
      <IndustryCard/>
      <GrowthStats/>
    </Layout>
  )
}

export default index