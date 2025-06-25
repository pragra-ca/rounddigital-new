import React from "react";
import { categoryColors } from "@/utlis/categoryColors";

export const ArticleCard = ({
  img,
  date,
  category,
  title,
  summary,
  author,
}) => {
  const color = categoryColors[category] || categoryColors.default;

  return (
    <div className="flex flex-col md:flex-row gap-6 border-b-2 border-gray-400 last:border-b-0 pb-6 w-full max-w-[50rem] mx-auto font-roboto">
      <div className="flex-1">
        <p className="text-s md:text-sm text-gray-400 pb-2">
          {date} &nbsp;&nbsp;
          <span className={`font-black tracking-widest text-[12px] ${color}`}>{category}</span>
        </p>

        <h4 className="mt-4 text-lg md:text-xl font-bold">{title}</h4>
        <p className="mt-2 text-sm md:text-base text-gray-700">{summary}</p>

        <div className="flex items-center gap-4 mt-4">
          <img src="/images/th.jpeg" className="w-8 h-8 rounded-full object-cover" />
          <p className="text-xs md:text-sm text-gray-500">{author}</p>
        </div>
      </div>

      <img
        src={img}
        alt={title}
        className="w-full sm:w-[400px] md:w-[320px] lg:w-[400px] h-[200px] sm:h-[250px] object-cover flex-shrink-0 mb-4 md:mb-0 pb-4"
      />
    </div>
  );
};