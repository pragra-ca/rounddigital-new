import React from 'react';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Link from 'next/link';
import { CodeBracketIcon, DevicePhoneMobileIcon, ArrowPathIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline';

export default function CustomSoftwarePage() {
  const services = [
    {
      icon: CodeBracketIcon,
      title: 'Enterprise Applications',
      description: 'Scalable, secure applications designed for complex business needs and workflows.',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile App Development',
      description: 'Native iOS and Android apps, or cross-platform solutions using React Native and Flutter.',
    },
    {
      icon: ArrowPathIcon,
      title: 'Legacy Modernization',
      description: 'Transform outdated systems into modern, efficient platforms with minimal disruption.',
    },
    {
      icon: Square3Stack3DIcon,
      title: 'API Development',
      description: 'Build and integrate RESTful and GraphQL APIs for seamless system connectivity.',
    },
  ];

  return (
    <Layout>
      <Seo title="Custom Software Development | RoundDigital" description="Enterprise software development services including web apps, mobile apps, and legacy modernization." />
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
              <CodeBracketIcon className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">Custom Software</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#191a23] mb-6 leading-tight">
              Build Software Tailored to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Your Business Needs</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From enterprise applications to mobile apps, we create custom software solutions that drive efficiency and growth.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300">
                Start Your Project
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
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
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
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Solution?</h2>
          <Link href="/contact"><button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg">Get Started</button></Link>
        </div>
      </section>
    </Layout>
  );
}
