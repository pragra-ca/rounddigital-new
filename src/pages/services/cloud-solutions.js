import React from 'react';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Link from 'next/link';
import { CloudIcon, ServerIcon, CogIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function CloudSolutionsPage() {
  const services = [
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to AWS, Azure, or Google Cloud with minimal downtime and risk.',
    },
    {
      icon: ServerIcon,
      title: 'Cloud-Native Development',
      description: 'Build scalable microservices and containerized applications optimized for cloud environments.',
    },
    {
      icon: CogIcon,
      title: 'DevOps & Automation',
      description: 'Implement CI/CD pipelines, infrastructure as code, and automated deployments for faster releases.',
    },
    {
      icon: ChartBarIcon,
      title: 'Cloud Optimization',
      description: 'Reduce cloud costs while maintaining performance through resource optimization and right-sizing.',
    },
  ];

  return (
    <Layout>
      <Seo title="Cloud Solutions | RoundDigital" description="Enterprise cloud migration, development, and optimization services for AWS, Azure, and Google Cloud." />
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white pt-8 pb-16 md:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <CloudIcon className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Cloud Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#191a23] mb-6 leading-tight">
              Scale Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Cloud Technology</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Modernize your infrastructure with enterprise cloud solutions. We help you migrate, build, and optimize for AWS, Azure, and Google Cloud.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300">
                Start Your Cloud Journey
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#191a23] mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Move to the Cloud?</h2>
          <Link href="/contact"><button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg">Get Started</button></Link>
        </div>
      </section>
    </Layout>
  );
}
