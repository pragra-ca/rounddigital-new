"use client";

import React from "react";

const pricingPlans = [
  {
    name: "Standard",
    price: "$2,995/m",
    note: "Pause or cancel anytime",
    features: [
      "1x active task at a time",
      "Unlimited revisions",
      "Dedicated project manager",
      "Daily comms through Slack",
      "Work with senior designers",
      "2-3 days turn around time",
      "Top tier design",
    ],
    badge: "Most Popular",
    badgeColor: "bg-red-500",
  },
  {
    name: "Growth",
    price: "$4,795/m",
    note: "Pause or cancel anytime",
    features: [
      "2x active task at a time",
      "Unlimited revisions",
      "Dedicated project manager",
      "Daily comms through Slack",
      "Work with senior designers",
      "2-3 days turn around time",
      "Top tier design",
    ],
    badge: "Best value",
    badgeColor: "bg-white text-black",
  },
  {
    name: "Basic – Weekly",
    price: "$890/m",
    note: "Paid per weekly",
    features: [
      "Fixed Scope of work",
      "2 rounds of revisions",
      "Dedicated project manager",
      "Daily comms through Slack",
      "1x designer",
      "2-5 days turn around time",
      "Top tier design",
    ],
    badge: null,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-[#1E1E1E] text-white py-20 px-4 md:px-20 font-sans">
      <div className="text-center mb-16">
        <p className="text-sm text-red-500 tracking-widest uppercase font-semibold">
          CLEAR & SIMPLE PRICING
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Simple pricing to level up your brand.
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-base">
          Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee. Cancel anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="border border-red-500 px-6 py-8 rounded-xl bg-[#1E1E1E] flex flex-col justify-between min-h-[600px]"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                {plan.badge && (
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${plan.badgeColor}`}>
                    {plan.badge}
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {index === 0
                  ? "One request at a time. For companies who need on-going design support."
                  : index === 1
                  ? "Double the requests. For companies with increasing design needs. Limited spots."
                  : "Perfect if you want to try the subscription out or only have a few one-off tasks."}
              </p>

              <p className="text-4xl font-bold text-red-500 mb-1">{plan.price}</p>
              <p className="text-sm text-gray-300 mb-6">{plan.note}</p>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white">
                    <span className="text-red-500 font-bold">+</span>
                    {feature.includes("2x") ? (
                      <span className="text-red-500 font-medium">{feature}</span>
                    ) : (
                      feature
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-3">
              <button className="w-full border border-white py-2 rounded-lg text-white font-semibold">
                Book A Call
              </button>
              <button className="w-full bg-red-500 py-2 rounded-lg text-white font-semibold">
                Click to buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
