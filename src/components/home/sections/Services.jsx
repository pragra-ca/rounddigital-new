import React from "react";
import {
  CodeBracketIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import ctabg from "@/assets/home/ctabg.png";

// Assets
const arrow1 = "/images/home/arrow-1.svg";
const tokyoBrowserWindow =
  "/images/home/tokyo-browser-window-with-emoticon-likes-and-stars-around-2.png";
const tokyoMagnifier =
  "/images/home/tokyo-magnifier-web-search-with-elements-2.png";
const tokyoMessenger =
  "/images/home/tokyo-sending-messages-from-one-place-to-another-1.png";

const services = [
  {
    id: 1,
    title: "Cybersecurity",
    subtitle: "Protect & Secure",
    description:
      "Safeguard your business with advanced cybersecurity solutions and proactive threat management.",
    bgColor: "bg-white",
    textColor: "text-black",
    badgeBg: "bg-[#e14242]",
    badgeText: "text-white",
    image: tokyoMagnifier,
  },
  {
    id: 2,
    title: "IT Consulting",
    subtitle: "Expert Guidance",
    description:
      "Strategic IT consulting to align technology with your business goals and drive digital transformation.",
    bgColor: "bg-grey",
    textColor: "text-black",
    badgeBg: "bg-[#e14242]",
    badgeText: "text-white",
    image: tokyoBrowserWindow,
  },
  {
    id: 3,
    title: "Application Development",
    subtitle: "Mobile & Web Apps",
    description:
      "Custom application development for mobile and web to enhance your digital presence.",
    bgColor: "bg-[#e14242]",
    textColor: "text-white",
    badgeBg: "bg-white",
    badgeText: "text-black",
    image: tokyoMessenger,
  },
  {
    id: 4,
    title: "Cloud Application Development",
    subtitle: "Modern Solutions",
    description:
      "Build and deploy scalable cloud-native applications for agility and growth.",
    bgColor: "bg-dark",
    textColor: "text-white",
    badgeBg: "bg-white",
    badgeText: "text-black",
    image: tokyoBrowserWindow,
  },
  {
    id: 5,
    title: "Cloud Management",
    subtitle: "Optimize & Scale",
    description:
      "Comprehensive cloud management services to optimize performance and reduce costs.",
    bgColor: "bg-[#e14242]",
    textColor: "text-white",
    badgeBg: "bg-white",
    badgeText: "text-black",
    image: tokyoMagnifier,
  },
  {
    id: 6,
    title: "Custom Software Development",
    subtitle: "Tailored Solutions",
    description:
      "Bespoke software solutions designed to meet your unique business requirements.",
    bgColor: "bg-white",
    textColor: "text-black",
    badgeBg: "bg-[#e14242]",
    badgeText: "text-white",
    image: tokyoMessenger,
  },
  {
    id: 7,
    title: "Enterprise Content Management",
    subtitle: "Organize & Control",
    description:
      "Streamline your content lifecycle with robust enterprise content management systems.",
    bgColor: "bg-grey",
    textColor: "text-black",
    badgeBg: "bg-[#e14242]",
    badgeText: "text-white",
    image: tokyoMagnifier,
  },
  {
    id: 8,
    title: "Software Testing",
    subtitle: "Quality Assurance",
    description:
      "Ensure reliability and performance with comprehensive software testing services.",
    bgColor: "bg-[#e14242]",
    textColor: "text-white",
    badgeBg: "bg-white",
    badgeText: "text-black",
    image: tokyoBrowserWindow,
  },
  {
    id: 9,
    title: "Web Design",
    subtitle: "Creative UI/UX",
    description:
      "Engaging and user-centric web design to elevate your brand and user experience.",
    bgColor: "bg-white",
    textColor: "text-black",
    badgeBg: "bg-[#e14242]",
    badgeText: "text-white",
    image: tokyoMessenger,
  },
  {
    id: 10,
    title: "Web Development",
    subtitle: "Robust Platforms",
    description:
      "Modern, scalable web development solutions for businesses of all sizes.",
    bgColor: "bg-grey",
    textColor: "text-black",
    badgeBg: "bg-[#e14242]",
    badgeText: "text-white",
    image: tokyoBrowserWindow,
  },
];

const Services = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-white overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-[100px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10 mb-10 md:mb-14">
          <div className="inline-flex flex-col items-start">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#e14242] rounded-[10px]">
              <h2 className="text-white text-2xl font-bold">Services</h2>
            </div>
          </div>
          <p className="md:max-w-[580px] text-black text-base sm:text-lg md:text-xl font-normal">
            We help startups and enterprises design, build, and grow impactful
            digital products from branding to AI-driven marketing.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 xl:gap-12">
          {services.map((service, idx) => {
            const borderClass =
              service.bgColor === "bg-dark" ||
              service.bgColor === "bg-[#e14242]"
                ? "border-b-4 border-white"
                : "border-b-4 border-black";
            return (
              <div
                key={service.id}
                className={`group p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-[28px] lg:rounded-[36px] ${borderClass} border-solid shadow-2xl hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.18)] transition-all duration-300 ${service.bgColor} ${service.textColor} relative overflow-hidden`}
              >
                {/* Animated Accent Blob */}
                <div
                  className={`absolute -top-8 -right-8 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full blur-2xl z-0 transition-all duration-300 ${
                    service.bgColor === "bg-white"
                      ? "bg-[#e14242]/10 group-hover:bg-[#e14242]/30"
                      : "bg-black/10 group-hover:bg-black/20"
                  }`}
                ></div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 h-full relative z-10">
                  {/* Left - Text */}
                  <div className="w-full sm:w-1/2 flex flex-col justify-start gap-2 sm:gap-3">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span
                        className={`px-3 py-1 rounded-[7px] text-xs font-semibold ${service.badgeBg} ${service.badgeText} shadow`}
                      >
                        {service.title}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-[7px] text-xs font-semibold ${service.badgeBg} ${service.badgeText} shadow`}
                      >
                        {service.subtitle}
                      </span>
                    </div>
                    <p className="text-sm md:text-base mb-2">
                      {service.description}
                    </p>
                    <Link
                      href="/services"
                      className="group inline-flex items-center mt-2 text-sm md:text-base font-semibold"
                    >
                      <span className="text-gray-600 bg-clip-text bg-gradient-to-r from-[#e14242] to-[#f97316] inline-block">
                        Learn More
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600 group-hover:translate-x-1 transition-all duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5-5 5M6 12h12"
                        />
                      </svg>
                    </Link>
                  </div>
                  {/* Right - Image */}
                  <div className="w-full sm:w-1/2 flex justify-center items-center mt-4 sm:mt-0">
                    <div className="w-full h-auto max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[320px] xl:max-w-[380px] 2xl:max-w-[420px] relative aspect-[5/4]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300 bg-white rounded-2xl"
                        priority={idx === 0}
                        sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 260px, (max-width: 1280px) 320px, (max-width: 1536px) 380px, 420px"
                      />
                    </div>
                  </div>
                </div>
                {/* Glow effect on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl md:rounded-[28px] lg:rounded-[36px] opacity-0 group-hover:opacity-100 transition duration-300"
                  style={{
                    boxShadow: "0 0 0 8px #00000022, 0 8px 32px 0 #00000022",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative mt-24 bg-grey rounded-[45px] px-6 py-20 md:px-16 overflow-visible border-b-4 border-black">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 relative z-10">
            {/* Left - Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s make things happen
              </h3>
              <p className="text-base mb-6 py-2">
                Reach out and explore how we can help your business grow with
                tailored strategies and expert execution.
              </p>
              <Link href="/contact">
              <button className="bg-dark text-white px-6 py-3 rounded-xl hover:bg-[#e14242] transition-colors">
                Get your free proposal
              </button>
              </Link>
            </div>
          
            {/* Right - Empty space for positioning */}
            <div className="w-full md:w-1/2" />
          </div>

          {/* Positioned Image (hidden on mobile/tablet) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 z-0 hidden lg:block">
            <Image
              src={ctabg}
              alt="CTA Graphic"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
