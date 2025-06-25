import React from "react";

export const HeroSection = () => (
  <section className="w-full px-4 sm:px-6 lg:px-[100px] flex flex-col md:flex-row items-center gap-8 border-b md py-3">
    <img
      src="/images/hero.png"
      alt="Real Estate Conference"
      className="w-full sm:w-[420px] md:w-[600px] h-auto flex-shrink-0 my-6 "
    />

    <div className="flex-1 flex flex-col justify-center md:ml-16">
      <p className="text-xs font-semibold text-[#FF4A23] font-roboto tracking-widest">
        THE BASICS
      </p>

      <h2 className="mt-4 text-2xl md:text-3xl font-extrabold font-playfair">
        10 Must-Attend Real Estate Conferences + Events in 2025
      </h2>

      <div className="flex items-center gap-4 pt-4">
        <img src="/images/th.jpeg" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
        <p className="text-sm md:text-base font-medium font-roboto flex items-center gap-2">
  <span>Jolina Aliva</span>
  <span className="w-px h-3 bg-gray-300" />

  <span className="font-normal text-[12px]">
    March&nbsp;4,&nbsp;2025
  </span>
</p>

      </div>

      <p className="mt-4 text-sm md:text-base text-gray-600 font-roboto">
        Discover the top must-attend events in 2025 to network, gain industry insights,
        and stay ahead. Don’t miss these opportunities!
      </p>

      <a href="#" className="mt-5 text-sm md:text-base font-black font-roboto sm:pb-2">
        Keep reading →
      </a>
    </div>
  </section>
);