"use client";

import * as React from "react";

function Overview() {
  return (
    <div className="w-full mx-auto 2xl:container">
    <div className="py-24 px-5 md:px-10 lg:px-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Section 1: Welcome + 97% */}
        <div className="flex flex-col">
          <div className="text-sm font-bold text-white w-max bg-red-500 px-4 py-1 rounded-full mb-4">
            OVERVIEW
          </div>

          <h2 className="text-4xl font-semibold tracking-tighter text-zinc-800">
            Welcome to <br />
            <span className="text-red-600">Rounddigital</span>
          </h2>

          <p className="mt-4 text-xl font-medium tracking-tight text-neutral-400">
            An overview of Our Works
          </p>

          <div className="relative bottom-36 mt-8 w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/9373042a7bbbd2fccc80263d8a89e93f2b4a0159?placeholderIfAbsent=true"
              alt="Overview"
              className="w-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 md:left-10 bg-black bg-opacity-60 p-6 rounded-xl text-white max-w-md">
              <div className="text-5xl font-bold tracking-tighter">97%</div>
              <div className="mt-2 text-lg">
                Focus on what is more important to you and be more productive
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Benefits Card */}
        <div className="relative">
          <div className="bg-red-500 rounded-3xl shadow-lg border border-black min-h-[400px]"></div>
          <div className="absolute top-6 left-6 right-6 text-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/d58d0f8863008d4ad3407ac0ee5be0c60f37ad11?placeholderIfAbsent=true"
              alt="Benefits"
              className="w-full rounded-lg"
            />
            <div className="mt-6">
              <p className="text-sm">BENEFITS</p>
              <h3 className="text-2xl font-semibold mt-2">
                With Pulsar you save <br /> time, money and stress
              </h3>
              <button className="mt-6 px-6 py-3 bg-white text-red-600 rounded-full font-medium hover:bg-red-100 transition">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Section 3: Feature Card */}
        <div className="relative">
          <div className="bg-red-500 rounded-3xl shadow-lg border border-black min-h-[270px]"></div>
          <div className="absolute top-8 left-6 right-6 text-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/7c8a6c65cad82e5aeb93891c8011fd423f4e8e85?placeholderIfAbsent=true"
              alt="Feature"
              className="w-[220px] mb-6"
            />
            <p className="text-base">FEATURE</p>
            <h3 className="text-2xl mt-2">
              Maximize the return over your investments with Pulsar Template
            </h3>
          </div>
        </div>

        {/* Section 4: Mobile Support */}
        <div className="bg-zinc-900 flex rounded-3xl shadow-lg p-6 text-white">
          <div>
            <p className="text-base">MOBILE</p>
            <h3 className="text-3xl font-semibold mt-3 tracking-tight">
              Fast and supreme support 24/7 all year around for your company
            </h3>
          </div>
          <div className="flex gap-2 items-center mt-6"></div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/bf8db8b35348f5e39ada95d261164bc2ee4b41c9?placeholderIfAbsent=true"
            className="w-8"
            alt="icon1"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/b6570e87441227f89ce11e794cbc6d8d3f81e6f2?placeholderIfAbsent=true"
            className="w-24"
            alt="icon2"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/ae6fba675fea41a85d58e4543438bd936120bab5?placeholderIfAbsent=true"
            className="w-8"
            alt="icon3"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Overview;
