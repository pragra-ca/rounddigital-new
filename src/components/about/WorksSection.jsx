"use client";
import * as React from "react";

function WorksSection() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 bg-gradient-to-br from-white via-zinc-100 to-white">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block bg-red-600 text-white text-xs font-bold px-6 py-1 rounded-full shadow tracking-widest uppercase">
          WORKS
        </span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-black text-zinc-900 drop-shadow text-center">
          Featured Works
        </h2>
        <p className="mt-3 text-lg sm:text-xl font-medium text-zinc-600 text-center">
          Explore our latest projects and creative solutions for modern brands.
        </p>
      </div>

      {/* Main Project */}
      <div className="relative w-full max-w-6xl mx-auto mb-14 group">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/3514b94b3abd1db18cb6b8b04a2ff22685f59ea6?placeholderIfAbsent=true"
          alt="Main Project"
          className="w-full rounded-3xl object-cover aspect-[2.2] shadow-xl border border-zinc-200 group-hover:scale-[1.02] transition-transform"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
        <div className="absolute top-6 left-6 space-y-4 max-w-xs z-10">
          <span className="inline-block px-4 py-1 text-xs font-bold text-white bg-red-600 rounded-full shadow border-2 border-white tracking-widest">
            WEBSITE
          </span>
          <div className="px-4 py-3 text-lg font-semibold text-zinc-900 bg-white/90 rounded-xl shadow-xl border border-red-200 backdrop-blur-sm">
            Website Design for Digital Agency
          </div>
        </div>
      </div>

      {/* Two Columns Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="relative group">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/66ea422abd63db45eeca4e9ce1f200f98dba5ced?placeholderIfAbsent=true"
            alt="Social Media"
            className="w-full rounded-3xl object-cover aspect-[1.2] shadow-lg border border-zinc-200 group-hover:scale-[1.03] transition-transform"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/30 via-transparent to-white/10 pointer-events-none" />
          <div className="absolute bottom-6 left-6 space-y-2 max-w-[90%] z-10">
            <span className="inline-block px-3 py-1 text-xs font-bold text-white bg-black/80 border-2 border-red-600 rounded-full shadow-lg tracking-widest">
              SOCIAL MEDIA
            </span>
            <div className="px-4 py-3 text-lg font-semibold text-zinc-900 bg-white/90 rounded-xl shadow-xl border border-red-200 backdrop-blur-sm">
              Social Media Strategy for Restaurant
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/068a599579d5025527a96bef0c20fb9efeb31680?placeholderIfAbsent=true"
            alt="Marketing"
            className="w-full rounded-3xl object-cover aspect-[1.2] shadow-lg border border-zinc-200 group-hover:scale-[1.03] transition-transform"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/30 via-transparent to-white/10 pointer-events-none" />
          <div className="absolute bottom-6 left-6 space-y-2 max-w-[90%] z-10">
            <span className="inline-block px-3 py-1 text-xs font-bold text-white bg-red-600 border-2 border-white rounded-full shadow-lg tracking-widest">
              MARKETING
            </span>
            <div className="px-4 py-3 text-lg font-semibold text-zinc-900 bg-white/90 rounded-xl shadow-xl border border-red-200 backdrop-blur-sm">
              Branding a New Startup
            </div>
          </div>
        </div>
      </div>

      {/* Last Project */}
      <div className="mt-14 relative max-w-6xl mx-auto group">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/df275ddfee34f363401446e95f4667bbaeaaaff4?placeholderIfAbsent=true"
          alt="Finance"
          className="w-full rounded-3xl object-cover aspect-[2.2] shadow-xl border border-zinc-200 group-hover:scale-[1.02] transition-transform"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
        <div className="absolute bottom-6 right-6 text-right space-y-2 max-w-xs z-10">
          <span className="inline-block px-4 py-1 text-xs font-bold text-white bg-black/80 border-2 border-red-600 rounded-full shadow-lg tracking-widest">
            FINANCE
          </span>
          <div className="px-6 py-4 text-lg font-semibold text-zinc-900 bg-white/90 rounded-xl shadow-xl border border-red-200 backdrop-blur-sm">
            Branding a Local Business
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorksSection;