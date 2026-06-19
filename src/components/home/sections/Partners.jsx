import React from "react";
import Image from "next/image";
import { partners } from "@/data/partners";
import SectionHeader from "@/components/ui/SectionHeader";

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "20+", label: "Expert Consultants" },
  { value: "98%", label: "Client Satisfaction" },
];

const Partners = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="section-container">
        <SectionHeader
          eyebrow="Trusted Partners"
          title="Built with platforms"
          highlight="industry leaders rely on"
          description="We design and deliver solutions on proven cloud, AI, and infrastructure ecosystems."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group card-surface px-4 py-6 min-h-[130px] flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:border-primary/20 hover:shadow-glow transition-all duration-300"
              title={partner.name}
            >
              <div className="relative w-full h-12 md:h-14 flex items-center justify-center mb-3">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={140}
                  height={56}
                  className="max-h-10 md:max-h-12 w-auto object-contain grayscale-[30%] group-hover:grayscale-0 opacity-90 group-hover:opacity-100 transition-all duration-300"
                  unoptimized
                />
              </div>
              <p className="text-xs font-medium text-slate-500 group-hover:text-primary transition-colors leading-snug">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-slate-200">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
