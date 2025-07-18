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

      tl.from(headingRef.current, { opacity: 0, y: -60, scale: 0.95 })
        .from(textRef.current, { opacity: 0, y: 30 }, "-=0.5")
        .from(buttonRef.current, { opacity: 0, scale: 0.8 }, "-=0.5")
        .from(trustedRef.current, { opacity: 0, y: 20 }, "-=0.5");
    },
    { scope: containerRef },
  );

  // Generate random small stars for the background
  const randomStars = Array.from({ length: 36 }).map((_, i) => {
    const size = Math.random() * 2 + 1.5;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const opacity = 0.18 + Math.random() * 0.25;
    const blur = Math.random() > 0.7 ? "blur(1.5px)" : "none";
    const twinkle = Math.random() > 0.5 ? "twinkle-bg-star" : "";
    return (
      <span
        key={i}
        className={`absolute pointer-events-none z-0 bg-white rounded-full ${twinkle}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          opacity,
          filter: blur,
        }}
      />
    );
  });

  return (
    <div className="relative bg-gradient-to-br from-[#232323] mt-16 via-[#312f2f] to-[#181818] min-h-[80vh] flex flex-col justify-center overflow-hidden">
      {/* Stars BG */}
      {/* Decorative Stars (shine/twinkle, big/small, and floating/rotating) */}
      <Image
        src={star}
        alt="star-twinkle-1"
        className="hidden md:block absolute top-[18%] left-[10%] w-16 h-16 object-contain twinkle-star twinkle-delay-1 floating-star"
      />
      <Image
        src={star}
        alt="star-twinkle-2"
        className="hidden md:block absolute top-[30%] left-[12%] w-8 h-8 object-contain twinkle-star floating-star"
      />
      <Image
        src={star}
        alt="star-twinkle-3"
        className="hidden md:block absolute top-[35%] right-[18%] w-12 h-12 object-contain twinkle-star twinkle-delay-2 floating-star"
      />
      <Image
        src={star}
        alt="star-twinkle-4"
        className="hidden md:block absolute top-[10%] right-[12%] w-[80px] h-[80px] object-contain twinkle-star twinkle-delay-3 floating-star"
      />
      <Image
        src={star}
        alt="star-twinkle-5"
        className="hidden md:block absolute bottom-[15%] left-[20%] w-10 h-10 object-contain twinkle-star twinkle-delay-4 floating-star"
      />
      <Image
        src={star}
        alt="star-twinkle-6"
        className="hidden md:block absolute bottom-[10%] right-[15%] w-14 h-14 object-contain twinkle-star twinkle-delay-5 floating-star"
      />

      {/* Random small stars */}
      <div className="absolute inset-0 z-0">{randomStars}</div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
        <section
          ref={containerRef}
          className="w-full flex flex-col items-center justify-center text-center pt-20 pb-10"
        >
          {/* Main Heading */}
          <h1
            ref={headingRef}
            className="relative text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight max-w-3xl text-white bg-gradient-to-br from-white/10 via-[#e14242]/10 to-transparent rounded-3xl px-4 py-3 shadow-md backdrop-blur-md"
            style={{
              boxShadow: "0 4px 16px 0 #e1424222, 0 1.5px 0 #e14242",
            }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#e14242] via-white to-[#e14242] animate-gradient-x">
              Transform Your Business
            </span>
            <span className="block mt-2">
              With{" "}
              <span className="text-[#e14242] italic drop-shadow-[0_1px_4px_#e14242]">
                IT Excellence
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p
            ref={textRef}
            className="text-white/90 mt-7 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-[0_1px_4px_#e14242] mx-auto"
          >
            Comprehensive IT solutions from cybersecurity and cloud management{" "}
            <br className="hidden sm:block" />
            to custom software development and enterprise applications.
          </p>

          {/* CTA Button */}
          <div ref={buttonRef}>
            <Button className="mt-10 w-[180px] h-[56px] bg-gradient-to-r from-[#e14242] to-[#ff6a6a] text-white font-bold text-lg rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 border-b-4 border-[#e14242]">
              Book A Meeting
            </Button>
          </div>

          {/* Trusted By */}
          <div
            ref={trustedRef}
            className="mt-14 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-xs tracking-wider uppercase"
          >
            <div className="h-px w-10 bg-primary border border-[#e14242]" />
            <span className="text-white tracking-widest font-semibold drop-shadow-[0_1px_4px_#e14242]">
              Trusted by amazing brands
            </span>
            <div className="h-px w-10 bg-primary border border-[#e14242]" />
          </div>

          {/* Company Logos */}
          <div className="mt-8">
            <CompanyLogo />
          </div>
        </section>
        <HowToWorkSection />
      </div>
      {/* Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease-in-out infinite;
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
            filter: brightness(1) drop-shadow(0 0 8px #fff8);
            transform: scale(1);
          }
          20% {
            opacity: 0.7;
            filter: brightness(1.5) drop-shadow(0 0 16px #fff);
            transform: scale(1.18);
          }
          40% {
            opacity: 0.5;
            filter: brightness(2) drop-shadow(0 0 24px #fff);
            transform: scale(1.32);
          }
          60% {
            opacity: 0.7;
            filter: brightness(1.5) drop-shadow(0 0 16px #fff);
            transform: scale(1.18);
          }
          80% {
            opacity: 1;
            filter: brightness(1) drop-shadow(0 0 8px #fff8);
            transform: scale(1);
          }
        }
        .twinkle-star {
          animation: twinkle 2.2s infinite;
        }
        .twinkle-delay-1 {
          animation-delay: 0.3s;
        }
        .twinkle-delay-2 {
          animation-delay: 0.7s;
        }
        .twinkle-delay-3 {
          animation-delay: 1.1s;
        }
        .twinkle-delay-4 {
          animation-delay: 1.5s;
        }
        .twinkle-delay-5 {
          animation-delay: 1.9s;
        }

        @keyframes floating {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) rotate(8deg);
          }
        }
        .floating-star {
          animation: floating 7s ease-in-out infinite alternate;
        }
        .twinkle-bg-star {
          animation: twinkle 3.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
