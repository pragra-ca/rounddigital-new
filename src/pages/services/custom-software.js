import React from 'react';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Link from 'next/link';
import { CodeBracketIcon, DevicePhoneMobileIcon, ArrowPathIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline';

export default function CustomSoftwarePage() {
  const subServices = [
    {
      icon: CodeBracketIcon,
      title: 'Enterprise Applications',
      description: 'Scalable, secure applications designed for complex business needs and workflows. Built with modern architectures to handle growth and change.',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile App Development',
      description: 'Native iOS and Android apps, or cross-platform solutions using React Native and Flutter. Delivering seamless user experiences across devices.',
    },
    {
      icon: ArrowPathIcon,
      title: 'Legacy Modernization',
      description: 'Transform outdated systems into modern, efficient platforms with minimal disruption. Migrate to cloud-native architectures while preserving business logic.',
    },
    {
      icon: Square3Stack3DIcon,
      title: 'API Development',
      description: 'Build and integrate RESTful and GraphQL APIs for seamless system connectivity. Enable data exchange and integration across your technology stack.',
    },
  ];

  const benefits = [
    { title: 'Tailored Solutions', description: 'Software designed specifically for your business processes and requirements' },
    { title: 'Faster Time to Market', description: 'Agile development processes that deliver working solutions quickly' },
    { title: 'Scalable Architecture', description: 'Built to grow with your business, handling increased load and users' },
    { title: 'Measurable ROI', description: 'Track performance and impact with built-in analytics and reporting' },
  ];

  const faqs = [
    {
      question: 'How long does custom software development take?',
      answer: 'Timelines vary based on project complexity and scope. A simple application might take 2-3 months, while enterprise solutions can take 6-12 months. We use agile methodologies to deliver working software incrementally, so you see value early.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, proven technologies based on your specific needs. This includes React, Node.js, Python, React Native, Flutter, and cloud platforms like AWS and Azure. We choose the best stack for each project.',
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely. We specialize in system integration and can connect new software with your existing ERP, CRM, databases, and other business systems through APIs and middleware solutions.',
    },
  ];

  return (
    <Layout>
      <Seo
        title="Custom Software Development | RoundDigital"
        description="Enterprise software development services including web apps, mobile apps, legacy modernization, and API development. Build software tailored to your business needs."
        keywords="custom software development, enterprise applications, mobile app development, legacy modernization, API development, software consulting"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-200 via-emerald-200 to-green-100 pt-8 pb-16 md:pt-10 relative overflow-hidden">
        {/* Gradient decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500/50 to-emerald-500/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-400/50 to-green-400/50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-400/40 to-emerald-400/40 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-green-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-emerald-300/30 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 border border-green-200/50 shadow-sm">
              <CodeBracketIcon className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">Custom Software</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#191a23] mb-6 leading-tight">
              Build Software Tailored to
              <span className="block" style={{ color: '#4ade80' }}>Your Business Needs</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From enterprise applications to mobile apps, we create custom software solutions that drive efficiency, innovation, and growth.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 via-emerald-600 to-green-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#191a23] mb-6">Software That Grows With Your Business</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  At RoundDigital, we understand that off-the-shelf software rarely fits perfectly. That's why we specialize in custom software development that's designed specifically for your business processes, workflows, and goals.
                </p>
                <p>
                  Our team of experienced developers, architects, and designers work closely with you to understand your unique challenges and create solutions that not only solve today's problems but scale for tomorrow's growth.
                </p>
                <p>
                  Whether you need a web application, mobile app, enterprise system, or API integration, we deliver high-quality software built with modern technologies and best practices.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <CodeBracketIcon className="w-32 h-32 text-green-600 mx-auto mb-4" />
                <p className="text-2xl font-bold text-[#191a23]">100+ Projects</p>
                <p className="text-gray-600 mt-2">Successfully Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Our Custom Software Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((service, idx) => {
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

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Why Choose Custom Software?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#191a23] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#191a23] mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #16a34a, #059669)' }}>
        {/* Gradient decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#ffffff', zIndex: 20 }}>
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-xl mb-8" style={{ color: '#ffffff', opacity: 0.9, zIndex: 20 }}>
            Let's discuss your software needs and create a solution that transforms your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ zIndex: 20 }}>
            <Link href="/contact">
              <button className="px-8 py-4 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300" style={{ backgroundColor: '#ffffff', color: '#16a34a', zIndex: 20 }}>
                Get Started
              </button>
            </Link>
            <Link href="/services">
              <button className="px-8 py-4 font-semibold rounded-lg hover:bg-white/10 transition-all duration-300" style={{ backgroundColor: 'transparent', border: '2px solid #ffffff', color: '#ffffff', zIndex: 20 }}>
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
