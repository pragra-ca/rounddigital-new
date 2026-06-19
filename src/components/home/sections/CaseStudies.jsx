import Link from "next/link";
import React from "react";
import { caseStudies } from "@/data/caseStudies";
import SectionHeader from "@/components/ui/SectionHeader";

const CaseStudies = () => {
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <SectionHeader
          align="left"
          eyebrow="Case Studies"
          title="Real outcomes from"
          highlight="complex transformations"
          description="Discover how we've helped businesses modernize infrastructure, strengthen security, and accelerate growth with AI and digital transformation."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCaseStudies.map((study, index) => (
            <article
              key={study.id}
              className="group relative rounded-2xl bg-gradient-to-br from-ink to-[#2a2b35] p-8 text-white shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors" />
              <div className="relative z-10">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-light mb-4">
                  Case {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold leading-snug mb-4">{study.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-4 mb-6">
                  {study.description}
                </p>
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary-light transition-colors"
                >
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
