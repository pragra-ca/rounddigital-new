"use client";
import * as React from "react";

function WorksSection() {
  return (
    <section className="px-5 md:px-10 lg:px-36 py-20 bg-white">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center justify-center px-4 py-1 text-sm font-bold text-white bg-red-500 rounded-full">
          WORKS
        </div>
        <h2 className="mt-4 text-4xl font-semibold text-neutral-900">Featured Works</h2>
        <p className="mt-3 text-lg text-neutral-500">Find our latest works here</p>
      </div>

      {/* Main Project */}
      <div className="relative w-full max-w-6xl mx-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/3514b94b3abd1db18cb6b8b04a2ff22685f59ea6?placeholderIfAbsent=true"
          alt="Main Project"
          className="w-full rounded-2xl object-cover aspect-[2.34]"
        />
        <div className="absolute top-6 left-6 space-y-4 max-w-xs">
          <div className="inline-block px-4 py-1 text-sm font-semibold text-white bg-zinc-800 bg-opacity-50 rounded-full border border-white">
            WORKS
          </div>
          <div className="px-4 py-3 text-xl font-medium text-zinc-800 bg-white bg-opacity-80 rounded-xl">
            Website Design for Digital Agency
          </div>
        </div>
      </div>

      {/* Two Columns Projects */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="relative">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/66ea422abd63db45eeca4e9ce1f200f98dba5ced?placeholderIfAbsent=true"
            alt="Social Media"
            className="w-full rounded-3xl object-cover aspect-[1.2]"
          />
          <div className="absolute bottom-6 left-6 space-y-2 max-w-[90%]">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-white bg-zinc-800 bg-opacity-50 border border-white rounded-full">
              SOCIAL MEDIA
            </div>
            <div className="px-4 py-3 text-xl font-medium text-zinc-800 bg-neutral-100 bg-opacity-80 rounded-xl">
              Social Media Strategy for Restaurant
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/068a599579d5025527a96bef0c20fb9efeb31680?placeholderIfAbsent=true"
            alt="Marketing"
            className="w-full rounded-3xl object-cover aspect-[1.2]"
          />
          <div className="absolute bottom-6 left-6 space-y-2 max-w-[90%]">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-white bg-zinc-800 bg-opacity-50 border border-white rounded-full">
              MARKETING
            </div>
            <div className="px-4 py-3 text-xl font-medium text-zinc-800 bg-white bg-opacity-80 rounded-xl">
              Branding a New Startup
            </div>
          </div>
        </div>
      </div>

      {/* Last Project */}
      <div className="mt-16 relative max-w-6xl mx-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/df275ddfee34f363401446e95f4667bbaeaaaff4?placeholderIfAbsent=true"
          alt="Finance"
          className="w-full rounded-2xl object-cover aspect-[2.34]"
        />
        <div className="absolute bottom-6 right-6 text-right space-y-2 max-w-sm">
          <div className="inline-block px-4 py-1 text-sm font-semibold text-white bg-zinc-800 bg-opacity-50 border border-white rounded-full">
            FINANCE
          </div>
          <div className="px-6 py-4 text-xl font-medium text-zinc-800 bg-white bg-opacity-80 rounded-xl">
            Branding a Local Business
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorksSection;
