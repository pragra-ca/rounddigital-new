import React from "react";
import Image from "next/image";
import mobile from "@/assets/about/mobile.png";

export default function AboutSection() {
  return (
    <section className="relative w-full mt-12 overflow-hidden bg-gradient-to-b from-[#0b0b0c] to-[#121216]">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#e14242]/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-6rem] h-[24rem] w-[24rem] rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent" />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
          <div className="h-full w-full" style={{backgroundImage:"linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize:"40px 40px"}} />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-4">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
          {/* Left: Bold headline and CTAs */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e14242]" />
              About RoundDigital
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-white">
              We build secure, scalable
              <span className="block bg-gradient-to-r from-[#ff6a6a] via-[#e14242] to-rose-400 bg-clip-text text-transparent py-3">digital products</span>
            </h1>
            <span className="mt-4 inline-block h-1 w-24 rounded-full bg-gradient-to-r from-[#e14242] to-rose-400" />
            <p className="mt-5 max-w-xl text-base md:text-lg text-zinc-300">
              A senior team of designers and engineers helping companies launch fast, scale safely, and ship quality across web and mobile.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                aria-label="Book a call on the contact page"
                className="inline-flex items-center justify-center rounded-full bg-[#e14242] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(225,66,66,0.35)] transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e14242] focus-visible:ring-offset-[#101014]"
              >
                Book a Call
              </a>
              <a
                href="/services"
                aria-label="Explore our services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/30 focus-visible:ring-offset-[#101014]"
              >
                Explore Services
              </a>
            </div>
            <p className="mt-2 text-xs text-white/60">Fast response — within 24 hours</p>

            {/* Feature chips */}
            <div className="mt-6 flex flex-wrap gap-3 text-white/90">
              {[
                'Cybersecurity-first',
                'Cloud-native',
                'Enterprise-grade'
              ].map((label) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-[#ff6a6a]"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-7.5 9.5a.75.75 0 01-1.127.05l-3.5-3.75a.75.75 0 111.1-1.02l2.9 3.109 6.988-8.852a.75.75 0 011.052-.089z" clipRule="evenodd" /></svg>
                  {label}
                </span>
              ))}
            </div>

            {/* Stat strip */}
            <div className="mt-10 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="grid grid-cols-3 items-center text-white/90">
                <div className="pr-6">
                  <div className="text-3xl font-extrabold">70+</div>
                  <div className="text-sm text-zinc-300">Projects Delivered</div>
                </div>
                <div className="border-l border-white/10 px-6">
                  <div className="text-3xl font-extrabold">10yr</div>
                  <div className="text-sm text-zinc-300">Experience</div>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <div className="text-3xl font-extrabold">98%</div>
                  <div className="text-sm text-zinc-300">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Logos row */}
            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-wider text-white/60">Trusted by</p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {['Acme', 'TechNova', 'CloudHub', 'FinEdge', 'HealthPlus'].map((brand) => (
                  <span key={brand} className="text-sm font-semibold uppercase tracking-wider text-white/85">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Premium mockup card with glow */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* Glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-gradient-to-tr from-[#e14242]/25 via-rose-400/10 to-transparent blur-2xl" />
            <div className="relative rounded-[22px] border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition hover:shadow-[0_32px_100px_rgba(225,66,66,0.20)]">
              {/* Mock browser header */}
              <div className="mb-3 flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/30 ring-1 ring-white/10">
                <Image src={mobile} alt="Product preview" priority className="h-full w-full object-contain" />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-white/90 backdrop-blur shadow-md">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#e14242]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-white"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-7.5 9.5a.75.75 0 01-1.127.05l-3.5-3.75a.75.75 0 111.1-1.02l2.9 3.109 6.988-8.852a.75.75 0 011.052-.089z" clipRule="evenodd" /></svg>
              </span>
              <div>
                <div className="text-xs font-semibold">Trusted by teams</div>
                <div className="text-[11px] text-white/70">Security-first delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curved divider */}
      <div className="pointer-events-none relative -mb-px mt-6 text-white/5">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="h-12 w-full">
          <path d="M0,64 C240,16 480,16 720,48 C960,80 1200,80 1440,48 L1440,80 L0,80 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Scroll cue */}
      <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-4">
        <a href="/about#overview" className="group inline-flex flex-col items-center text-white/50 hover:text-white/80">
          <span className="text-[11px]">Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition group-hover:translate-y-0.5"><path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v9.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3.75A.75.75 0 0110 3z" clipRule="evenodd" /></svg>
        </a>
      </div>
    </section>
  );
}
