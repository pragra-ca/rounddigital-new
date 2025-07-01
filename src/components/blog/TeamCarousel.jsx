import React, { useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export const TeamCarousel = ({ members }) => {
  // For mobile/tablet: show all in grid, for desktop: carousel
  const [current, setCurrent] = useState(0);
  const visibleCount = 4; // Number of team members visible at once on desktop

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? members.length - visibleCount : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) =>
      prev + visibleCount >= members.length ? 0 : prev + 1
    );
  };

  // Get visible members for carousel
  const getVisibleMembers = () => {
    if (members.length <= visibleCount) return members;
    if (current + visibleCount <= members.length) {
      return members.slice(current, current + visibleCount);
    }
    // Wrap around
    return [
      ...members.slice(current, members.length),
      ...members.slice(0, visibleCount - (members.length - current)),
    ];
  };

  return (
    <section className="my-12 sm:my-16">
      <header className="flex items-center justify-between mb-6 px-4 sm:px-0">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-10">Meet Our Team</h3>
        <span className="text-xs sm:text-sm font-bold text-gray-900 cursor-pointer hover:underline">more →</span>
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
      <div className="relative hidden md:flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow hover:bg-gray-100 transition"
          aria-label="Previous"
        >
          <HiChevronLeft className="h-10 w-10 lg:h-12 lg:w-12 text-gray-900" />
        </button>

        <div className="flex gap-12 lg:gap-20 overflow-hidden justify-center w-full">
          {getVisibleMembers().map((m) => (
            <div key={m.name} className="flex flex-col items-center flex-shrink-0 text-center transition-transform duration-300">
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
          onClick={handleNext}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow hover:bg-gray-100 transition"
          aria-label="Next"
        >
          <HiChevronRight className="h-10 w-10 lg:h-12 lg:w-12 text-gray-900" />
        </button>
      </div>
    </section>
  );
};