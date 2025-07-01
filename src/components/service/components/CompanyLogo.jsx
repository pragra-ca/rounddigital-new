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
    <div className="bg-gradient-to-r from-[#232323] via-[#222222] to-[#181818] py-8 px-4 sm:px-10 w-full rounded-[32px] flex flex-wrap justify-center items-center gap-8 sm:gap-x-20 md:gap-x-28 mt-10 shadow-lg border border-[#232323]/40">
      {companyLogos.map((logo, index) => (
        <div
          key={index}
          className="group relative flex items-center justify-center transition-transform duration-300 hover:scale-105"
        >
          {/* Subtle 3D Glow on hover */}
          <div className="absolute -inset-2 rounded-2xl bg-[#e14242]/10 blur-md opacity-0 group-hover:opacity-80 transition-all duration-300 pointer-events-none" />
          {/* Card effect */}
          <div className="relative bg-gradient-to-br from-white/10 via-[#232323]/10 to-[#e14242]/5 rounded-2xl shadow-md group-hover:shadow-lg border border-[#232323]/20 p-2 flex items-center justify-center transition-all duration-300">
            <Image
              src={logo}
              alt={`Company ${index + 1}`}
              className="object-contain rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 bg-white/10 p-1"
              width={90}
              height={90}
              style={{ minWidth: 64, minHeight: 64 }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CompanyLogo
