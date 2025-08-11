import React from "react";
import Image from "next/image";
import { urlFor } from "@/utlis/sanity";

const GridArticleCard = ({
  img,
  date,
  category = "Uncategorized",
  title = "Untitled Post",
  summary = "",
  variant = "light", // 'light' | 'dark'
}) => {
  const imageUrl = img ? urlFor(img).url() : null;
  const isDark = variant === "dark";
  return (
    <article
      className={
        "group relative overflow-hidden rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col " +
        (isDark
          ? "border-white/10 bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#1f1f1f]"
          : "border-zinc-200 bg-white")
      }
    >
      {/* Image */}
      {imageUrl && (
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className={"absolute inset-0 bg-gradient-to-t to-transparent opacity-60 group-hover:opacity-70 transition-opacity " + (isDark ? "from-black/60 via-black/20" : "from-black/50 via-black/10")} />
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <p className={"text-xs " + (isDark ? "text-zinc-400" : "text-zinc-500")}>{date}</p>
        <h3 className={"mt-2 line-clamp-2 text-lg font-semibold transition-colors " + (isDark ? "text-white group-hover:text-red-400" : "text-zinc-900 group-hover:text-red-600")}>
          {title}
        </h3>
        {summary && (
          <p className={"mt-2 line-clamp-3 text-sm " + (isDark ? "text-zinc-300/80" : "text-zinc-600")}>{summary}</p>
        )}
      </div>
    </article>
  );
};

export default GridArticleCard;
