import Image from "next/image";
import React from "react";

const frame2 = "/images/home/frame-2.svg";
const frame = "/images/home/frame.svg";
const group = "/images/home/group.png";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 ">
        <header className="flex flex-col xl:flex-row mt-28 tems-center xl:items-start justify-between  gap-10">
          {/* Text Section */}
          <div className="inline-flex flex-col items-center xl:items-start text-center xl:text-left gap-[35px] flex-shrink-0">
            <p className=" sm:w-[80%] xl:w-[531px] font-h-1 text-[#000000] text-[length:var(--h-1-font-size)] leading-[var(--h-1-line-height)] tracking-[var(--h-1-letter-spacing)] font-[number:var(--h-1-font-weight)] [font-style:var(--h-1-font-style)] mt-[-1px]">
              Navigating the digital landscape for success
            </p>

            <p className="w-[90%] sm:w-[80%] xl:w-[502px] font-normal text-[#000000] text-xl leading-7 font-['Space_Grotesk-Regular']">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>

            <button className="bg-dark hover:bg-[#1a1a1a] transform hover:scale-105 transition-all duration-300 px-[35px] py-5 rounded-[14px] text-white text-xl font-['Space_Grotesk-Regular'] leading-7">
              Book a consultation
            </button>
          </div>

          {/* Image Section: hidden below xl (including at 150% zoom) */}
          <div className="hidden xl:block relative w-full max-w-[600px] xl:w-[600.46px] xl:h-[515px]">
            <div className="relative w-full h-[400px] lg:h-[450px] xl:h-[515px]">
              {/* Frame */}
              <Image
                width={36}
                height={36}
                className="absolute w-9 h-9 top-[80%] left-[50%] xl:top-[427px] xl:left-[293px]"
                alt="Frame"
                src={frame}
              />

              <div className="absolute inset-0">
                {/* Frame2 */}
                <Image
                  width={99}
                  height={99}
                  className="absolute w-[80px] h-[80px] xl:w-[99px] xl:h-[99px] top-[60%] left-[10%] xl:top-[313px] xl:left-[58px]"
                  alt="Frame2"
                  src={frame2}
                />

                {/* Ovals - only on xl+ */}
                <div className="hidden xl:block absolute w-[566px] h-[119px] top-[193px] left-[34px] border border-black rounded-[283.13px/59.47px] rotate-[28.88deg]" />
                <div className="hidden xl:block absolute w-[566px] h-[119px] top-[230px] left-3.5 border border-black rounded-[283.13px/59.47px] rotate-[28.88deg]" />
                <div className="hidden xl:block absolute w-[566px] h-[119px] top-[267px] -left-1.5 border border-black rounded-[283.13px/59.47px] rotate-[28.88deg]" />

                {/* Main Image */}
                <Image
                  width={446}
                  height={385}
                  className="absolute w-[300px] sm:w-[380px] xl:w-[446px] h-auto top-0 left-[20%] xl:left-[154px]"
                  alt="Group"
                  src={group}
                />
              </div>

              {/* Dots - xl only */}
              <div className="hidden xl:block absolute w-[31px] h-[31px] top-[89px] left-[116px] bg-[#ff8181] rounded-full" />
              <div className="hidden xl:block absolute w-5 h-5 top-[425px] left-[411px] bg-[#ff8181] rounded-full" />
              <div className="hidden xl:block absolute w-[47px] h-[47px] top-[41px] left-[58px] bg-black rounded-full" />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Hero;
