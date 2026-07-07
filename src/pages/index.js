import Link from "next/link";
import SfLayout from "@/components/sf/Layout";
import Seo from "@/components/seo";
import {
  Chip,
  CountUp,
  Eyebrow,
  LiveTicker,
  Marquee,
  PillLink,
  SectionHead,
  SignalCore,
  SplitWords,
} from "@/components/sf/ui";

const PLATFORMS = [
  { name: "AWS" },
  { name: "Microsoft Azure" },
  { name: "Google Cloud" },
  { name: "OpenAI", accent: true },
  { name: "Anthropic", accent: true },
  { name: "MongoDB" },
  { name: "Docker" },
  { name: "Kubernetes" },
  { name: "Terraform" },
];

const STATS = [
  { value: "100+", label: "Projects delivered" },
  { value: "50+", label: "Happy clients" },
  { value: "98%", label: "Client satisfaction" },
  { value: "20+", label: "Expert consultants" },
];

const SERVICES = [
  {
    tag: "INTELLIGENT AUTOMATION",
    title: "AI Agent Development",
    desc: "Custom agents that automate complex workflows, enhance decisions, and run while you sleep.",
    href: "/services/ai-machine-learning",
    featured: true,
  },
  {
    tag: "EMBED INTELLIGENCE",
    title: "AI Product Integration",
    desc: "Machine learning, NLP and computer vision wired straight into your existing products.",
    href: "/services/ai-machine-learning",
  },
  {
    tag: "ENTERPRISE PROTECTION",
    title: "Cybersecurity",
    desc: "Advanced threat detection, compliance management, and proactive security that never sleeps.",
    href: "/services/cybersecurity",
  },
  {
    tag: "SCALABLE INFRASTRUCTURE",
    title: "Cloud Solutions",
    desc: "Cloud-native architecture, migration and optimization across AWS, Azure and Google Cloud.",
    href: "/services/cloud-solutions",
  },
  {
    tag: "TAILORED SOLUTIONS",
    title: "Custom Software",
    desc: "Enterprise-grade software designed for your business needs on modern tech stacks.",
    href: "/services/custom-software",
  },
  {
    tag: "MODERNIZE OPERATIONS",
    title: "Digital Transformation",
    desc: "Strategic consulting to modernize legacy systems and adopt cutting-edge technologies.",
    href: "/services/digital-transformation",
  },
];

