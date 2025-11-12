import React from "react";
import Link from "next/link";

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
    title: "Healthcare",
    subtitle: "Industries",
    description: "HIPAA‑ready patient apps, EHR integrations, telehealth, and analytics that improve outcomes.",
    bgColor: "bg-white",
    textColor: "text-black",
    badgeBg: "bg-[#e14242]",
    badgeText: "text-white",
    image: tokyoMagnifier,
  },
  {
    id: 2,
    title: "Banking & Financial",
    subtitle: "Services",
    description: "Bank‑grade platforms, KYC/AML, risk engines, and real‑time payments built for scale.",
    bgColor: "bg-[#e14242]",
    textColor: "text-white",
    badgeBg: "bg-white",
    badgeText: "text-black",
    image: tokyoMagnifier,
  },
  {
    id: 3,
    title: "Manufacturing",
    subtitle: "Industry",
    description: "Smart factory dashboards, MES/ERP integrations, and predictive maintenance with IoT.",
    bgColor: "bg-black",
    textColor: "text-white",
    badgeBg: "bg-white",
    badgeText: "text-black",
    image: tokyoBrowserWindow,
  },
  {
    id: 4,
    title: "Technology",
    subtitle: "Solution",
    description: "Cloud‑native platforms, APIs, and AI copilots that accelerate product velocity.",
    bgColor: "bg-white",
    textColor: "text-black",
    badgeBg: "bg-[#e14242]",
    badgeText: "text-white",
    image: tokyoMessenger,
  },
  {
    id: 5,
    title: "Transportation",
    subtitle: "Industry",
    description: "Routing, fleet tracking, and warehouse automation to cut costs and delays.",
    bgColor: "bg-[#e14242]",
    textColor: "text-white",
    badgeBg: "bg-white",
    badgeText: "text-black",
    image: tokyoMessenger,
  },
  {
    id: 6,
    title: "Telecom",
    subtitle: "Industry",
    description: "5G provisioning, OSS/BSS modernization, and subscriber experience platforms.",
    bgColor: "bg-black",
    textColor: "text-white",
    badgeBg: "bg-white",
    badgeText: "text-black",
    image: tokyoBrowserWindow,
  },
];

const Industries = () => {
  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-br from-white via-zinc-50 to-white relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#e14242]/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-[#e14242]/20 rounded-full blur-3xl z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 mb-14">
          <div className="inline-flex flex-col items-start">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#e14242] rounded-[10px] shadow">
              <h2 className="text-white text-2xl font-bold tracking-tight">Industries</h2>
            </div>
          </div>
          <p className="md:max-w-[580px] text-black text-lg md:text-xl font-normal">
            We deliver sector‑specific software and digital solutions—strategy, design, engineering, and growth—for startups and enterprises.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => {
            // Use white border for black cards, black border for others
            const borderClass =
              service.bgColor === "bg-black"
                ? "border-b-4 border-white"
                : "border-b-4 border-black";
            return (
              <div
                key={service.id}
                className={`group p-8 rounded-[36px] ${borderClass} border-solid shadow-2xl hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.18)] transition-all duration-300 ${service.bgColor} ${service.textColor} relative overflow-hidden`}
              >
                {/* Animated Accent Blob */}
                <div className={`absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl z-0 transition-all duration-300 ${idx % 2 === 0 ? "bg-[#e14242]/10 group-hover:bg-[#e14242]/30" : "bg-black/10 group-hover:bg-black/20"}`}></div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 h-full relative z-10">
                  {/* Left - Text */}
                  <div className="w-full sm:w-1/2 flex flex-col justify-start gap-3">
                    <div className="flex gap-2 mb-2">
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
                    <p className="text-base mb-2">{service.description}</p>
                    <Link
                      href="/services"
                      className="group inline-flex items-center mt-2 text-base font-semibold"
                    >
                      <span className="mr-2 group-hover:underline transition-colors">Learn more</span>
                      <div className="w-8 h-8 bg-dark rounded-full flex items-center justify-center group-hover:bg-[#e14242] transition-colors">
                        <img src={arrow1} alt="Arrow" className="w-4 h-4" />
                      </div>
                    </Link>
                  </div>

                  {/* Right - Image only */}
                  <div className="w-full sm:w-1/2 flex flex-col items-center justify-center gap-4">
                    <div className="flex items-center justify-center mb-2">
                      <span className="inline-flex items-center justify-center rounded-2xl bg-white shadow-lg p-0">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="max-w-[120px] h-auto object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                {/* Glow effect on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-[36px] opacity-0 group-hover:opacity-100 transition duration-300" style={{ boxShadow: "0 0 0 8px #00000022, 0 8px 32px 0 #00000022" }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;