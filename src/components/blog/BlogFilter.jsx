import React from "react";

const BlogFilter = ({ categories = [], active = "All", onChange }) => {
  const tabs = ["All", ...categories];
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {tabs.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => onChange?.(cat)}
            className={
              "px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all border " +
              (isActive
                ? "bg-[#e14242] text-white border-[#e14242] shadow-[0_8px_24px_rgba(225,66,66,0.35)]"
                : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10")
            }
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default BlogFilter;
