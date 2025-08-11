"use client";
import * as React from "react";
import Link from "next/link";

function BenefitsSection() {
  return (
    <section className="w-full bg-gradient-to-br from-white via-zinc-100 to-white py-16 px-2 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 px-4">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <span className="inline-block bg-red-600 text-white text-xs font-bold px-5 py-1 rounded-full shadow tracking-widest">
            BENEFITS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 text-center">
            Why Choose Us
          </h2>
          <p className="mt-2 text-lg sm:text-xl font-medium text-zinc-600 text-center max-w-2xl">
            We bring your ideas to life by combining experience, creativity, and technology for real business results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1 */}
          <div className="relative bg-white/90 border border-zinc-200 rounded-3xl shadow-xl flex flex-col items-center p-8 hover:scale-105 transition-transform group">
            {/* Floating badge */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow border border-white/80 z-20">
              TEAM
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/3e34db4d81c4fb4209440e4d4a07748c37b734ba?placeholderIfAbsent=true"
              alt="Expert Team"
              className="w-28 h-28 object-contain mb-4 mt-4"
            />
            <h3 className="text-xl font-bold text-zinc-900 mb-2 text-center">Expert Team</h3>
            <p className="text-zinc-600 text-base text-center mb-4">
              Work with passionate professionals who care about your success.
            </p>
            <Link href="/contact" className="mt-auto px-8 py-2 bg-zinc-900 text-white rounded-full font-semibold shadow hover:bg-red-600 transition-colors">
              Try Us
            </Link>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white/90 border border-red-500 rounded-3xl shadow-xl flex flex-col items-center p-8 hover:scale-105 transition-transform group">
            {/* Floating badge */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white border border-red-500 text-red-600 text-xs font-bold px-4 py-1 rounded-full shadow z-20">
              DESIGN
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/b00d39b9eb03f3bfe06739030f30d4e230129f36?placeholderIfAbsent=true"
              alt="Design"
              className="w-20 h-20 object-contain mb-4 mt-4"
            />
            <h3 className="text-xl font-bold text-zinc-900 mb-2 text-center">
              Modern & Easy UI
            </h3>
            <p className="text-zinc-600 text-base text-center mb-4">
              Pulsar is designed for simplicity and impact. Edit and launch in minutes.
            </p>
            <Link href="/services" className="mt-auto px-8 py-2 bg-red-600 text-white rounded-full font-semibold shadow hover:bg-black transition-colors">
              Get Started
            </Link>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white/90 border border-zinc-200 rounded-3xl shadow-xl flex flex-col items-center p-8 hover:scale-105 transition-transform group">
            {/* Floating badge */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-4 py-1 rounded-full shadow border border-red-600 z-20">
              RESPONSIVE
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/f5c95a5175ebf90c6f13edef664500cadccaeb2a?placeholderIfAbsent=true"
              alt="Responsive"
              className="w-28 h-28 object-contain mb-4 mt-4"
            />
            <h3 className="text-xl font-bold text-zinc-900 mb-2 text-center">
              Fully Responsive
            </h3>
            <p className="text-zinc-600 text-base text-center mb-4">
              Your site looks stunning on every device, every time.
            </p>
            <Link href="/contact" className="mt-auto px-8 py-2 bg-red-600 text-white rounded-full font-semibold shadow hover:bg-black transition-colors">
              Try This Plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;