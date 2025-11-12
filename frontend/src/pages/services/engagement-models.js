import React from 'react';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Link from 'next/link';
import { ClockIcon, CurrencyDollarIcon, UserGroupIcon, CogIcon } from '@heroicons/react/24/outline';

export default function EngagementModelsPage() {
  const models = [
    {
      icon: UserGroupIcon,
      title: 'Dedicated Team',
      description: 'Get a full-time team of professionals working exclusively on your projects with complete dedication and focus.',
      features: [
        'Long-term engagement',
        'Direct team management',
        'Flexible team scaling',
        'Cost-effective solution',
        'Full transparency',
      ],
      bestFor: 'Long-term projects requiring ongoing development and maintenance',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: ClockIcon,
      title: 'Time & Material',
      description: 'Pay only for the time and resources used, providing maximum flexibility for evolving project requirements.',
      features: [
        'Flexible scope',
        'Hourly/daily billing',
        'Easy to scale',
        'Change requests welcome',
        'Transparent tracking',
      ],
      bestFor: 'Projects with evolving requirements or uncertain scope',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Fixed Price',
      description: 'Clear scope, timeline, and budget defined upfront for predictable project delivery and cost certainty.',
      features: [
        'Fixed budget',
        'Defined milestones',
        'Clear deliverables',
        'Risk mitigation',
        'Budget certainty',
      ],
      bestFor: 'Well-defined projects with clear requirements and scope',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: CogIcon,
      title: 'Managed Services',
      description: 'Ongoing support, maintenance, and optimization with proactive monitoring and guaranteed SLAs.',
      features: [
        '24/7 support',
        'Proactive monitoring',
        'SLA guarantees',
        'Performance optimization',
        'Regular updates',
      ],
      bestFor: 'Ongoing maintenance, support, and system optimization',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const comparison = [
    {
      feature: 'Flexibility',
      dedicated: 'High',
      timeAndMaterial: 'Very High',
      fixedPrice: 'Low',
      managed: 'Medium',
    },
    {
      feature: 'Budget Predictability',
      dedicated: 'Medium',
      timeAndMaterial: 'Low',
      fixedPrice: 'Very High',
      managed: 'High',
    },
    {
      feature: 'Best for Long-term',
      dedicated: 'Excellent',
      timeAndMaterial: 'Good',
      fixedPrice: 'Fair',
      managed: 'Excellent',
    },
    {
      feature: 'Risk Level',
      dedicated: 'Low',
      timeAndMaterial: 'Medium',
      fixedPrice: 'Shared',
      managed: 'Low',
    },
  ];

  return (
    <Layout>
      <Seo
        title="Engagement Models | RoundDigital"
        description="Flexible engagement models to suit your project needs - dedicated teams, time & material, fixed price, and managed services."
        keywords="engagement models, dedicated team, fixed price, time and material, managed services"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
              <CogIcon className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Engagement Models</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#191a23] mb-6 leading-tight">
              Flexible Engagement Models
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Tailored to Your Needs</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Choose the engagement model that best fits your project requirements, budget, and timeline. We offer flexible options to ensure your success.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300">
                Discuss Your Project
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#191a23] mb-6">Choose the Right Model for Your Project</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every project is unique, and so are its requirements. At RoundDigital, we offer multiple engagement models to ensure you get the flexibility, control, and value you need. Whether you're building a new product from scratch, scaling an existing team, or need ongoing support, we have the right model for you.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {models.map((model, idx) => {
              const IconComponent = model.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${model.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#191a23] mb-4">{model.title}</h3>
                  <p className="text-gray-600 text-lg mb-6">{model.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {model.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${model.color}`}></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Best For</h4>
                    <p className="text-gray-700">{model.bestFor}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Compare Engagement Models</h2>
            <p className="text-lg text-gray-600">Find the perfect fit for your project</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
              <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Feature</th>
                  <th className="px-6 py-4 text-left font-bold">Dedicated Team</th>
                  <th className="px-6 py-4 text-left font-bold">Time & Material</th>
                  <th className="px-6 py-4 text-left font-bold">Fixed Price</th>
                  <th className="px-6 py-4 text-left font-bold">Managed Services</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-700">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.dedicated}</td>
                    <td className="px-6 py-4 text-gray-600">{row.timeAndMaterial}</td>
                    <td className="px-6 py-4 text-gray-600">{row.fixedPrice}</td>
                    <td className="px-6 py-4 text-gray-600">{row.managed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Not Sure Which Model to Choose?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our experts will help you select the best engagement model for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                Talk to Our Team
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
