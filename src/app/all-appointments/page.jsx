import React from "react";
import { getAllDoctorData } from "@/lib/frontendData";
import DoctorCard from "@/components/HomePage/DoctorCard";
import SearchBar from "@/components/HomePage/SearchBar";
import { HiOutlineSearchCircle } from "react-icons/hi";

export const metadata = {
  title: "DocAppointment - All Appointment Page",
  description: "All Doctors List of Data",
};

const AllAppointmentsPage = async ({ searchParams }) => {
  const searching = await searchParams;
  const searchResult = searching?.search || "";

  const allDoctors = await getAllDoctorData(searchResult);

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
        <>
          <SearchBar searchResult={searchResult} />
        </>
      </div>

      {/* All Appointments Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allDoctors.length > 0 ? (
          allDoctors.map((doctor, idx) => (
            <DoctorCard doctor={doctor} key={idx} />
          ))
        ) : (
          <div className="h-[30vh] flex items-center flex-col justify-center col-span-3 w-[70vw] bg-gray-50 shadow-xs rounded-2xl p-8 text-center border border-gray-100 text-[#404750] text-xl font-medium">
            <HiOutlineSearchCircle size={50} className="stroke-1 animate-bounce" />
            <h3 className="text-xl font-bold text-[#191C20] tracking-tight">
              No Results Found
            </h3>
            <p className="text-xs sm:text-sm text-[#404750] font-normal max-w-md mx-auto leading-relaxed">
              We couldn't find any specialist matching your search. Please check
              the spelling or try another keyword.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllAppointmentsPage;
