import React, { useState } from 'react';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Link from 'next/link';
import {
  SparklesIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  CodeBracketIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('digital');

  const digitalServices = [
    {
      category: 'AI & Machine Learning',
      icon: SparklesIcon,
      services: [
        {
          name: 'AI Agent Development',
          description: 'Custom intelligent agents for workflow automation and decision support',
        },
        {
          name: 'Machine Learning Integration',
          description: 'Embed predictive models and ML capabilities into your products',
        },
        {
          name: 'Natural Language Processing',
          description: 'Text analysis, chatbots, and language understanding solutions',
        },
        {
          name: 'Computer Vision',
          description: 'Image recognition, object detection, and visual AI solutions',
        },
      ],
    },
    {
      category: 'Cloud & Infrastructure',
      icon: CloudIcon,
      services: [
        {
          name: 'Cloud Migration Strategy',
          description: 'Seamless transition to AWS, Azure, or Google Cloud Platform',
        },
        {
          name: 'Cloud-Native Development',
          description: 'Build scalable microservices and containerized applications',
        },
        {
          name: 'DevOps & Automation',
          description: 'CI/CD pipelines, infrastructure as code, and automated deployments',
        },
        {
          name: 'Cloud Cost Optimization',
          description: 'Reduce cloud spend while maintaining performance and reliability',
        },
      ],
    },
    {
      category: 'Cybersecurity',
      icon: ShieldCheckIcon,
      services: [
        {
          name: 'Security Assessment & Audit',
          description: 'Comprehensive evaluation of your security posture',
        },
        {
          name: 'Threat Detection & Response',
          description: '24/7 monitoring and incident response services',
        },
        {
          name: 'Compliance Management',
          description: 'SOC 2, ISO 27001, HIPAA, and GDPR compliance solutions',
        },
        {
          name: 'Penetration Testing',
          description: 'Identify vulnerabilities before attackers do',
        },
      ],
    },
    {
      category: 'Custom Software Development',
      icon: CodeBracketIcon,
      services: [
        {
          name: 'Enterprise Application Development',
          description: 'Scalable, secure applications for complex business needs',
        },
        {
          name: 'Mobile App Development',
          description: 'Native and cross-platform mobile solutions',
        },
        {
          name: 'Legacy System Modernization',
          description: 'Transform outdated systems into modern, efficient platforms',
        },
        {
          name: 'API Development & Integration',
          description: 'Build and integrate RESTful and GraphQL APIs',
        },
      ],
    },
    {
      category: 'Data & Analytics',
      icon: ChartBarIcon,
      services: [
        {
          name: 'Data Engineering',
          description: 'Build robust data pipelines and warehouses',
        },
        {
          name: 'Business Intelligence',
          description: 'Transform data into actionable insights with dashboards',
        },
        {
          name: 'Data Science & Analytics',
          description: 'Advanced analytics and predictive modeling',
        },
        {
          name: 'Real-Time Data Processing',
          description: 'Stream processing and real-time analytics solutions',
        },
      ],
    },
  ];

  const consultingServices = [
    {
      title: 'Digital Transformation',
      description: 'Strategic guidance to modernize your technology stack and business processes',
      benefits: ['Technology roadmap', 'Process optimization', 'Change management', 'ROI analysis'],
    },
    {
      title: 'IT Strategy & Planning',
      description: 'Align technology investments with business objectives for maximum impact',
      benefits: ['Strategic planning', 'Technology assessment', 'Budget optimization', 'Risk management'],
    },
    {
      title: 'Architecture & Design',
      description: 'Design scalable, secure, and efficient system architectures',
      benefits: ['Solution architecture', 'System design', 'Technology selection', 'Best practices'],
    },
  ];

  const engagementModels = [
    {
      title: 'Dedicated Team',
      description: 'Full-time dedicated resources working exclusively on your projects',
      features: ['Long-term engagement', 'Direct team management', 'Flexible scaling', 'Cost-effective'],
    },
    {
      title: 'Project-Based',
      description: 'Fixed scope, timeline, and budget for specific deliverables',
      features: ['Clear milestones', 'Defined outcomes', 'Budget certainty', 'Risk mitigation'],
    },
    {
      title: 'Staff Augmentation',
      description: 'Skilled professionals to complement your existing team',
      features: ['Quick onboarding', 'Specialized skills', 'Flexible duration', 'Knowledge transfer'],
    },
    {
      title: 'Managed Services',
      description: 'Ongoing support, maintenance, and optimization of your systems',
      features: ['24/7 support', 'Proactive monitoring', 'SLA guarantees', 'Continuous improvement'],
    },
  ];

  return (
    <Layout>
      <Seo
        title="Our Services | RoundDigital"
        description="Comprehensive IT solutions including AI development, cybersecurity, cloud services, custom software, and digital transformation consulting."
        keywords="IT services, AI development, cybersecurity, cloud solutions, custom software, digital transformation"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white pt-8 pb-16 md:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e14242]/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#e14242] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#e14242] uppercase tracking-wide">Our Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#191a23] mb-6 leading-tight">
              Comprehensive Solutions for
              <span className="block text-[#e14242]">Modern Enterprises</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From AI-powered innovation to enterprise security, we deliver end-to-end IT solutions that transform businesses and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of services designed to meet your business needs
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveTab('digital')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'digital'
                  ? 'bg-[#e14242] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Digital Services
            </button>
            <button
              onClick={() => setActiveTab('consulting')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'consulting'
                  ? 'bg-[#e14242] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Consulting
            </button>
            <button
              onClick={() => setActiveTab('engagement')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'engagement'
                  ? 'bg-[#e14242] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Engagement Models
            </button>
          </div>

          {/* Tab Content - Digital Services */}
          {activeTab === 'digital' && (
            <div className="space-y-16">
              {digitalServices.map((category, idx) => {
                const IconComponent = category.icon;
                return (
                  <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#e14242] to-[#c93838] rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-[#191a23]">{category.category}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.services.map((service, serviceIdx) => (
                        <div
                          key={serviceIdx}
                          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                        >
                          <h4 className="text-xl font-bold text-[#191a23] mb-3">{service.name}</h4>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Tab Content - Consulting */}
          {activeTab === 'consulting' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultingServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-[#191a23] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.benefits.map((benefit, benefitIdx) => (
                      <div key={benefitIdx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#e14242] rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab Content - Engagement Models */}
          {activeTab === 'engagement' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {engagementModels.map((model, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-[#191a23] mb-4">{model.title}</h3>
                  <p className="text-gray-600 mb-6">{model.description}</p>
                  <div className="space-y-3">
                    {model.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#e14242] rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers results across all our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'Deep dive into your business requirements, challenges, and objectives to create a tailored strategy.',
              },
              {
                step: '02',
                title: 'Design & Planning',
                description: 'Architect scalable solutions with detailed roadmaps, timelines, and resource allocation.',
              },
              {
                step: '03',
                title: 'Development & Implementation',
                description: 'Agile development with continuous integration, testing, and stakeholder collaboration.',
              },
              {
                step: '04',
                title: 'Support & Optimization',
                description: 'Ongoing monitoring, maintenance, and continuous improvement to maximize ROI.',
              },
            ].map((phase, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-[#e14242]/20 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-[#191a23] mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#191a23] to-[#2a2b35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#e14242] text-white font-semibold rounded-lg hover:bg-[#c93838] transition-all duration-300 shadow-lg">
                  Schedule Consultation
                </button>
              </Link>
              <Link href="/industries">
                <button className="px-8 py-4 bg-white text-[#191a23] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                  View Industries
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
