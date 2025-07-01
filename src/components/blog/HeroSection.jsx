import React from "react";

export const HeroSection = () => (
  <section className="w-full bg-gradient-to-br from-white via-zinc-50 to-white border-b mt-12 py-12">
    <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-8 lg:gap-14">
      {/* Hero Image */}
      <div
        className="w-full md:w-1/2 flex justify-center md:justify-start"
        data-aos="fade-right"
        data-aos-duration="900"
      >
        <div className="relative w-full max-w-lg"> {/* Increased max-w for bigger image */}
          <img
            src="/images/hero.png"
            alt="Real Estate Conference"
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
          />
          {/* Decorative Accent */}
          <div className="hidden md:block absolute -top-8 -left-8 w-32 h-32 bg-[#dc2626]/20 rounded-full blur-2xl z-0" />
          <div className="hidden md:block absolute -bottom-8 -right-8 w-20 h-20 bg-[#dc2626]/10 rounded-full blur-2xl z-0" />
        </div>
      </div>

      {/* Text Content */}
      <div
        className="w-full md:w-1/2 flex flex-col justify-center"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <span className="inline-block text-xs sm:text-sm font-bold text-white bg-[#dc2626] px-5 py-1.5 rounded-full shadow tracking-widest uppercase w-fit mb-3 animate-fade-in">
          The Basics
        </span>

        <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-black font-playfair leading-tight text-zinc-900 animate-fade-in-up drop-shadow-sm">
          10 Must-Attend Real Estate Conferences <span className="text-[#dc2626]">+ Events in 2025</span>
        </h2>

        {/* Author Info */}
        <div className="flex items-center gap-4 pt-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <img
            src="/images/th.jpeg"
            className="w-12 h-12 rounded-full object-cover border-2 border-[#dc2626] shadow-lg"
            alt="Author"
          />
          <div className="flex flex-col">
            <span className="text-base font-semibold font-roboto text-zinc-800">Jolina Aliva</span>
            <span className="text-xs text-gray-500">March 4, 2025</span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-zinc-700 font-roboto leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Discover the top must-attend events in 2025 to network, gain industry insights,
          and stay ahead. Don’t miss these opportunities!
        </p>

        {/* CTA Link */}
        <a
          href="#"
          className="mt-7 inline-block text-base font-extrabold font-roboto text-[#dc2626] hover:underline hover:text-black transition-colors duration-200 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Keep reading →
        </a>
      </div>
    </div>
    {/* Animations (if not using AOS, add these keyframes to your CSS or Tailwind config) */}
    <style jsx>{`
      @keyframes fade-in {
        from { opacity: 0 }
        to { opacity: 1 }
      }
      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(30px);}
        to { opacity: 1; transform: translateY(0);}
      }
      .animate-fade-in { animation: fade-in 0.8s both; }
      .animate-fade-in-up { animation: fade-in-up 0.8s both; }
    `}</style>
  </section>
);