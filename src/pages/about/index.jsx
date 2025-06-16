import AboutSection from '@/components/about/AboutSection'
import Intro from '@/components/about/Intro'
import Overview from '@/components/about/Overview'
import Layout from '@/components/layout'
import React from 'react'

const index = () => {
  return (
    <Layout>
        <AboutSection/>
        <Intro/>
        <Overview/>
    </Layout>
  )
}

export default index