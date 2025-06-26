import {
    firstCompanyLogo,
    secondCompanyLogo,
    thirdCompanyLogo,
    fourthCompanyLogo,
    fifthCompanyLogo,
  } from '@/constant/constant'
import Image from 'next/image'
  
  const CompanyLogo = () => {
    const companyLogos = [
      firstCompanyLogo,
      secondCompanyLogo,
      thirdCompanyLogo,
      fourthCompanyLogo,
      fifthCompanyLogo,
    ]
  
    return (
      <div className="bg-[#222222] py-[24px] px-4 sm:px-6 w-full rounded-[22px] flex flex-wrap justify-center items-center gap-6 sm:gap-x-16 md:gap-x-20 mt-10">
        {companyLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Company ${index + 1}`}
            className="object-contain"
            width={100}
            height={100}
          />
        ))}
      </div>
    )
  }
  
  export default CompanyLogo
  