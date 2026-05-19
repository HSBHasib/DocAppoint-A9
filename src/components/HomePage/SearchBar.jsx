"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState();
  const searchParams = useSearchParams();

  const handleSearchFunc = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    router.push(`/all-appointments?${params.toString()}`);
  };

   const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchFunc();
    }
  };

  return (
    <div className="flex items-center justify-between bg-white border my-5 border-gray-100 pl-3 sm:pl-4 rounded-xl overflow-hidden w-full max-w-xl mx-auto focus-within:border-[#1e73be] focus-within:ring-4 focus-within:ring-blue-500/5 transition-all duration-200">
      <div className="flex items-center gap-1.5 flex-1 min-w-0">
        <FiSearch size={20} className="text-[#404750] shrink-0" />
        <input
          value={search || ""}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Search by doctor or speciality..."
          className="w-full py-3 sm:py-3.5 pr-2 text-xs sm:text-sm text-[#404750] placeholder-slate-400 focus:outline-none min-w-0"
        />
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearchFunc}
        type="button"
        className="bg-[#1e73be] hover:bg-[#165a94] text-white text-xs sm:text-sm font-semibold px-3 sm:px-5 py-3 sm:py-4 rounded-r-xl rounded-l-none transition-all duration-300 active:scale-95 shrink-0"
      >
        <span className="inline sm:hidden">Search</span>
        <span className="hidden sm:inline">Search Here</span>
      </button>
    </div>
  );
};

export default SearchBar;
