import React from "react";
import { getAllDoctorData } from "@/lib/frontendData";
import DoctorCard from "@/components/HomePage/DoctorCard";
import { FiSearch } from "react-icons/fi";

const AllAppointmentsPage = async () => {
  const allDoctors = await getAllDoctorData();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7 ">
      {/* Heading */}
      <div className="space-y-1.5 flex flex-col items-center text-center w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#191C20] tracking-tight">
          Available Appointments
        </h1>
        <p className="text-xs sm:text-sm text-[#404750]">
          Find and book top-rated verified medical specialists instantly.
        </p>

      
        <div className="flex items-center justify-between bg-white border my-5 border-slate-200/80 pl-4 rounded-xl overflow-hidden  w-full max-w-xl ">
          <div className="flex items-center gap-1 flex-1">
            <FiSearch size={22} className="text-[#404750]" />
            <input
              type="text"
              placeholder="Search by doctor name or speciality..."
              className="w-full bg-transparent py-3.5 text-sm text-[#404750] placeholder-slate-400 focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <button
            type="button"
            className="bg-[#1e73be] hover:bg-[#165a94] text-white text-sm font-semibold px-4 py-4 rounded-r-xl rounded-l-none transition-all duration-300 active:scale-95 shadow-sm"
          >
            Search Here
          </button>
        </div>
      </div>


      
    </div>
  );
};

export default AllAppointmentsPage;

