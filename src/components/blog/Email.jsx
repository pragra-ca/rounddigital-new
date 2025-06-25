import React from "react";
import { HiOutlineMail, HiArrowNarrowRight } from "react-icons/hi";

export const Email = () => (
  <footer className="w-full bg-white border-y px-4 sm:px-6 lg:px-8 py-8">
    <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left section */}
      <div className="flex items-center gap-4 md:gap-6 text-center md:text-left w-full md:w-auto">
        <span className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-gray-400 flex-shrink-0">
          <HiOutlineMail className="h-6 w-6 text-black" />
        </span>
        <p className="text-base sm:text-lg font-medium font-roboto">
          Receive free, actionable real-estate strategy in your inbox.
        </p>
      </div>

      {/* Form section */}
      <form className="w-full max-w-xl flex flex-col sm:flex-row px-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-grow border-2 border-black px-4 py-2 text-sm focus:outline-none"
        />
        <button
          type="submit"
          className="mt-2 sm:mt-0 sm:ml-2 bg-black text-white px-4 py-2 border border-black flex items-center justify-center"
        >
          <HiArrowNarrowRight className="h-5 w-5" />
        </button>
      </form>
    </div>
  </footer>
);
