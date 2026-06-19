import React from 'react';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Link from 'next/link';
import { RocketLaunchIcon, LightBulbIcon, ChartPieIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

export default function DigitalTransformationPage() {
  const services = [
    {
      icon: LightBulbIcon,
      title: 'IT Strategy & Consulting',
      description: 'Align technology investments with business objectives for maximum impact.',
    },
    {
      icon: ChartPieIcon,
      title: 'Process Optimization',
      description: 'Streamline operations and eliminate inefficiencies with digital solutions.',
    },
    {
      icon: RocketLaunchIcon,
      title: 'Technology Modernization',
      description: 'Replace legacy systems with modern, scalable technology platforms.',
    },
    {
      icon: ArrowTrendingUpIcon,
      title: 'Change Management',
      description: 'Guide your organization through digital transformation with minimal disruption.',
    },
  ];

  return (
    <Layout>
      <Seo title="Digital Transformation Services | RoundDigital" description="Strategic digital transformation consulting to modernize operations and drive growth." />
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-white pt-8 pb-16 md:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <RocketLaunchIcon className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Digital Transformation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#191a23] mb-6 leading-tight">
              Transform Your Business for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">The Digital Age</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Strategic consulting and implementation to modernize operations, adopt new technologies, and drive sustainable growth.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300">
                Start Your Transformation
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
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
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
      <section className="py-20 bg-gradient-to-br from-orange-600 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <Link href="/contact"><button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg">Get Started</button></Link>
        </div>
      </section>
    </Layout>
  );
}
