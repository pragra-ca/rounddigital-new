import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  ShieldCheckIcon,
  CpuChipIcon,
  CloudIcon,
  CodeBracketIcon,
  SparklesIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    id: 1,
    title: "AI Agent Development",
    subtitle: "Intelligent Automation",
    description:
      "Build custom AI agents that automate complex workflows, enhance decision-making, and drive business efficiency.",
    icon: SparklesIcon,
    slug: "/services/ai-machine-learning",
  },
  {
    id: 2,
    title: "AI Product Integration",
    subtitle: "Embed Intelligence",
    description:
      "Seamlessly integrate AI capabilities into your existing products with machine learning, NLP, and computer vision.",
    icon: CpuChipIcon,
    slug: "/services/ai-machine-learning",
  },
  {
    id: 3,
    title: "Cybersecurity",
    subtitle: "Enterprise Protection",
    description:
      "Advanced threat detection, compliance management, and proactive security solutions to safeguard your business.",
    icon: ShieldCheckIcon,
    slug: "/services/cybersecurity",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    subtitle: "Scalable Infrastructure",
    description:
      "Cloud-native architecture, migration services, and optimization for AWS, Azure, and Google Cloud Platform.",
    icon: CloudIcon,
    slug: "/services/cloud-solutions",
  },
  {
    id: 5,
    title: "Custom Software Development",
    subtitle: "Tailored Solutions",
    description:
      "Enterprise-grade software designed specifically for your business needs with modern tech stacks.",
    icon: CodeBracketIcon,
    slug: "/services/custom-software",
  },
  {
    id: 6,
    title: "Digital Transformation",
    subtitle: "Modernize Operations",
    description:
      "Strategic consulting and implementation to modernize legacy systems and adopt cutting-edge technologies.",
    icon: RocketLaunchIcon,
    slug: "/services/digital-transformation",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <SectionHeader
          eyebrow="Our Services"
          title="Enterprise solutions for"
          highlight="modern businesses"
          description="From AI-powered automation to enterprise security, we deliver comprehensive IT solutions that transform businesses and drive growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group card-surface p-7 hover:-translate-y-1 hover:border-primary/20"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                  {service.subtitle}
                </p>
                <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-5">
                  {service.description}
                </p>
                <Link
                  href={service.slug}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-ink to-[#2a2b35]">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />

          <div className="relative z-10 px-8 py-14 md:px-14 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="section-eyebrow !bg-white/10 !border-white/10">
                  <span className="section-eyebrow-dot" />
                  <span className="text-sm font-medium text-white">Ready to get started?</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Let&apos;s build something
                  <span className="block text-primary-light">extraordinary together</span>
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                  Partner with us to transform your vision into reality with cutting-edge technology and expert execution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary">
                    Get Free Consultation
                  </Link>
                  <Link
                    href="/industries"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Industries
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "100+", label: "Projects" },
                  { value: "98%", label: "Success Rate" },
                  { value: "24/7", label: "Support" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-4 py-5 text-center"
                  >
                    <p className="text-2xl md:text-3xl font-bold text-white">{item.value}</p>
                    <p className="text-xs text-slate-400 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