const CASE_STUDIES = [
  {
    id: "CASE 01",
    title: "AI customer service automation for a global retailer",
    desc: "Intelligent agents handling 10,000+ daily inquiries across channels, with NLP-driven personalization and seamless human escalation.",
    stats: [
      { value: "−75%", label: "response time" },
      { value: "10k+", label: "daily inquiries" },
    ],
    href: "/works/ai-customer-service-automation",
  },
  {
    id: "CASE 02",
    title: "Digital transformation of legacy banking systems",
    desc: "50+ legacy applications migrated to cloud-native microservices for a multinational bank — with zero downtime.",
    stats: [
      { value: "−60%", label: "ops costs" },
      { value: "3×", label: "performance" },
    ],
    href: "/works/banking-digital-transformation",
  },
  {
    id: "CASE 03",
    title: "Intelligent document processing with AI agents",
    desc: "Automated invoice extraction and verification for a Fortune 500 — 100,000+ documents processed monthly at 98% accuracy.",
    stats: [
      { value: "$2M", label: "saved annually" },
      { value: "−90%", label: "manual work" },
    ],
    href: "/works/ai-document-processing",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-[66px] pt-16 sm:px-8 lg:px-11 lg:pt-[88px]">
      <SignalCore />
      <div className="relative mx-auto flex max-w-[1240px] flex-col items-center gap-7 text-center">
        <Eyebrow data-reveal>AI · CLOUD · CYBER · CODE</Eyebrow>
        <h1 className="m-0 max-w-[15ch] text-[44px] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-[58px] lg:text-[74px]">
          <SplitWords text="Your unfair advantage is" accent="agentic." />
        </h1>
        <p
          data-reveal
          data-reveal-delay="0.16"
          className="m-0 max-w-[52ch] text-[16px] leading-[1.6] sm:text-[17px]"
          style={{ color: "var(--sf-muted)" }}
        >
          We turn ambitious ideas into battle-ready tech — AI agents, ironclad security,
          and software that ships fast. Engineered in Toronto, Dallas and Pune for
          enterprises worldwide.
        </p>
        <div data-reveal data-reveal-delay="0.24" className="flex flex-wrap justify-center gap-[14px]">
          <PillLink href="/contact" size="lg">
            Let&apos;s talk strategy →
          </PillLink>
          <PillLink href="#case-studies" variant="ghost" size="lg">
            See what we build
          </PillLink>
        </div>
        <div data-reveal data-reveal-delay="0.34" className="mt-2">
          <LiveTicker />
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  return (
    <section className="px-5 py-[26px] sm:px-8 lg:px-11" style={{ borderTop: "1px solid var(--sf-border)" }}>
      <div className="mx-auto max-w-[1240px]">
        <div
          data-reveal
          className="sf-sora mb-[18px] text-center text-[11px] font-semibold tracking-[0.18em]"
          style={{ color: "var(--sf-faint)" }}
        >
          BUILT WITH PLATFORMS INDUSTRY LEADERS RELY ON
        </div>
        <div data-reveal data-reveal-delay="0.08">
          <Marquee>
            {PLATFORMS.map((platform) => (
              <Chip key={platform.name} accent={platform.accent}>
                {platform.name}
              </Chip>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section
      className="grid grid-cols-2 gap-px lg:grid-cols-4"
      style={{
        backgroundColor: "var(--sf-border)",
        borderTop: "1px solid var(--sf-border)",
        borderBottom: "1px solid var(--sf-border)",
      }}
    >
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="px-7 py-7 transition-colors duration-[450ms]"
          style={{ backgroundColor: "var(--sf-bg)" }}
        >
          <div
            className="sf-sora text-[28px] font-extrabold sm:text-[34px]"
            style={{ color: "var(--sf-accent)" }}
          >
            <CountUp value={stat.value} />
          </div>
          <div className="text-[13px]" style={{ color: "var(--sf-faint)" }}>
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
}

function Services() {
  return (
    <section className="px-5 pb-[60px] pt-[70px] sm:px-8 lg:px-11">
      <div className="mx-auto max-w-[1240px]">
        <div data-reveal>
          <SectionHead
            eyebrow="Our services"
            title="Enterprise solutions for modern businesses"
            action={
              <Link
                href="/services"
                className="sf-sora whitespace-nowrap text-[13px] font-semibold transition-colors hover:opacity-80"
                style={{ color: "var(--sf-accent)" }}
              >
                All services →
              </Link>
            }
          />
        </div>
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Link
              key={service.title}
              href={service.href}
              data-reveal
              data-reveal-delay={`${(i % 3) * 0.08}`}
              className="sf-card sf-card-hover group flex flex-col gap-[11px] p-7"
              style={
                service.featured
                  ? {
                      borderColor: "var(--sf-accent-border)",
                      backgroundImage:
                        "linear-gradient(160deg, var(--sf-accent-soft), transparent 55%)",
                      boxShadow: "0 0 30px var(--sf-accent-soft)",
                    }
                  : undefined
              }
            >
              <span
                className="sf-mono text-[11px] font-medium tracking-[0.12em]"
                style={{ color: "var(--sf-accent)" }}
              >
                {service.tag}
              </span>
              <span className="sf-sora text-[20px] font-bold">{service.title}</span>
              <span className="text-[14px] leading-[1.55]" style={{ color: "var(--sf-muted)" }}>
                {service.desc}
              </span>
              <span
                className="sf-sora mt-auto text-[13px] font-semibold transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: "var(--sf-accent)" }}
              >
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="scroll-mt-24 px-5 py-[60px] sm:px-8 lg:px-11"
      style={{ borderTop: "1px solid var(--sf-border)" }}
    >
      <div className="mx-auto max-w-[1240px]">
        <div data-reveal>
          <SectionHead eyebrow="Case studies" title="Real outcomes from complex transformations" />
        </div>
        <div className="flex flex-col gap-[18px]">
          {CASE_STUDIES.map((cs, i) => (
            <Link
              key={cs.id}
              href={cs.href}
              data-reveal
              data-reveal-delay={`${i * 0.08}`}
              className="sf-card sf-card-hover grid grid-cols-1 items-center gap-5 p-8 lg:grid-cols-[110px_1fr_300px] lg:gap-[30px]"
            >
              <span className="sf-mono text-[12px] font-medium" style={{ color: "var(--sf-faint)" }}>
                {cs.id}
              </span>
              <div className="flex flex-col gap-2">
                <span className="sf-sora text-[18px] font-bold sm:text-[21px]">{cs.title}</span>
                <span className="text-[14px] leading-[1.55]" style={{ color: "var(--sf-muted)" }}>
                  {cs.desc}
                </span>
              </div>
              <div className="flex gap-[26px] lg:justify-end">
                {cs.stats.map((stat) => (
                  <div key={stat.label} className="lg:text-right">
                    <div
                      className="sf-sora text-[26px] font-extrabold sm:text-[30px]"
                      style={{ color: "var(--sf-accent)" }}
                    >
                      <CountUp value={stat.value} />
                    </div>
                    <div className="text-[12px]" style={{ color: "var(--sf-faint)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="px-5 pb-[60px] pt-5 sm:px-8 lg:px-11">
      <div
        data-reveal
        className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[22px] px-6 py-[60px] text-center sm:px-[50px]"
        style={{
          border: "1px solid var(--sf-accent-border)",
          backgroundImage:
            "radial-gradient(ellipse at 50% 120%, var(--sf-accent-glow), transparent 65%)",
        }}
      >
        <Eyebrow className="mb-[14px]">Ready to get started?</Eyebrow>
        <h2 className="m-0 mb-[14px] text-[30px] font-bold leading-[1.12] tracking-[-0.025em] sm:text-[40px]">
          Let&apos;s build something extraordinary together
        </h2>
        <p
          className="mx-auto mb-7 mt-0 max-w-[52ch] text-[16px] leading-[1.6]"
          style={{ color: "var(--sf-muted)" }}
        >
          Partner with us to transform your vision into reality with cutting-edge technology
          and expert execution.
        </p>
        <div className="flex flex-wrap justify-center gap-[14px]">
          <PillLink href="/contact" size="lg">
            Get a free consultation
          </PillLink>
          <PillLink href="/industries" variant="ghost" size="lg">
            View industries
          </PillLink>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <SfLayout>
      <Seo
        title="AI Agent Development & Enterprise IT Services"
        description="RoundDigital builds production AI agents, secure cloud platforms and custom software for enterprises. Senior teams in Toronto, Dallas and Pune. Book a free strategy call."
        keywords="AI agent development company, enterprise IT services, AI development, cybersecurity, cloud solutions, custom software development, digital transformation, Toronto, Dallas"
      />
      <Hero />
      <Platforms />
      <Stats />
      <Services />
      <CaseStudies />
      <Cta />
    </SfLayout>
  );
}
