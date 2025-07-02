import React from 'react';
import Image from 'next/image';

import AzureLogo from "@/assets/partners/azure.png";
import DataDogLogo from '@/assets/partners/data_dog.png';
import ESolutionsLogo from '@/assets/partners/e_solutions.png';
import EpslionSolutionsLogo from '@/assets/partners/epslion_solutions.png';
import RoundAssistLogo from '@/assets/partners/round_assist.png';
import TechMahindraLogo from '@/assets/partners/tech_mahindra.png';


const Partners = () => {
  return (
    <div className="w-full px-4 lg:px-[100px] py-16 mx-auto max-w-7xl 2xl:container bg-white">
      <div className="flex flex-wrap items-center justify-center gap-8 mt-12 px-4">
        {[AzureLogo, DataDogLogo, ESolutionsLogo, EpslionSolutionsLogo, RoundAssistLogo, TechMahindraLogo].map((logo, index) => (
          <div
            key={index}
            className="
              relative w-[180px] h-[64px] flex items-center justify-center
              bg-white rounded-2xl
              shadow-[0_6px_24px_0_rgba(25,26,35,0.13),0_2px_8px_0_rgba(225,66,66,0.10)]
              border-b-4 border-[#e14242]
              hover:shadow-[0_16px_48px_0_rgba(225,66,66,0.15),0_8px_32px_0_rgba(25,26,35,0.15)]
              hover:-translate-y-2
              transition-all duration-300
              group
            "
          >
            {/* Subtle glass shine */}
            <div className="pointer-events-none absolute left-3 top-2 w-2/3 h-1/3 bg-white/30 rounded-t-2xl blur-[2px] opacity-60" />
            {/* Logo */}
            <div className="relative w-[120px] h-[40px] flex items-center justify-center z-10">
              <Image src={logo} alt={`Company logo ${index + 1}`} fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
