"use client";

import React from "react";

const dummyImages = [
  "https://source.unsplash.com/random/400x400?sig=1",
  "https://source.unsplash.com/random/400x500?sig=2",
  "https://source.unsplash.com/random/400x600?sig=3",
  "https://source.unsplash.com/random/400x450?sig=4",
  "https://source.unsplash.com/random/400x550?sig=5",
  "https://source.unsplash.com/random/400x470?sig=6",
  "https://source.unsplash.com/random/400x480?sig=7",
  "https://source.unsplash.com/random/400x430?sig=8",
  "https://source.unsplash.com/random/400x520?sig=9",
  "https://source.unsplash.com/random/400x410?sig=10",
  "https://source.unsplash.com/random/400x390?sig=11",
  "https://source.unsplash.com/random/400x580?sig=12",
];

export default function BeautifulWorks() {
  return (
    <section className="py-20 px-4 bg-white text-black">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Beautiful Works</h2>
        <p className="text-gray-600 mt-2">
          We help our clients grow their bottom-line with clear and professional websites.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
        {dummyImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Work ${index + 1}`}
            className="w-full rounded-lg hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
}
