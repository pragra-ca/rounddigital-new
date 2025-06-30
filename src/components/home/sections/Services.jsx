import React from "react";
import {
  CodeBracketIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import ctabg from "@/assets/home/ctabg.png";
import Image from "next/image";

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
    title: "Web Development",
    subtitle: "Custom Websites",
    description: "Fast, scalable websites tailored to your brand.",
    bgColor: "bg-white",
    textColor: "text-black",
    badgeBg: "bg-[#e14242]",
    badgeText: "text-white",
    image: tokyoBrowserWindow,
    icon: <CodeBracketIcon className="h-8 w-8 text-red-500" />,
  },
  {
    id: 2,
    title: "SEO Services",
    subtitle: "Boost Rankings",
    description: "Optimize your site to rank higher on search engines.",
    bgColor: "bg-grey",
    textColor: "text-black",
    badgeBg: "bg-[#e14242]",
    badgeText: "text-white",
    image: tokyoMagnifier,
    icon: <MagnifyingGlassIcon className="h-8 w-8 text-red-500" />,
  },
  {
    id: 3,
    title: "PPC Campaigns",
    subtitle: "Drive Leads",
    description: "Ads that convert. Maximize ROI with smart targeting.",
    bgColor: "bg-[#e14242]",
    textColor: "text-white",
    badgeBg: "bg-white",
    badgeText: "text-black",
    image: tokyoMessenger,
    icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />,
  },
  {
    id: 4,
    title: "Social Media",
    subtitle: "Brand Growth",
    description: "Build your presence on all major platforms.",
    bgColor: "bg-dark",
    textColor: "text-white",
    badgeBg: "bg-white",
    badgeText: "text-black",
    image: tokyoBrowserWindow,
    icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />,
  },
  {
    id: 5,
    title: "Workforce",
    subtitle: "Smart Hiring",
    description: "Flexible hiring solutions for business success.",
    bgColor: "bg-[#e14242]",
    textColor: "text-white",
    badgeBg: "bg-white",
    badgeText: "text-black",
    image: tokyoMessenger,
    icon: <LightBulbIcon className="h-8 w-8 text-white" />,
  },
  {
    id: 6,
    title: "Talent Factory",
    subtitle: "Top Talent",
    description: "Build high-performance teams quickly.",
    bgColor: "bg-white",
    textColor: "text-black",
    badgeBg: "bg-[#e14242]",
    badgeText: "text-white",
    image: tokyoMagnifier,
    icon: <LightBulbIcon className="h-8 w-8 text-red-500" />,
  },
];

const Services = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 mb-12">
          <div className="inline-flex flex-col items-start">
            <div className="inline-flex items-center gap-2.5 px-2 py-1 bg-[#e14242] rounded-[7px]">
              <h2 className="text-white text-2xl font-bold">Services</h2>
            </div>
          </div>
          <p className="md:max-w-[580px] text-black text-lg md:text-xl font-normal">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`p-6 rounded-[30px] border-2 border-black shadow-[0_5px_0_#191a23] ${service.bgColor} ${service.textColor}`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 h-full">
                {/* Left - Text */}
                <div className="w-full sm:w-1/2 flex flex-col justify-start gap-2">
                  <div className="flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-[7px] text-xs font-semibold ${service.badgeBg} ${service.badgeText}`}
                    >
                      {service.title}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-[7px] text-xs font-semibold ${service.badgeBg} ${service.badgeText}`}
                    >
                      {service.subtitle}
                    </span>
                  </div>
                  <p className="text-sm">{service.description}</p>
                  <Link
                    href={`/services#${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="group inline-flex items-center mt-2 text-sm font-medium"
                  >
                    <span className="mr-2 group-hover:underline">
                      Learn more
                    </span>
                    <div className="w-8 h-8 bg-dark rounded-full flex items-center justify-center group-hover:bg-[#e14242] transition-colors">
                      <img src={arrow1} alt="Arrow" className="w-4 h-4" />
                    </div>
                  </Link>
                </div>

                {/* Right - Image */}
                <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="max-w-[140px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative mt-24 bg-grey rounded-[45px] px-6 py-20 md:px-16 overflow-visible">
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
              <button className="bg-dark text-white px-6 py-3 rounded-xl hover:bg-[#e14242] transition-colors">
                Get your free proposal
              </button>
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
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
