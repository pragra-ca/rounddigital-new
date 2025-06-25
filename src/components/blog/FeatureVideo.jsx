import React from "react";
import { HiOutlinePlay, HiChevronLeft, HiChevronRight } from "react-icons/hi";

export const FeatureVideo = ({ hero, thumbs }) => (
  <section className="bg-black text-white py-12 sm:py-16 lg:py-20 w-screen relative left-1/2 right-1/2 -translate-x-1/2 font-roboto">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="relative w-full lg:w-[900px]">
          <img src={hero.img} alt={hero.title} className="w-full h-full object-cover border-r-8 border-gray-700 border-b-2" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white/80 backdrop-blur grid place-content-center">
              <HiOutlinePlay className="h-8 w-8 sm:h-10 sm:w-10 text-pink-600" />
            </span>
          </span>
        </div>

        <aside className="flex flex-col w-full lg:w-[280px]">
          <div className="flex flex-col gap-6">
            {thumbs.map((t) => (
              <div key={t.title}>
                <img src={t.img} alt={t.title} className="w-full h-[110px] sm:h-[130px] object-cover" />
                <p className="text-xs sm:text-sm font-medium mt-2 leading-snug">{t.title}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-4 self-start">
            <button>
              <HiChevronLeft className="h-8 w-8 sm:h-10 sm:w-10" />
            </button>
            <button>
              <HiChevronRight className="h-8 w-8 sm:h-10 sm:w-10" />
            </button>
          </div>
        </aside>
      </div>

      <h4 className="text-base sm:text-lg font-semibold mt-6">{hero.title}</h4>
    </div>
  </section>
);