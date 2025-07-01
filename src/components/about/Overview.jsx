"use client";

import * as React from "react";

function Overview() {
  return (
    <section className="w-full bg-gradient-to-br from-white via-zinc-100 to-white py-20 px-2 sm:px-8 md:px-16 relative overflow-hidden">
      {/* Decorative 3D Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#e14242]/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-black/10 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#e14242]/10 via-transparent to-transparent rounded-full blur-[120px] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT: Hero */}
        <div className="flex flex-col gap-8">
          <span className="self-start inline-block text-xs sm:text-sm font-bold text-white bg-red-600 px-6 py-1 rounded-full shadow tracking-widest uppercase mb-2 animate-pulse">
            OVERVIEW
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 leading-tight drop-shadow mb-2">
            Welcome to <span className="text-red-600">Rounddigital</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-700 max-w-xl mb-6">
            Discover how we empower your business with creative solutions and measurable results.
          </p>
          {/* Modern Stat Card */}
          <div className="relative w-full max-w-lg rounded-[2.5rem] overflow-visible shadow-xl border-b-8 border-[#e14242] border-x-0 border-t-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black flex flex-col items-center justify-center py-12 px-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
            {/* Decorative Glow */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-500/20 rounded-full blur-2xl opacity-40 z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl opacity-40 z-0" />
            {/* Progress ring and text */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <div className="relative flex items-center justify-center mb-2">
                <svg className="w-32 h-32" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="10"
                    opacity="0.08"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="10"
                    strokeDasharray={339.292}
                    strokeDashoffset={339.292 * 0.03}
                    strokeLinecap="round"
                    className="transition-all duration-700"
                  />
                </svg>
                <span className="absolute text-4xl sm:text-5xl font-extrabold text-red-500 drop-shadow-lg animate-bounce">
                  97%
                </span>
              </div>
              <span className="text-lg sm:text-xl text-white font-semibold drop-shadow text-center max-w-xs">
                Clients see measurable productivity boosts.
              </span>
              <span className="mt-1 text-xs sm:text-sm text-zinc-300 text-center max-w-xs">
                We deliver results you can see and feel, not just promises.
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Feature Cards */}
        <div className="flex flex-col gap-8">
          {/* Card 1 - White bg, black bottom border */}
          <div className="relative group bg-white/95 border border-zinc-200 rounded-[2.5rem] shadow-xl overflow-hidden border-b-4 border-black hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300">
            <div className="absolute -top-8 right-8 z-0 opacity-20 blur-2xl w-32 h-32 bg-red-500 rounded-full"></div>
            <div className="relative z-10 flex flex-col gap-4 p-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/d58d0f8863008d4ad3407ac0ee5be0c60f37ad11?placeholderIfAbsent=true"
                alt="Benefits"
                className="w-full rounded-xl mb-2 "
              />
              <div>
                <p className="text-xs font-semibold text-red-600 tracking-wider mb-1">BENEFITS</p>
                <h3 className="text-xl sm:text-2xl font-bold leading-snug text-zinc-900">
                  Save time, money, and stress with Pulsar
                </h3>
                <button className="mt-4 px-6 py-2 bg-gradient-to-r from-[#e14242] to-[#ff6a6a] text-white rounded-full font-semibold shadow hover:bg-black hover:from-[#e14242] hover:to-black hover:scale-105 transition-all">
                  Read More
                </button>
              </div>
            </div>
          </div>
          {/* Card 2 - White bg, black bottom border */}
          <div className="relative group bg-gradient-to-br from-zinc-100 via-white to-zinc-200 border border-zinc-100 rounded-[2.5rem] shadow-xl overflow-hidden border-b-4 border-black hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300">
            <div className="absolute -bottom-8 left-8 z-0 opacity-20 blur-2xl w-32 h-32 bg-black rounded-full"></div>
            <div className="relative z-10 flex flex-col gap-4 p-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/7c8a6c65cad82e5aeb93891c8011fd423f4e8e85?placeholderIfAbsent=true"
                alt="Feature"
                className="w-24 sm:w-32 mx-auto mb-2 aspect-square object-contain"
              />
              <div>
                <p className="text-xs font-semibold text-black tracking-wider mb-1">FEATURE</p>
                <h3 className="text-lg sm:text-xl font-semibold leading-snug text-zinc-900">
                  Maximize your ROI with Pulsar Template
                </h3>
              </div>
            </div>
          </div>
          {/* Card 3 - Black bg, red bottom border */}
          <div className="relative group bg-gradient-to-br from-zinc-900 via-black to-zinc-800 rounded-[2.5rem] shadow-xl p-10 flex flex-col sm:flex-row items-center gap-6 border border-zinc-800 border-b-4 border-[#e14242] hover:shadow-[0_8px_32px_#e14242] hover:-translate-y-2 hover:scale-105 transition-all duration-300">
            <div className="flex-1">
              <p className="text-xs font-semibold text-red-400 tracking-wider mb-1">MOBILE</p>
              <h3 className="text-lg sm:text-xl font-bold mt-2 text-white leading-snug">
                Fast, supreme support 24/7, all year round for your company
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/bf8db8b35348f5e39ada95d261164bc2ee4b41c9?placeholderIfAbsent=true"
                className="w-6 sm:w-8"
                alt="icon1"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/b6570e87441227f89ce11e794cbc6d8d3f81e6f2?placeholderIfAbsent=true"
                className="w-12 sm:w-16 md:w-24"
                alt="icon2"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/ae6fba675fea41a85d58e4543438bd936120bab5?placeholderIfAbsent=true"
                className="w-6 sm:w-8"
                alt="icon3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;