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
		<section className="relative bg-[#181818] text-white py-20 px-4 md:px-10 font-sans overflow-hidden">
			{/* Animated BG Circles */}
			<div className="pointer-events-none absolute inset-0 z-0">
				<div className="absolute animate-pulse-slow left-[-120px] top-[-120px] w-[300px] h-[300px] bg-[#e14242]/15 rounded-full blur-2xl" />
				<div className="absolute animate-pulse-slow right-[-100px] bottom-[-100px] w-[220px] h-[220px] bg-[#ff6a6a]/10 rounded-full blur-2xl" />
				<div className="absolute animate-spin-slow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-8 border-dashed border-[#e14242]/10 rounded-full" />
			</div>

			<div className="text-center mb-16 relative z-10">
				<p className="text-sm text-red-500 tracking-widest uppercase font-semibold animate-pulse">
					CLEAR & SIMPLE PRICING
				</p>
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 drop-shadow-[0_2px_16px_#e1424222]">
					Simple pricing to level up your brand.
				</h2>
				<p className="text-gray-400 max-w-2xl mx-auto mt-4 text-base">
					Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee.
					Cancel anytime.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
				{pricingPlans.map((plan, index) => (
					<div
						key={index}
						className={`
              relative group px-6 py-8 rounded-2xl bg-[#232323] shadow-lg border border-[#e14242]/15 flex flex-col justify-between min-h-[540px]
              transition-all duration-300 hover:scale-105 hover:shadow-2xl
              overflow-hidden
            `}
					>
						{/* Subtle 3D Glow on hover */}
						<div className="absolute -inset-3 rounded-2xl bg-[#e14242]/10 blur-xl opacity-0 group-hover:opacity-60 transition-all duration-300 pointer-events-none z-0" />
						{/* Shine effect */}
						<div className="absolute left-4 top-4 w-10 h-10 bg-white/10 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300 pointer-events-none z-0" />

						<div className="relative z-10">
							<div className="flex items-center justify-between mb-2">
								<h3 className="text-xl font-bold text-white">{plan.name}</h3>
								{plan.badge && (
									<span
										className={`text-xs font-semibold px-3 py-1 rounded-full shadow ${plan.badgeColor} border border-white/20`}
									>
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

							<p className="text-4xl font-extrabold text-red-500 mb-1 drop-shadow-[0_2px_16px_#e1424222]">
								{plan.price}
							</p>
							<p className="text-sm text-gray-300 mb-6">{plan.note}</p>

							<ul className="space-y-4 mt-6">
								{plan.features.map((feature, i) => (
									<li
										key={i}
										className="flex items-start gap-2 text-base text-white"
									>
										<span className="text-red-500 font-bold text-lg">+</span>
										{feature.includes("2x") ? (
											<span className="text-red-500 font-semibold">
												{feature}
											</span>
										) : (
											feature
										)}
									</li>
								))}
							</ul>
						</div>

						<div className="mt-8 space-y-3 relative z-10">
							<button className="w-full border border-white py-3 rounded-xl text-white font-semibold bg-white/5 hover:bg-white/10 shadow transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#e14242]">
								Book A Call
							</button>
							<button className="w-full bg-gradient-to-r from-[#e14242] to-[#ff6a6a] py-3 rounded-xl text-white font-semibold shadow-md border-b-4 border-[#e14242] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 hover:border-b-8">
								Click to buy
							</button>
						</div>
					</div>
				))}
			</div>
			<style jsx>{`
				.animate-pulse {
					animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
				}
				@keyframes pulse {
					0%,
					100% {
						opacity: 1;
					}
					50% {
						opacity: 0.6;
					}
				}
				.animate-pulse-slow {
					animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
				}
				.animate-spin-slow {
					animation: spin 18s linear infinite;
				}
				@keyframes spin {
					100% {
						transform: rotate(360deg);
					}
				}
			`}</style>
		</section>
	);
}
