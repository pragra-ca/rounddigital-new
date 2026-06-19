import React from "react";
import Image from "next/image";
import { urlFor } from "@/utlis/sanity";

const ArticleCard = ({
  img,
  date,
  category,
  title,
  summary,
  testimonial,
}) => {
  // Ensure we have a valid image source

  return (
    <div className="flex flex-col md:flex-row gap-6 border-b-2 border-gray-400 last:border-b-0 pb-6 w-full max-w-[50rem] mx-auto font-roboto">
      <div className="flex-1">
        <p className="text-s md:text-sm text-gray-400 pb-2">{date}</p>

        <h4 className="mt-4 text-lg md:text-xl font-bold">{title}</h4>
        <p className="mt-2 text-sm md:text-base text-gray-700">{summary}</p>

        {testimonial && (
          <div className="flex items-center gap-4 mt-4">
           {testimonial?.image && <Image
              alt={testimonial?.author || 'Author'}
              src={urlFor(testimonial?.image).url()}
              className="h-12 w-12 rounded-full object-cover grayscale"
              width={48}
              height={48}
            />}
            <p className="text-xs md:text-sm text-gray-500">
              {testimonial?.author || 'Author'}
            </p>
            <p className="text-xs md:text-sm text-gray-500">
              {testimonial?.authorRole || 'Author Role'}
            </p>
          </div>
        )}
      </div>

      {img && (
        <div className="relative w-full sm:w-[400px] md:w-[320px] lg:w-[400px] h-[200px] sm:h-[250px] flex-shrink-0 mb-4 md:mb-0">
          <Image
            src={urlFor(img).url()}
            alt={title || 'Blog post image'}
            className="object-cover rounded-lg"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      )}
    </div>
  );
};

export default ArticleCard;