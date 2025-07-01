import Image from "next/image";
import React from "react";

const frame2 = "/images/home/frame-2.svg";
const frame = "/images/home/frame.svg";
const group = "/images/home/group.png";

const Hero = () => {
  return (
    <div className="w-full bg-white relative overflow-hidden">
      {/* 3D shadow background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#e14242]/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-black/10 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl container mx-auto px-4 sm:px-6 relative z-10">
        <header className="flex flex-col xl:flex-row mt-28 items-center xl:items-start justify-between gap-10">
          {/* Text Section */}
          <div className="inline-flex flex-col items-center xl:items-start text-center xl:text-left gap-[35px] flex-shrink-0">
            <p className="sm:w-[80%] xl:w-[531px] font-h-1 text-black text-[length:var(--h-1-font-size)] leading-[var(--h-1-line-height)] tracking-[var(--h-1-letter-spacing)] font-[number:var(--h-1-font-weight)] [font-style:var(--h-1-font-style)] mt-[-1px] drop-shadow-2xl">
              Navigating the digital landscape for success
            </p>

            <p className="w-[90%] sm:w-[80%] xl:w-[502px] font-normal text-black text-xl leading-7 font-['Space_Grotesk-Regular'] drop-shadow">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>

            {/* 3D Button */}
            <button className="relative px-[35px] py-5 rounded-[14px] text-white text-xl font-['Space_Grotesk-Regular'] leading-7 bg-black shadow-[0_8px_32px_0_rgba(25,26,35,0.18),0_2px_8px_0_rgba(225,66,66,0.10)] border-b-4 border-[#e14242] hover:bg-[#e14242] hover:text-white hover:shadow-[0_16px_48px_0_rgba(225,66,66,0.18)] hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              Book a consultation
              {/* subtle shine */}
              <span className="pointer-events-none absolute left-2 top-2 w-2/3 h-1/3 bg-white/20 rounded-t-[14px] blur-[2px] opacity-60" />
            </button>
          </div>

          {/* Image Section: hidden below xl */}
          <div className="hidden xl:block relative w-full max-w-[600px] xl:w-[600.46px] xl:h-[515px]">
            <div className="relative w-full h-[400px] lg:h-[450px] xl:h-[515px]">
              {/* Frame */}
              <Image
                width={36}
                height={36}
                className="absolute w-9 h-9 top-[80%] left-[50%] xl:top-[427px] xl:left-[293px] drop-shadow-2xl"
                alt="Frame"
                src={frame}
              />

              <div className="absolute inset-0">
                {/* Frame2 */}
                <Image
                  width={99}
                  height={99}
                  className="absolute w-[80px] h-[80px] xl:w-[99px] xl:h-[99px] top-[60%] left-[10%] xl:top-[313px] xl:left-[58px] drop-shadow-xl"
                  alt="Frame2"
                  src={frame2}
                />

                {/* Ovals - only on xl+ */}
                <div className="hidden xl:block absolute w-[566px] h-[119px] top-[193px] left-[34px] border-2 border-black/70 rounded-[283.13px/59.47px] rotate-[28.88deg] shadow-xl" />
                <div className="hidden xl:block absolute w-[566px] h-[119px] top-[230px] left-3.5 border-2 border-black/70 rounded-[283.13px/59.47px] rotate-[28.88deg] shadow-xl" />
                <div className="hidden xl:block absolute w-[566px] h-[119px] top-[267px] -left-1.5 border-2 border-black/70 rounded-[283.13px/59.47px] rotate-[28.88deg] shadow-xl" />

                {/* Main Image with 3D effect but no border */}
                <div className="absolute w-[300px] sm:w-[380px] xl:w-[446px] h-auto top-0 left-[20%] xl:left-[154px] rounded-[40px] ">
                  <Image
                    width={446}
                    height={385}
                    className="w-full h-auto rounded-[40px] object-contain"
                    alt="Group"
                    src={group}
                    priority
                  />
                  {/* 3D Glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-[40px] opacity-0 hover:opacity-100 transition duration-300" style={{ boxShadow: "0 0 0 12px #e1424244, 0 8px 32px 0 #e1424244" }} />
                  {/* Glass shine */}
                  <div className="pointer-events-none absolute left-4 top-4 w-2/3 h-1/4 bg-white/40 rounded-t-[40px] blur-[2px] opacity-60" />
                </div>
              </div>

              {/* Dots - xl only */}
              <div className="hidden xl:block absolute w-[31px] h-[31px] top-[89px] left-[116px] bg-[#e14242] rounded-full shadow-2xl" />
              <div className="hidden xl:block absolute w-5 h-5 top-[425px] left-[411px] bg-[#e14242] rounded-full shadow-2xl" />
              <div className="hidden xl:block absolute w-[47px] h-[47px] top-[41px] left-[58px] bg-black rounded-full shadow-2xl" />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Hero;
