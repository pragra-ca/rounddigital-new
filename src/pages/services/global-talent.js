import React from 'react';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Link from 'next/link';
import { UserGroupIcon, GlobeAltIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function GlobalTalentPage() {
  const services = [
    {
      icon: GlobeAltIcon,
      title: 'Global Talent Sourcing',
      description: 'Access top-tier technical talent from around the world. We handle recruitment, vetting, and onboarding to build your distributed team.',
    },
    {
      icon: BriefcaseIcon,
      title: 'Staff Augmentation',
      description: 'Scale your team quickly with skilled professionals who integrate seamlessly with your existing workforce and culture.',
    },
    {
      icon: UserGroupIcon,
      title: 'Managed Team Services',
      description: 'We manage entire teams of developers, designers, and specialists dedicated to your projects with full accountability.',
    },
    {
      icon: AcademicCapIcon,
      title: 'Training & Upskilling',
      description: 'Invest in your talent with customized training programs that keep your team at the cutting edge of technology.',
    },
  ];

  const benefits = [
    { title: 'Cost Efficiency', description: 'Reduce hiring and operational costs by up to 60%' },
    { title: 'Speed to Market', description: 'Build teams in weeks, not months' },
    { title: 'Quality Talent', description: 'Access pre-vetted, experienced professionals' },
    { title: 'Flexibility', description: 'Scale up or down based on project needs' },
  ];

  const process = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'We understand your technical needs, team culture, and project timelines.',
    },
    {
      step: '02',
      title: 'Talent Matching',
      description: 'Our recruiters identify and vet candidates who match your specific requirements.',
    },
    {
      step: '03',
      title: 'Seamless Integration',
      description: 'We handle onboarding, equipment, and integration into your workflows.',
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Continuous performance monitoring and team optimization.',
    },
  ];

  return (
    <Layout>
      <Seo
        title="Global Talent Solutions | RoundDigital"
        description="Access world-class technical talent through our global talent sourcing and staff augmentation services."
        keywords="global talent, staff augmentation, remote teams, talent sourcing, offshore development"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-white pt-8 pb-16 md:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <GlobeAltIcon className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Global Talent</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#191a23] mb-6 leading-tight">
              Build World-Class Teams
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">From Anywhere</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Access top-tier technical talent globally. We handle recruitment, vetting, and team management so you can focus on building great products.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300">
                Build Your Team
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
              <h2 className="text-4xl font-bold text-[#191a23] mb-6">Tap Into Global Talent Pools</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  In today's competitive landscape, finding the right talent is critical. RoundDigital connects you with exceptional technical professionals from around the world, giving you access to skills and expertise that may be scarce in your local market.
                </p>
                <p>
                  Our global talent solutions go beyond simple recruitment. We provide end-to-end services including sourcing, vetting, onboarding, and ongoing team management, ensuring your remote teams integrate seamlessly with your organization.
                </p>
                <p>
                  Whether you need a single specialist or an entire development team, we have the network and expertise to deliver the right talent at the right time.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <GlobeAltIcon className="w-32 h-32 text-blue-600 mx-auto mb-4" />
                <p className="text-2xl font-bold text-[#191a23]">150+ Countries</p>
                <p className="text-gray-600 mt-2">Global Talent Network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Our Global Talent Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for building and managing distributed teams
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
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

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">How We Build Your Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((phase, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-blue-600/20 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-[#191a23] mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Why Choose Our Global Talent Solutions?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#191a23] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Global Team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss your talent needs and how we can help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
