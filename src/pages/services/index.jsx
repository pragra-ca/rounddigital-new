import Layout from '@/components/layout'
import BeautifulWorks from '@/components/service/BeautifulWorks'
import ServiceHero from '@/components/service/ServiceHero'
import React from 'react'

const index = () => {
  return (
    <Layout>
        <ServiceHero/>
        <BeautifulWorks/>
    </Layout>
  )
}

export default index