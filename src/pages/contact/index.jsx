import ContactDetails from "@/components/contact/ContactDetails";
import { ContactUs } from "@/components/home/sections";
import Layout from "@/components/layout";
import Seo from "@/components/seo";
import React from "react";

const index = () => {
  return (
    <Layout>
      <Seo
        title="Get in Touch | RoundDigital"
        description="Have questions or ready to start your digital journey? Contact RoundDigital for expert help with web development, mobile apps, branding, and digital marketing solutions."
        keywords="Contact RoundDigital, get in touch, RoundDigital support, web development consultation, mobile app inquiry, digital marketing help, branding services, Canada tech support"
      />

      <div className="mt-4">
        <ContactUs />
        <ContactDetails />
      </div>
    </Layout>
  );
};

export default index;
