"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"; // If using Next.js
import testimonial from '@/assets/service/images/testimonial.png'; // Adjust the path as necessary

const testimonials = [
  {
    company: "Gymstory",
    logo: "G",
    headline:
      "Kornix Is The Best Digital Agency I Have Ever Seen!",
    content:
      "I recently hired Ideapeel for a custom web development project and couldn't be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.",
    name: "Diana Loreza",
    position: "Director of GYMSTORY",
    image: testimonial,
  },
  {
    company: "Fitcore",
    logo: "F",
    headline:
      "The Team Was Outstanding From Start To Finish!",
    content:
      "Working with Ideapeel was a delight. They understood our brand and delivered an exceptional site that increased our leads dramatically.",
    name: "John Carter",
    position: "CEO of FITCORE",
    image: testimonial,
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-white px-4 md:px-20 py-20 text-center font-sans">
      {/* Header */}
      <div className="mb-16">
        <p className="text-sm text-gray-500 font-medium tracking-wide uppercase mb-2">
          Testimonial
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-black">
          Customer is Our Top Priority
        </h2>
        <p className="mt-4 text-gray-600 text-base max-w-xl mx-auto">
          We survey all of our clients, the results of which go directly to our CEO.
        </p>
      </div>

      {/* Card */}
      <div className="relative max-w-5xl mx-auto rounded-2xl bg-[#f8f8f8] shadow-md p-10 md:p-16 flex flex-col md:flex-row items-center justify-between min-h-[340px]">
        {/* Left text */}
        <div className="text-left w-full md:w-2/3 space-y-4 overflow-auto">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{testimonial.logo}</span>
            <p className="text-lg font-medium">{testimonial.company}</p>
          </div>
          <h3 className="text-xl font-bold text-red-500 leading-snug">
            {testimonial.headline}
          </h3>
          <p className="text-sm text-gray-700">
            {testimonial.content.split("Ideapeel")[0]}
            <span className="font-semibold">Ideapeel</span>
            {testimonial.content.split("Ideapeel")[1] ?
              testimonial.content.split("Ideapeel")[1] : ""}
          </p>
          <div>
            <p className="font-bold text-black">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.position}</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0 md:w-1/3 flex justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden">
            <Image
              src={testimonial.image}
              alt="User"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Nav Buttons */}
        <button
          onClick={handlePrev}
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={handleNext}
          className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </section>
  );
}
