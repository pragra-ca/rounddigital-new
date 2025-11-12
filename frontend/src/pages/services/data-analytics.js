import React from 'react';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Link from 'next/link';
import { ChartBarIcon, CircleStackIcon, PresentationChartLineIcon, BoltIcon } from '@heroicons/react/24/outline';

export default function DataAnalyticsPage() {
  const services = [
    {
      icon: CircleStackIcon,
      title: 'Data Engineering',
      description: 'Build robust data pipelines, warehouses, and lakes to centralize and organize your data.',
    },
    {
      icon: PresentationChartLineIcon,
      title: 'Business Intelligence',
      description: 'Transform data into actionable insights with interactive dashboards and reports.',
    },
    {
      icon: ChartBarIcon,
      title: 'Data Science & Analytics',
      description: 'Advanced analytics and predictive modeling to uncover trends and opportunities.',
    },
    {
      icon: BoltIcon,
      title: 'Real-Time Processing',
      description: 'Stream processing and real-time analytics for instant decision-making.',
    },
  ];

  return (
    <Layout>
      <Seo title="Data & Analytics Services | RoundDigital" description="Data engineering, business intelligence, and analytics solutions to drive data-driven decisions." />
      <section className="bg-gradient-to-br from-cyan-50 via-teal-50 to-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
              <ChartBarIcon className="w-5 h-5 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">Data & Analytics</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#191a23] mb-6 leading-tight">
              Turn Data into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Actionable Insights</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Unlock the power of your data with advanced analytics, BI dashboards, and data engineering solutions.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300">
                Unlock Your Data
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
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
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
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Leverage Your Data?</h2>
          <Link href="/contact"><button className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg">Get Started</button></Link>
        </div>
      </section>
    </Layout>
  );
}
