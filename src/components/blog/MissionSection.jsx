import React from "react";

export const MissionSection = () => (
  <section className="my-16 sm:my-20 px-4 sm:px-6 md:px-4 grid gap-8 md:grid-cols-3">
    <div className="flex flex-col">
      <h3 className="text-2xl sm:text-3xl font-semibold">Our Mission</h3>
      <a href="/about" className="mt-2 sm:mt-3 text-sm font-bold text-[#FF0769] hover:underline">
        more →
      </a>
    </div>

    <p className="md:col-span-2 text-base sm:text-lg leading-relaxed sm:leading-loose text-gray-700 font-roboto">
      Launched in January&nbsp;1978, The Close is a world-class real-estate website designed
      to give agents, teams, and brokerages actionable, strategic insight. From our
      research-driven articles to our professionally backed analyses, we leverage the
      perspective of working agents and brokers who want to take their businesses to the next level.
    </p>
  </section>
);