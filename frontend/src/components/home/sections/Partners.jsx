import React from 'react';
import Image from 'next/image';

import AzureLogo from "@/assets/partners/azure.png";
import DataDogLogo from '@/assets/partners/data_dog.png';
import ESolutionsLogo from '@/assets/partners/e_solutions.png';
import EpslionSolutionsLogo from '@/assets/partners/epslion_solutions.png';
import RoundAssistLogo from '@/assets/partners/round_assist.png';
import TechMahindraLogo from '@/assets/partners/tech_mahindra.png';


const Partners = () => {
  const partners = [
    { logo: AzureLogo, name: 'Microsoft Azure' },
    { logo: DataDogLogo, name: 'DataDog' },
    { logo: ESolutionsLogo, name: 'E-Solutions' },
    { logo: EpslionSolutionsLogo, name: 'Epsilon Solutions' },
    { logo: RoundAssistLogo, name: 'Round Assist' },
    { logo: TechMahindraLogo, name: 'Tech Mahindra' },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Trusted By Industry Leaders
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#191a23]">
            Our Partners & Clients
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:border-[#e14242] hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-12 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#e14242] mb-2">100+</p>
            <p className="text-gray-600">Projects Delivered</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#e14242] mb-2">50+</p>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#e14242] mb-2">20+</p>
            <p className="text-gray-600">Expert Consultants</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#e14242] mb-2">98%</p>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
