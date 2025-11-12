import React from 'react';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Link from 'next/link';
import { 
  BriefcaseIcon, 
  AcademicCapIcon, 
  HeartIcon, 
  SparklesIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ChartBarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export async function getServerSideProps() {
  // Fallback job positions if Strapi is not accessible
  const fallbackJobs = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Mississauga',
      type: 'Full-time',
      description: 'Build scalable web applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'AI/ML Engineer',
      department: 'AI & Data Science',
      location: 'Remote / Texas',
      type: 'Full-time',
      description: 'Develop machine learning models and AI solutions for enterprise clients.',
    },
    {
      title: 'Cybersecurity Consultant',
      department: 'Security',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Assess security posture, conduct penetration testing, and implement security solutions.',
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud & Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and implement cloud-native architectures on AWS, Azure, or GCP.',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Mississauga',
      type: 'Full-time',
      description: 'Build and maintain CI/CD pipelines, infrastructure as code, and automated deployments.',
    },
    {
      title: 'Technical Project Manager',
      department: 'Project Management',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Lead technical projects, coordinate teams, and ensure successful delivery.',
    },
  ];

  try {
    const res = await fetch('http://localhost:1337/api/job-positions?sort=order:asc&populate=*');
    const data = await res.json();
    
    if (data.data && data.data.length > 0) {
      return {
        props: {
          jobs: data.data,
        },
      };
    }
  } catch (error) {
    console.error('Error fetching jobs from Strapi, using fallback:', error);
  }

  return {
    props: {
      jobs: fallbackJobs,
    },
  };
}

export default function CareersPage({ jobs }) {
  const benefits = [
    {
      icon: BriefcaseIcon,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries, performance bonuses, and equity opportunities',
    },
    {
      icon: HeartIcon,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and mental health support',
    },
    {
      icon: AcademicCapIcon,
      title: 'Learning & Development',
      description: 'Continuous training, certifications, conferences, and skill development programs',
    },
    {
      icon: GlobeAltIcon,
      title: 'Remote Flexibility',
      description: 'Work from anywhere with flexible hours and hybrid work options',
    },
    {
      icon: UserGroupIcon,
      title: 'Collaborative Culture',
      description: 'Inclusive environment with diverse teams and open communication',
    },
    {
      icon: SparklesIcon,
      title: 'Innovation Focus',
      description: 'Work on cutting-edge projects with latest technologies and methodologies',
    },
  ];

  // Transform Strapi data to match expected format
  const openPositions = jobs.map(job => ({
    title: job.title,
    department: job.department,
    location: job.location,
    type: job.type,
    description: job.description,
  }));

  const values = [
    {
      icon: RocketLaunchIcon,
      title: 'Innovation First',
      description: 'We encourage experimentation and embrace new technologies',
    },
    {
      icon: UserGroupIcon,
      title: 'Team Collaboration',
      description: 'Success comes from working together and supporting each other',
    },
    {
      icon: ChartBarIcon,
      title: 'Growth Mindset',
      description: 'Continuous learning and improvement are part of our DNA',
    },
    {
      icon: HeartIcon,
      title: 'Work-Life Balance',
      description: 'We prioritize wellbeing and sustainable work practices',
    },
  ];

  return (
    <Layout>
      <Seo
        title="Careers at RoundDigital | Join Our Team"
        description="Explore career opportunities at RoundDigital. Join a team of innovative professionals building the future of enterprise technology."
        keywords="careers, jobs, IT jobs, software developer jobs, remote work, technology careers"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e14242]/10 rounded-full mb-6">
              <BriefcaseIcon className="w-5 h-5 text-[#e14242]" />
              <span className="text-sm font-semibold text-[#e14242] uppercase tracking-wide">Careers</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#191a23] mb-6 leading-tight">
              Build Your Career with
              <span className="block text-[#e14242]">Industry Leaders</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Join a team of passionate professionals working on cutting-edge technology projects that transform businesses worldwide.
            </p>
            <a href="mailto:careers@rounddigital.co">
              <button className="px-8 py-4 bg-[#e14242] text-white font-semibold rounded-lg hover:bg-[#c93838] transition-all duration-300 shadow-lg">
                View Open Positions
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Why Join RoundDigital?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're building more than just software – we're building careers and shaping the future of technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#e14242] to-[#c93838] rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191a23] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Our Culture & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where everyone can thrive and do their best work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e14242] to-[#c93838] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191a23] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191a23] mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our current opportunities and find the perfect role for you
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, idx) => {
              const slug = position.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer">
                  <Link href={`/careers/${slug}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-[#191a23] group-hover:text-[#e14242] transition-colors">{position.title}</h3>
                          <span className="px-3 py-1 bg-[#e14242]/10 text-[#e14242] text-sm font-semibold rounded-full">
                            {position.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-3">
                          <div className="flex items-center gap-2">
                            <BriefcaseIcon className="w-4 h-4" />
                            <span>{position.department}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <GlobeAltIcon className="w-4 h-4" />
                            <span>{position.location}</span>
                          </div>
                        </div>
                        <p className="text-gray-600">{position.description}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <button className="px-6 py-3 bg-[#e14242] text-white font-semibold rounded-lg hover:bg-[#c93838] transition-all duration-300 group-hover:shadow-lg">
                          View Details
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Don't see a position that matches your skills? We're always looking for talented individuals.
            </p>
            <a href="mailto:careers@rounddigital.co">
              <button className="px-8 py-4 bg-white text-[#e14242] font-semibold rounded-lg border-2 border-[#e14242] hover:bg-[#e14242] hover:text-white transition-all duration-300">
                Send Us Your Resume
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#191a23] to-[#2a2b35]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our team and help us build the future of enterprise technology
          </p>
          <a href="mailto:careers@rounddigital.co">
            <button className="px-8 py-4 bg-[#e14242] text-white font-semibold rounded-lg hover:bg-[#c93838] transition-all duration-300 shadow-lg">
              Get in Touch
            </button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
