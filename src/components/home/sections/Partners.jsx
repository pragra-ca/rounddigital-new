import React from 'react';
import Image from 'next/image';

import frame from '/public/images/home/frame.svg';
import frame2 from '/public/images/home/frame-2.svg';
import group from '/public/images/home/group.png';

const companyLogo = "/images/home/company-logo.svg";
const companyLogo2 = "/images/home/company-logo-2.svg";
const companyLogo3 = "/images/home/company-logo-3.svg";
const companyLogo4 = "/images/home/company-logo-4.svg";
const companyLogo5 = "/images/home/company-logo-5.svg";
const companyLogo6 = "/images/home/company-logo-6.svg";

const Partners = () => {
  return (
    <div className="w-full px-4 lg:px-[100px] py-8 mx-auto max-w-7xl 2xl:container">
      {/* Company Logos */}
      <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
        {[companyLogo6, companyLogo, companyLogo5, companyLogo2, companyLogo4, companyLogo3].map((logo, index) => (
          <div key={index} className="relative w-[180px] h-[48px]">
            <Image src={logo} alt={`Company logo ${index + 1}`} layout="fill" className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
