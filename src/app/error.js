"use client";

import Link from "next/link";
import { HiOutlineRefresh } from "react-icons/hi";
import { FiAlertTriangle } from "react-icons/fi";

const ErrorPage = ({ reset }) => {

  return (
    <main className="flex-1 bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      
      <div className="max-w-md space-y-3">
        <div className=" p-5 bg-red-100 inline-block rounded-full text-rose-500 animate-bounce">
          <FiAlertTriangle size={40} className="stroke-[1.5]" />
        </div>

        <div className="space-y-1.5">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#191C20] tracking-tight">
            Something Went Wrong
          </h1>
          <p className="text-xs sm:text-sm text-[#404750] font-normal max-w-sm mx-auto leading-relaxed">
            We encountered an unexpected secure connection error while loading your healthcare data. Please try again.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-center">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto bg-[#1e73be] hover:bg-[#165a94] text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 shadow-sm"
          >
            <HiOutlineRefresh className="w-4 h-4" /> Try Again
          </button>

          <Link href="/" className="w-full sm:w-auto">
            <button className="w-full bg-gray-100 hover:bg-gray-100 text-[#404750] text-xs sm:text-sm font-medium px-6 py-3 rounded-xl border border-gray-100 transition-all duration-300 active:scale-95">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>

    </main>
  );
};

export default ErrorPage;
