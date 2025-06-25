import React from "react";

export const HeroSection = () => (
  <section className="w-full bg-white border-b px-4 mt-12 sm:px-6 lg:px-8 py-10">
    <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* Hero Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/images/hero.png"
          alt="Real Estate Conference"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <p className="text-xs sm:text-sm font-semibold text-[#FF4A23] font-roboto tracking-widest uppercase">
          The Basics
        </p>

        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold font-playfair leading-snug">
          10 Must-Attend Real Estate Conferences + Events in 2025
        </h2>

        {/* Author Info */}
        <div className="flex items-center gap-4 pt-4">
          <img
            src="/images/th.jpeg"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            alt="Author"
          />
          <p className="text-sm sm:text-base font-medium font-roboto flex items-center gap-2">
            <span>Jolina Aliva</span>
            <span className="w-px h-4 bg-gray-300" />
            <span className="text-xs sm:text-sm text-gray-500">
              March 4, 2025
            </span>
          </p>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-gray-600 font-roboto leading-relaxed">
          Discover the top must-attend events in 2025 to network, gain industry insights,
          and stay ahead. Don’t miss these opportunities!
        </p>

        {/* CTA Link */}
        <a
          href="#"
          className="mt-5 text-sm sm:text-base font-black font-roboto text-[#FF4A23] hover:underline"
        >
          Keep reading →
        </a>
      </div>
    </div>
  </section>
);
