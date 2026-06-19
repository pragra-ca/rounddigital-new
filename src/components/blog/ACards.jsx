import React from "react";

export const ACards = ({ img, title, author }) => (
  <div className="flex flex-col gap-3 max-w-xs sm:max-w-sm py-6 font-roboto">
    <img
      src={img}
      alt={title}
      className="w-full h-[200px] sm:h-[240px] object-cover"
    />
    <h5 className="text-lg sm:text-xl font-bold leading-snug">
      {title}
    </h5>
    <div className="flex items-center gap-4 pt-3">
      <img
        src="/images/th.jpeg"
        className="w-6 h-6 rounded-full object-cover"
      />
      <p className="text-xs sm:text-sm text-gray-800">
        {author}
      </p>
    </div>
  </div>
);