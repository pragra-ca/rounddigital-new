import React, { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export const TeamCarousel = ({ members }) => {
  const stripRef = useRef(null);

  const scroll = (dir) => {
    if (!stripRef.current) return;
    const delta = dir === "left" ? -160 : 160;
    stripRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="my-12 sm:my-16">
      <header className="flex items-center justify-between mb-6 px-4 sm:px-0">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-10">Meet Our Team</h3>
        <span className="text-xs sm:text-sm font-bold text-gray-900">more →</span>
      </header>

      {/* mobile / tablet grid */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:hidden px-4">
        {members.map((m) => (
          <div key={m.name} className="flex flex-col items-center text-center">
            <img
              src={m.img}
              alt={m.name}
              className="h-20 w-20 rounded-full object-cover mb-2 shadow-md"
            />
            <p className="text-xs font-medium">{m.name}</p>
          </div>
        ))}
      </div>

      {/* desktop carousel */}
      <div className="relative hidden md:block">
        <button
          onClick={() => scroll("left")}
          className="absolute -left-6 top-1/2 -translate-y-1/2"
        >
          <HiChevronLeft className="h-10 w-10 lg:h-12 lg:w-12 text-gray-900" />
        </button>

        <div
          ref={stripRef}
          className="flex gap-12 lg:gap-20 overflow-x-auto scroll-smooth no-scrollbar justify-center"
        >
          {members.map((m) => (
            <div key={m.name} className="flex flex-col items-center flex-shrink-0 text-center">
              <img
                src={m.img}
                alt={m.name}
                className="h-24 w-24 lg:h-28 lg:w-28 rounded-full object-cover mb-2 shadow-md"
              />
              <p className="text-sm font-medium">{m.name}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute -right-6 top-1/2 -translate-y-1/2"
        >
          <HiChevronRight className="h-10 w-10 lg:h-12 lg:w-12 text-gray-900" />
        </button>
      </div>
    </section>
  );
};