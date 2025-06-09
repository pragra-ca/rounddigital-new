import Image from 'next/image';
import React from 'react'
const frame2 = "/images/home/frame-2.svg";
const frame = "/images/home/frame.svg";
const group = "/images/home/group.png";

const Hero = () => {
  return (
    <div>
         <header className="flex w-[1440px] mt-20 items-start justify-between px-[100px] py-0 relative flex-[0_0_auto] bg-transparent">
          <div className="inline-flex flex-col items-start gap-[35px] relative flex-[0_0_auto]">
            <p className="relative w-[531px] mt-[-1.00px] font-h-1 font-[number:var(--h-1-font-weight)] text-[#000000] text-[length:var(--h-1-font-size)] tracking-[var(--h-1-letter-spacing)] leading-[var(--h-1-line-height)] [font-style:var(--h-1-font-style)]">
              Navigating the digital landscape for success
            </p>

            <p className="relative w-[502px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#000000] text-xl tracking-[0] leading-7">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>

            <button className="all-[unset] box-border inline-flex items-start relative flex-[0_0_auto] bg-dark gap-2.5 px-[35px] py-5 rounded-[14px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
                Book a consultation
              </div>
            </button>
          </div>

          <div className="relative w-[600.46px] h-[515px]">
            <div className="relative w-[600px] h-[515px]">
              <Image width={50} height={10}
                className="absolute w-9 h-9 top-[427px] left-[293px]"
                alt="Frame"
                src={frame}
              />

              <div className="absolute w-[600px] h-[515px] top-0 left-0">
                <Image width={50} height={10}
                  className="absolute w-[99px] h-[99px] top-[313px] left-[58px]"
                  alt="Frame"
                  src={frame2}
                />

                <div className="absolute w-[566px] h-[119px] top-[193px] left-[34px] rounded-[283.13px/59.47px] border border-solid border-[#000000] rotate-[28.88deg]" />

                <div className="absolute w-[566px] h-[119px] top-[230px] left-3.5 rounded-[283.13px/59.47px] border border-solid border-[#000000] rotate-[28.88deg]" />

                <div className="absolute w-[566px] h-[119px] top-[267px] -left-1.5 rounded-[283.13px/59.47px] border border-solid border-[#000000] rotate-[28.88deg]" />

                <Image width={50} height={10}
                  className="absolute w-[446px] h-[385px] top-0 left-[154px]"
                  alt="Group"
                  src={group}
                />
              </div>

              <div className="absolute w-[31px] h-[31px] top-[89px] left-[116px] bg-[#ff8181] rounded-[15.5px]" />

              <div className="absolute w-5 h-5 top-[425px] left-[411px] bg-[#ff8181] rounded-[10px]" />

              <div className="absolute w-[47px] h-[47px] top-[41px] left-[58px] bg-[#000000] rounded-[23.5px]" />
            </div>
          </div>
        </header>
    </div>
  )
}

export default Hero
