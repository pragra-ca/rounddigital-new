"use client";

import { useEffect, useState } from "react";

const heroSlides = [
  {
    tag: "AI · Cloud · Cyber · Code",
    prefix: "Don't just keep up.",
    highlight: "Lead the pack.",
    subtext:
      "We turn ambitious ideas into battle-ready tech — AI agents, ironclad security, and software that ships fast.",
  },
  {
    tag: "Ship Fast · Scale Hard",
    prefix: "Stop dreaming it.",
    highlight: "Start building it.",
    subtext:
      "From prototype to production in weeks, not quarters — with engineers who've done it a hundred times.",
  },
  {
    tag: "Secure · Smart · Scalable",
    prefix: "Your competitors are moving.",
    highlight: "Move faster.",
    subtext:
      "Cloud-native architecture, bulletproof security, and AI that actually works in the real world.",
  },
  {
    tag: "Automate · Accelerate · Win",
    prefix: "Less manual grind.",
    highlight: "More momentum.",
    subtext:
      "Intelligent automation that frees your team to focus on what humans do best — invent and grow.",
  },
  {
    tag: "Built for Bold Teams",
    prefix: "Big vision?",
    highlight: "We've got the tech.",
    subtext:
      "Custom software, digital transformation, and AI integration — one partner, end to end.",
  },
];

const AnimatedHeroCopy = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((current) => (current + 1) % heroSlides.length);
        setAnimating(false);
      }, 450);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[index];

  const animClass = animating
    ? "opacity-0 translate-y-5 blur-[2px]"
    : "opacity-100 translate-y-0 blur-0";

  return (
    <div className="space-y-8">
      {/* Animated badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-full shadow-sm overflow-hidden">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        <span
          className={`text-sm font-medium text-slate-600 transition-all duration-500 ease-out ${animClass}`}
          key={`tag-${index}`}
        >
          {slide.tag}
        </span>
      </div>

      {/* Animated headline */}
      <div>
        <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-ink leading-[1.08] tracking-tight">
          <span
            className={`block transition-all duration-500 ease-out ${animClass}`}
            key={`prefix-${index}`}
          >
            {slide.prefix}
          </span>
          <span className="block mt-2 h-[1.15em] sm:h-[1.12em] md:h-[1.1em] relative overflow-hidden">
            <span
              className={`absolute inset-0 bg-gradient-to-r from-primary via-[#ff5a5a] to-primary-light bg-clip-text text-transparent hero-shimmer transition-all duration-500 ease-out ${animClass}`}
              key={`highlight-${index}`}
            >
              {slide.highlight}
            </span>
          </span>
        </h1>

        {/* Progress dots */}
        <div className="flex items-center gap-2 mt-6">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show headline ${i + 1}`}
              onClick={() => {
                if (i !== index) {
                  setAnimating(true);
                  setTimeout(() => {
                    setIndex(i);
                    setAnimating(false);
                  }, 300);
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index
                  ? "w-8 bg-primary shadow-[0_0_10px_rgba(225,66,66,0.45)]"
                  : "w-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animated subtext */}
      <p
        className={`text-lg md:text-xl text-slate-600 leading-relaxed transition-all duration-500 ease-out delay-75 ${animClass}`}
        key={`sub-${index}`}
      >
        {slide.subtext}
      </p>
    </div>
  );
};

export default AnimatedHeroCopy;
