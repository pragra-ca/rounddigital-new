import Link from "next/link";
import React from "react";
import {
  SparklesIcon,
  BoltIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import AnimatedHeroCopy from "./AnimatedHeroCopy";

const capabilities = [
  "Agents that ship, not slide decks",
  "AI wired straight into your product",
  "Workflows that run while you sleep",
];

const avatars = [
  { initials: "AS", color: "from-rose-400 to-primary" },
  { initials: "SC", color: "from-violet-400 to-indigo-500" },
  { initials: "JM", color: "from-emerald-400 to-teal-500" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50/80 to-white">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] rounded-full bg-primary/[0.07] blur-[100px] animate-pulse" style={{ animationDuration: "6s" }} />
      <div className="absolute bottom-[-15%] left-[-8%] w-[480px] h-[480px] rounded-full bg-ink/[0.04] blur-[90px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-green/[0.03] blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="pt-4 pb-12 md:pt-6 md:pb-16 lg:pt-8 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl lg:max-w-none">
              <AnimatedHeroCopy />

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Let&apos;s Talk Strategy
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-ink font-semibold rounded-xl border-2 border-slate-200 hover:border-primary/40 hover:text-primary shadow-sm hover:shadow-md transition-all duration-300"
                >
                  See What We Build
                </Link>
              </div>

              <div className="flex items-center gap-5 pt-8">
                <div className="flex -space-x-3">
                  {avatars.map((avatar, i) => (
                    <div
                      key={avatar.initials}
                      className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatar.color} border-[3px] border-white flex items-center justify-center text-xs font-bold text-white shadow-md`}
                      style={{ zIndex: avatars.length - i }}
                    >
                      {avatar.initials}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">100+ projects. Zero excuses.</p>
                  <p className="text-xs text-slate-500">Teams that bet on us, win.</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[520px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />

              <div className="absolute top-0 right-0 w-[340px] bg-white rounded-2xl shadow-[0_20px_60px_-12px_rgba(25,26,35,0.18)] border border-slate-100/80 p-7 transform rotate-[3deg] hover:rotate-0 transition-transform duration-500 ease-out z-20 animate-float">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.02] to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[#ff6a6a] flex items-center justify-center mb-5 shadow-lg shadow-primary/30">
                    <SparklesIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">Brains Behind the Bots</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    Smart automation and sharp insights — built to move your business forward, not just look good in a deck.
                  </p>
                  <ul className="space-y-2.5">
                    {capabilities.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <span className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_8px_rgba(185,255,102,0.6)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute bottom-4 left-0 w-[300px] rounded-2xl bg-gradient-to-br from-ink via-[#22232e] to-[#2a2b35] p-7 text-white shadow-[0_24px_48px_-8px_rgba(0,0,0,0.4)] transform -rotate-[3deg] hover:rotate-0 transition-transform duration-500 ease-out z-10 border border-white/[0.06]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-400">The win rate</span>
                    <BoltIcon className="w-4 h-4 text-brand-green" />
                  </div>
                  <p className="text-4xl font-bold mb-4 tracking-tight">98%</p>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-6">
                    <div className="h-full w-[98%] bg-gradient-to-r from-primary to-primary-light rounded-full shadow-[0_0_12px_rgba(225,66,66,0.5)] animate-pulse" style={{ animationDuration: "3s" }} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl font-bold">100+</p>
                      <p className="text-xs text-slate-400 mt-0.5">Projects</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">20+</p>
                      <p className="text-xs text-slate-400 mt-0.5">Experts</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-36 right-16 px-4 py-2 bg-primary rounded-lg shadow-lg shadow-primary/40 z-30 animate-float" style={{ animationDelay: "1s" }}>
                <p className="text-xs font-bold text-white tracking-wide">Always On. Always Ahead.</p>
              </div>

              <div className="absolute top-44 left-8 px-3 py-1.5 bg-white/90 backdrop-blur border border-slate-200 rounded-lg shadow-md z-30 flex items-center gap-1.5 animate-float" style={{ animationDelay: "2s" }}>
                <ShieldCheckIcon className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-semibold text-slate-600">Locked. Loaded. Secure.</span>
              </div>
            </div>

            <div className="lg:hidden grid grid-cols-3 gap-3">
              {[
                { value: "100+", label: "Projects" },
                { value: "98%", label: "Success" },
                { value: "20+", label: "Experts" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-white border border-slate-100 p-4 text-center shadow-sm">
                  <p className="text-xl font-bold text-primary">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
