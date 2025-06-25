import React from "react";
import { HiOutlinePlay, HiChevronLeft, HiChevronRight } from "react-icons/hi";

export const FeatureVideo = ({ hero, thumbs }) => (
    <div className="w-full bg-black">
  <section className="text-white py-12 sm:py-16 lg:py-20 font-roboto">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Hero Video Section */}
        <div className="relative w-full lg:w-3/4">
          <img
            src={hero.img}
            alt={hero.title}
            className="w-full h-full object-cover border-r-8 border-gray-700 border-b-2 rounded-md"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white/80 backdrop-blur grid place-content-center">
              <HiOutlinePlay className="h-8 w-8 sm:h-10 sm:w-10 text-pink-600" />
            </span>
          </span>
        </div>

        {/* Thumbnails Sidebar */}
        <aside className="flex flex-col w-full lg:w-1/4">
          <div className="flex flex-col gap-6">
            {thumbs.map((t) => (
              <div key={t.title}>
                <img
                  src={t.img}
                  alt={t.title}
                  className="w-full h-[110px] sm:h-[130px] object-cover rounded"
                />
                <p className="text-xs sm:text-sm font-medium mt-2 leading-snug">
                  {t.title}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-6 self-start">
            <button className="hover:text-pink-600 transition">
              <HiChevronLeft className="h-8 w-8 sm:h-10 sm:w-10" />
            </button>
            <button className="hover:text-pink-600 transition">
              <HiChevronRight className="h-8 w-8 sm:h-10 sm:w-10" />
            </button>
          </div>
        </aside>
      </div>

      {/* Video Title */}
      <h4 className="text-base sm:text-lg font-semibold mt-8">{hero.title}</h4>
    </div>
  </section>
  </div>
);
