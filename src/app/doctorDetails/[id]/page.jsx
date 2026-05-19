import { getDoctorDataById } from "@/lib/frontendData";
import React from "react";
import {
  HiStar,
  HiOutlineDocumentText,
  HiOutlineClock,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const DoctorDetails = async ({ params }) => {
  const { id } = await params;

  const doctorData = await getDoctorDataById(id);

  const {
    name,
    specialty,
    image,
    experience,
    availability,
    description,
    hospital,
    location,
    fee,
    rating,
  } = doctorData;

  return (
    <div className="min-h-screen bg-[#f4f7fa] py-8 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Back Button to go all-appointments page */}
        <Link href="/all-appointments">
          <button className="flex items-center my-5 gap-2 text-sm font-semibold text-[#191C20] active:scale-95 hover:underline transition-all duration-300">
            <FiArrowLeft size={16} /> Back to all appointments
          </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Profile card - (left side) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="relative  aspect-3/2 rounded-full overflow-hidden shadow-sm">
              <Image
                src={image}
                alt={name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1 my-3 text-center">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <h1 className="text-xl font-bold text-slate-800 tracking-tight">
                  {name}
                </h1>
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  ● Verified Specialist
                </span>
              </div>

              <div className="space-y-1 text-center">
                <p className="text-xs font-bold text-[#1e73be] uppercase tracking-wider">
                  {specialty}
                </p>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  variant="secondary"
                  className="bg-[#1e73be] hover:bg-[#165a94] text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow-sm transition-all active:scale-95 duration-300"
                >
                  Book Appointment
                </button>
              </div>
            </div>

            <div className="border-t flex justify-center gap-6 pt-5 mt-6">
              <div className="text-center font-semibold flex-1">
                <p className="text-[17px] text-slate-800">{experience}</p>
                <span className="text-[#404750] text-xs font-medium">
                  Experience
                </span>
              </div>

              {/* Devider */}
              <div className="border-l border-slate-200"></div>

              <div className="text-[17px] font-semibold text-center flex-1">
                <p className="flex items-center justify-center gap-1 text-slate-800">
                  <HiStar size={18} className="text-amber-400" /> {rating}/5
                </p>
                <span className="text-[#404750] text-xs font-medium">
                  Rating
                </span>
              </div>
            </div>
          </div>

          {/* Doctor Detials - (Right side) */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-5">
            Right Side Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
