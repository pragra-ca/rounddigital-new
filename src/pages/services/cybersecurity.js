import React from 'react';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Link from 'next/link';
import { ShieldCheckIcon, LockClosedIcon, ExclamationTriangleIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

export default function CybersecurityPage() {
  const services = [
    {
      icon: ShieldCheckIcon,
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your security posture with detailed vulnerability analysis and recommendations.',
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Threat Detection & Response',
      description: '24/7 monitoring and incident response to protect your business from cyber threats.',
    },
    {
      icon: DocumentCheckIcon,
      title: 'Compliance Management',
      description: 'Achieve and maintain compliance with SOC 2, ISO 27001, HIPAA, GDPR, and other standards.',
    },
    {
      icon: LockClosedIcon,
      title: 'Penetration Testing',
      description: 'Identify vulnerabilities before attackers do with comprehensive penetration testing.',
    },
  ];

  return (
    <Layout>
      <Seo title="Cybersecurity Services | RoundDigital" description="Enterprise cybersecurity solutions including threat detection, compliance, and penetration testing." />
      <section className="bg-gradient-to-br from-red-50 via-orange-50 to-white pt-8 pb-16 md:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
              <ShieldCheckIcon className="w-5 h-5 text-red-600" />
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">Cybersecurity</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#191a23] mb-6 leading-tight">
              Protect Your Business from
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Cyber Threats</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Advanced cybersecurity solutions to safeguard your data, systems, and reputation with proactive threat management.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300">
                Secure Your Business
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
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
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
      <section className="py-20 bg-gradient-to-br from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Strengthen Your Security?</h2>
          <Link href="/contact"><button className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg">Get Security Assessment</button></Link>
        </div>
      </section>
    </Layout>
  );
}
