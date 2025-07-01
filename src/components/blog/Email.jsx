import React from "react";
import { HiOutlineMail, HiArrowNarrowRight } from "react-icons/hi";

export const Email = () => (
  <footer className="w-full bg-gradient-to-r from-white via-zinc-50 to-white border-y px-4 sm:px-8 py-10">
    <div className="container max-w-7xl mx-auto flex px-6 flex-col md:flex-row items-center justify-between gap-8">
      {/* Left section */}
      <div className="flex items-center gap-5 md:gap-7 w-full md:w-auto">
        <span className="h-14 w-14 flex items-center justify-center rounded-full border-2 border-[#dc2626] bg-white shadow-md">
          <HiOutlineMail className="h-7 w-7 text-[#dc2626]" />
        </span>
        <p className="text-lg sm:text-xl font-semibold font-roboto text-zinc-800">
          Receive free, actionable real estate strategy in your inbox.
        </p>
      </div>

      {/* Form section */}
      <form className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3 sm:gap-0 px-0">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-grow border-2 border-[#dc2626] rounded-full px-5 py-3 text-base font-roboto bg-white focus:outline-none focus:ring-2 focus:ring-[#dc2626] transition"
        />
        <button
          type="submit"
          className="mt-2 sm:mt-0 sm:ml-3 bg-[#dc2626] hover:bg-black text-white px-6 py-3 rounded-full font-bold flex items-center justify-center transition-colors duration-200 border-2 border-[#dc2626] hover:border-black"
        >
          <span className="mr-2 hidden sm:inline">Subscribe</span>
          <HiArrowNarrowRight className="h-5 w-5" />
        </button>
      </form>
    </div>
  </footer>
);