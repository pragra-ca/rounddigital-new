"use client";

import React, { useState } from "react";
import { InfinityIcon, ZapIcon, CalendarIcon, DollarSignIcon, BrushIcon, SmileIcon } from "lucide-react";

const capabilities = [
  "Web design & UI",
  "Social media visuals",
  "Infographics",
  "Design system",
  "Email design",
  "Stationery",
  "Icons",
  "Packaging & merch",
  "Signage",
  "Brochures",
  "Logos & branding",
  "Digital ads",
  "Wireframes",
];

const benefits = [
  {
    number: "1.",
    icon: <InfinityIcon className="w-5 h-5 text-red-500" />,
    title: "On-demand requests",
    desc: "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
  },
  {
    number: "2.",
    icon: <ZapIcon className="w-5 h-5 text-red-500" />,
    title: "Top-notch quality",
    desc: "High-end work from a dedicated team of senior designers that’s always available when you need it.",
  },
  {
    number: "3.",
    icon: <div className="w-5 h-5 rounded-full bg-red-500 text-xs text-black font-bold flex items-center justify-center">w</div>,
    title: "Powered by - Webflow",
    desc: "We build every site on Webflow, making them dynamic, accessible, and easily scalable. It’s easy for you like Squarespace but better.",
  },
  {
    number: "4.",
    icon: <span className="text-red-500 text-xl">⚡</span>,
    title: "Fast. Responsive. Reliable.",
    desc: "Get regular updates on your projects and can expect to receive your designs within 2-3 days.",
  },
  {
    number: "5.",
    icon: <CalendarIcon className="w-5 h-5 text-red-500" />,
    title: "No Lock in contracts",
    desc: "Pay the same every month, no surprises. You can use it for as long as you want and cancel anytime.",
  },
  {
    number: "6.",
    icon: <DollarSignIcon className="w-5 h-5 text-red-500" />,
    title: "Great value for money",
    desc: "Get the power of dedicated design team at fraction of the cost of full-time employee. ($54k/yr vs. $112k/yr).",
  },
  {
    number: "7.",
    icon: <BrushIcon className="w-5 h-5 text-red-500" />,
    title: "Customized for you",
    desc: "We design and build custom for you. We’re never starting from a template unless you want that? You don’t, right?",
  },
  {
    number: "8.",
    icon: <SmileIcon className="w-5 h-5 text-red-500" />,
    title: "Creative paying",
    desc: "We’re here when you need us and not on payroll when you don’t.",
  },
  {
    number: "9.",
    icon: <span className="text-red-500 text-lg">✦</span>,
    title: "Expert turnovers",
    desc: "You’re getting 10+ years of design experience with every request. No hand-holding required.",
  },
];

export default function CapabilitiesBenefits() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? capabilities : capabilities.slice(0, 13);

  return (
    <section className="bg-[#1a1a1a] text-white px-4 md:px-20 py-20 space-y-28 font-sans">
      <div className="text-center">
        <p className="text-red-500 text-xs tracking-wide uppercase mb-2">Our Capabilities</p>
        <h2 className="text-4xl font-bold mb-6">We can help you with...</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {visible.map((item, i) => (
            <button
              key={i}
              className="bg-red-600 hover:bg-red-700 transition text-sm font-medium text-white py-2 px-4 rounded-full"
            >
              {item}
            </button>
          ))}
        </div>
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-6 flex items-center justify-center text-sm text-white opacity-80 hover:opacity-100"
          >
            <span className="animate-spin text-red-500 mr-2">⏳</span> Load More
          </button>
        )}
      </div>

      <div className="max-w-7xl mx-auto">
        <p className="text-red-500 uppercase text-xs mb-4 tracking-wide">Benefits</p>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="md:w-[46%] space-y-5">
            <h3 className="text-3xl font-bold leading-tight">
              The design subscription that connects you to your dream team
            </h3>
            <p className="text-gray-300">
              A subscription can alleviate the stress of staffing, managing expenses, or make design calls like a Creative Director. We partner with you to ensure that your design elevates your brand to new levels.
            </p>
            {/* <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold">
              See Pricing
            </button> */}
          </div>
          <div className="md:w-[48%] grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1">{b.icon}</div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-sm">
                    {b.number} {b.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
