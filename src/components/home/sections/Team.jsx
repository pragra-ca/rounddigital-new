import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Smith',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years of experience in digital transformation and business strategy.',
      image: '/images/team/john-smith.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Creative Director',
      description: 'Passionate about creating beautiful and intuitive user experiences that drive engagement.',
      image: '/images/team/sarah-johnson.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        instagram: '#',
      }
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Lead Developer',
      description: 'Expert in modern web technologies and scalable architecture solutions.',
      image: '/images/team/michael-chen.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
      }
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Marketing Director',
      description: 'Data-driven marketer focused on growth strategies and brand development.',
      image: '/images/team/emily-davis.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        instagram: '#',
      }
    },
    {
      id: 5,
      name: 'David Kim',
      role: 'UX Designer',
      description: 'Creates intuitive and delightful user experiences that solve real problems.',
      image: '/images/team/david-kim.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        behance: '#',
      }
    },
    {
      id: 6,
      name: 'Lisa Wong',
      role: 'Project Manager',
      description: 'Ensures projects are delivered on time, on budget, and exceed expectations.',
      image: '/images/team/lisa-wong.jpg',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
      }
    }
  ];

  // Placeholder image URLs from Unsplash
  const placeholderImages = [
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-red-100 text-red-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Our Team
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-red-500">Talented Team</span>
          </h2>
          <p className="text-lg text-gray-600">
            We're a diverse group of passionate individuals dedicated to delivering exceptional results for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64">
                <Image
                  src={placeholderImages[index]}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-3">
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                      >
                        <FaTwitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                      >
                        <FaLinkedinIn className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a 
                        href={member.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a 
                        href={member.social.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                      >
                        <FaInstagram className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-red-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Want to join our team? We're always looking for talented individuals to join us on our mission.
          </p>
          <button className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors duration-300">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
