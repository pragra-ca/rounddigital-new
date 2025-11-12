import React from 'react';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Link from 'next/link';
import { 
  ShieldCheckIcon, 
  RocketLaunchIcon, 
  UsersIcon, 
  SparklesIcon,
  CheckCircleIcon,
  TrophyIcon,
  ChartBarIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const stats = [
    { number: '100+', label: 'Projects Delivered' },
    { number: '20+', label: 'Expert Consultants' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years of Excellence' },
  ];

  const values = [
    {
      icon: ShieldCheckIcon,
      title: 'Security First',
      description: 'We prioritize security in everything we build, ensuring your data and systems are protected with industry-leading practices.',
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation Driven',
      description: 'Staying ahead of technology trends, we bring cutting-edge solutions that give you a competitive advantage.',
    },
    {
      icon: UsersIcon,
      title: 'Client Focused',
      description: 'Your success is our mission. We work as an extension of your team to deliver solutions that exceed expectations.',
    },
    {
      icon: TrophyIcon,
      title: 'Excellence Committed',
      description: 'We maintain the highest standards in code quality, project delivery, and client communication.',
    },
  ];

  const timeline = [
    {
      year: '2015',
      title: 'Foundation',
      description: 'Started with a vision to transform how businesses leverage technology',
    },
    {
      year: '2017',
      title: 'Growth',
      description: 'Expanded services to include enterprise solutions and cloud infrastructure',
    },
    {
      year: '2020',
      title: 'Innovation',
      description: 'Pioneered AI and machine learning services for business automation',
    },
    {
      year: '2025',
      title: 'Leadership',
      description: 'Recognized as a leading IT solutions provider serving Fortune 500 companies',
    },
  ];

  const certifications = [
    'ISO 27001 Certified',
    'SOC 2 Compliant',
    'AWS Partner',
    'Microsoft Gold Partner',
    'Google Cloud Partner',
  ];

  return (
    <Layout>
      <Seo
        title="About RoundDigital | Leading IT Solutions Provider"
        description="Learn about RoundDigital's journey in delivering enterprise IT solutions, AI development, and cybersecurity services to businesses worldwide."
        keywords="about rounddigital, IT company, enterprise solutions, technology partner"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e14242]/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#e14242] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#e14242] uppercase tracking-wide">About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#191a23] mb-6 leading-tight">
              Building the Future of
              <span className="block text-[#e14242]">Enterprise Technology</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over a decade, we've been helping businesses transform through innovative technology solutions, expert consulting, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#e14242] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div className="bg-gradient-to-br from-[#e14242] to-[#c93838] rounded-3xl p-12 text-white shadow-xl">
              <RocketLaunchIcon className="w-16 h-16 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed text-white/90">
                To empower businesses with cutting-edge technology solutions that drive growth, enhance security, and create lasting competitive advantages in an increasingly digital world.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-gradient-to-br from-[#191a23] to-[#2a2b35] rounded-3xl p-12 text-white shadow-xl">
              <SparklesIcon className="w-16 h-16 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed text-white/90">
                To be the most trusted technology partner for enterprises worldwide, recognized for innovation, excellence, and our ability to transform complex challenges into elegant solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#e14242] to-[#c93838] rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191a23] mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey/Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A decade of growth, innovation, and delivering excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#e14242] to-[#c93838] hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className={`flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                  <div className="flex-1 md:text-right" style={{ textAlign: idx % 2 === 0 ? 'right' : 'left' }}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 inline-block">
                      <div className="text-3xl font-bold text-[#e14242] mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-[#191a23] mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-8 h-8 bg-[#e14242] rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#191a23] mb-6">Why Partner with RoundDigital?</h2>
              <div className="space-y-4">
                {[
                  'Proven track record with Fortune 500 companies',
                  'Expert team with 10+ years average experience',
                  'End-to-end solutions from strategy to implementation',
                  '24/7 support and proactive monitoring',
                  'Flexible engagement models to suit your needs',
                  'Commitment to security and compliance',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#e14242] flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#191a23] to-[#2a2b35] rounded-3xl p-12">
              <h3 className="text-2xl font-bold text-white mb-6">Certifications & Partnerships</h3>
              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white">
                    <div className="w-2 h-2 bg-[#e14242] rounded-full"></div>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <ChartBarIcon className="w-12 h-12 text-[#e14242] mb-4" />
                <p className="text-white/90">
                  Trusted by leading enterprises across finance, healthcare, retail, and technology sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced professionals driving innovation and delivering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Atin Singh',
                role: 'CEO & Founder',
                image: 'https://res.cloudinary.com/dm1txojyd/image/upload/v1727253393/Atin_pp4vjq.jpg',
                linkedin: 'https://www.linkedin.com/',
              },
              {
                name: 'Vivek Ghartan',
                role: 'CTO',
                image: 'https://res.cloudinary.com/dkyp14kzf/image/upload/v1736773360/Vivek_hboeow.jpg',
                linkedin: 'https://www.linkedin.com/',
              },
              {
                name: 'Sonali Singla',
                role: 'Technical Recruiter',
                image: 'https://res.cloudinary.com/dm1txojyd/image/upload/v1727254953/SonaliSingla_k2j0vx.png',
                linkedin: 'https://www.linkedin.com/',
              },
              {
                name: 'Rahul Singh',
                role: 'Software Developer',
                image: 'https://res.cloudinary.com/dm1txojyd/image/upload/v1727255082/passport_size_photo.._idtrmu.jpg',
                linkedin: 'https://www.linkedin.com/',
              },
              {
                name: 'Abhinav Roy',
                role: 'Software Developer',
                image: 'https://res.cloudinary.com/pragra/image/upload/v1744022235/Employees/small.jpg',
                linkedin: 'https://www.linkedin.com/',
              },
              {
                name: 'Priyanshu Chakraborty',
                role: 'Web Designer',
                image: 'https://res.cloudinary.com/dm1txojyd/image/upload/v1727255058/Priyanshu_Image_vfkqgf.png',
                linkedin: 'https://www.linkedin.com/',
              },
            ].map((member, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191a23]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 w-10 h-10 bg-[#e14242] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-[#c93838]"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#191a23] mb-1">{member.name}</h3>
                  <p className="text-[#e14242] font-semibold text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Got questions? We've got answers. Find answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'What services does RoundDigital offer?',
                answer: 'We provide comprehensive IT solutions including AI development, cybersecurity, cloud management, custom software development, data analytics, and digital transformation consulting.',
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on complexity and scope. Simple projects can take 4-8 weeks, while enterprise solutions may take 3-6 months. We provide detailed timelines during the consultation phase.',
              },
              {
                question: 'Do you offer ongoing support and maintenance?',
                answer: 'Yes, we offer 24/7 support and maintenance packages for all our solutions. Our managed services ensure your systems run smoothly with proactive monitoring and optimization.',
              },
              {
                question: 'What industries do you work with?',
                answer: 'We work across multiple industries including finance, healthcare, retail, manufacturing, technology, and professional services. Our solutions are tailored to meet specific industry requirements.',
              },
              {
                question: 'Can you help with legacy system modernization?',
                answer: 'Absolutely! We specialize in modernizing legacy systems, migrating them to modern platforms while ensuring minimal disruption to your operations and preserving critical data.',
              },
              {
                question: 'How do you ensure data security and compliance?',
                answer: 'We follow industry-leading security practices and maintain certifications including ISO 27001 and SOC 2. We ensure compliance with HIPAA, GDPR, and other relevant regulations based on your industry.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-bold text-[#191a23] pr-8">{faq.question}</h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[#e14242]/10 rounded-full flex items-center justify-center group-open:bg-[#e14242]">
                    <svg className="w-5 h-5 text-[#e14242] group-open:text-white transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#e14242] to-[#c93838]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of companies that trust RoundDigital for their technology needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-white text-[#e14242] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Get Started Today
              </button>
            </Link>
            <Link href="/services">
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Explore Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
