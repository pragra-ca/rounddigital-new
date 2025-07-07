import ContactDetails from '@/components/contact/ContactDetails'
import { ContactUs } from '@/components/home/sections'
import Layout from '@/components/layout'
import React from 'react'

const index = () => {
  return (
    <Layout>
        <div className='mt-4'>
        <ContactUs/>
        <ContactDetails/>
        </div>
    </Layout>
  )
}

export default index