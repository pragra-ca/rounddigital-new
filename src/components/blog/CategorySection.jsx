import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ACards } from "./ACards";
import { categoryColors } from "@/utlis/categoryColors";

export const CategorySection = ({ title, articles }) => {
  const color = categoryColors[title] || categoryColors.default;

  return (
    <section className="mb-10">
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-4xl font-black my-8 text-[31px] text-[#E14242] md:text-3xl">
          {title}
        </h2>

        <a
          href="/blogs"
          className={`text-sm font-bold flex items-center gap-1 font-roboto ${color}`}
        >
          all posts
          <HiOutlineArrowNarrowRight className={`h-3.5 w-3.5 ${color}`} />
        </a>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((a) => (
          <ACards key={a.title} {...a} category={title} />
        ))}
      </div>

      <div className="h-px bg-gray-200 mt-6" />
    </section>
  );
};