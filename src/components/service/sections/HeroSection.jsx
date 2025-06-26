import React, { useRef } from "react";
import Button from "../components/Button";
import { star, ellips } from "@/constant/constant";
import CompanyLogo from "../components/CompanyLogo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import HowToWorkSection from "./HowToWorkSection";

const HeroSection = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const trustedRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from(headingRef.current, { opacity: 0, y: -50 })
        .from(textRef.current, { opacity: 0, y: 20 }, "-=0.5")
        .from(buttonRef.current, { opacity: 0, scale: 0.8 }, "-=0.5")
        .from(trustedRef.current, { opacity: 0, y: 20 }, "-=0.5");
    },
    { scope: containerRef }
  );

  return (
    <div className="bg-[#312f2f] mt-16">
      <div className="max-w-[1200px] mx-auto">
        {/* <Header /> */}
        {/* <HeroSection /> */}

        <section
          ref={containerRef}
          className="bg-[#312f2f] text-header pt-10 md:pt-20 px-6 text-center flex flex-col items-center justify-center relative overflow-hidden"
        >
          {/* Ellips Background */}
          <Image
            src={ellips}
            alt="ellips"
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none opacity-20"
          />

          {/* Decorative Stars (Hidden on mobile) */}
          <Image
            src={star}
            alt="star-small-left"
            className="hidden sm:block absolute top-[340px] left-[363px] w-4 h-4 object-contain"
          />
          <Image
            src={star}
            alt="star-medium-right"
            className="hidden sm:block absolute top-[340px] right-[450px] w-6 h-6 object-contain"
          />
          <Image
            src={star}
            alt="star-large-right"
            className="hidden sm:block absolute top-[75px] right-[300px] w-[79px] h-[79px] object-contain"
          />

          {/* Main Heading */}
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-[802px] text-white"
          >
            Bringing Your <br />
            Dream Into <span className="text-primary italic text-[#e14242]">Reality</span>
          </h1>

          {/* Subtext */}
          <p
            ref={textRef}
            className="text-white mt-6 max-w-[983px] text-sm sm:text-base leading-relaxed"
          >
            We increase revenue and ensure sustainable long-term growth <br />
            for your business through powerful IT Solutions
          </p>

          {/* CTA Button */}
          <div ref={buttonRef}>
            <Button className="mt-10 w-[149px] h-[56px] bg-[#e14242]">Book A Meeting</Button>
          </div>

          {/* Trusted By */}
          <div
            ref={trustedRef}
            className="mt-14 flex items-center gap-4 text-text text-xs tracking-wider uppercase"
          >
            <div className="h-px w-10 bg-primary border border-[#e14242]" />
            <span className="text-white">Trusted by amazing brands</span>
            <div className="h-px w-10 bg-primary border border-[#e14242]" />
          </div>

          {/* Company Logos */}
          <CompanyLogo />
        </section>
        <HowToWorkSection />
      </div>
    </div>
  );
};

export default HeroSection;
