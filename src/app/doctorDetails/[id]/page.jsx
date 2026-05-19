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
import AppointmentBookForm from "@/components/AppointmentBookForm";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const DoctorDetails = async ({ params }) => {
  const { id } = await params;

  // Accees Token
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const doctorData = await getDoctorDataById(id, token);

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
    <div className="bg-[#f4f7fa] pb-12 px-4 sm:px-6 lg:px-8">
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
                <AppointmentBookForm doctorData={doctorData} />
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
            {/* Professional Biography Card */}
            <div className="sm:col-span-1 col-span-2 bg-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 relative">
              <h3 className="text-xl font-semibold text-[#191C20] flex items-center gap-2">
                <HiOutlineDocumentText size={22} className="text-[#1e73be]" />{" "}
                Professional Biography
              </h3>
              <p className="text-xs sm:text- leading-relaxed text-[#404750] font-medium whitespace-pre-line tracking-wide">
                {description}
              </p>

              <span
                style={{ backgroundColor: "rgba(0, 168, 150, 0.1)" }}
                className="text-xs font-semibold text-[#00a896] px-3 py-1 rounded-full"
              >
                {specialty} Specialist
              </span>

              <div className="absolute top-3 right-3">
                <p
                  style={{ backgroundColor: "rgba(30, 115, 190, 0.1)" }}
                  className="text-[10px] font-semibold text-[#1e73be] animate-bounce px-3 py-1 rounded-full"
                >
                  Consultation Fee: {fee}TK
                </p>
              </div>
            </div>

              {/* Location Card */}
            {/* <div> */}
              <div className="sm:col-span-1 col-span-2 bg-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
                <h3 className="text-xl font-semibold text-[#191C20] flex items-center gap-2">
                  <HiOutlineLocationMarker
                    size={22}
                    className="text-[#1e73be]"
                  />{" "}
                  Practice Location
                </h3>

                <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch">
                  <div className="flex flex-col justify-center space-y-2 flex-1 max-w-sm">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#191C20]">
                        {hospital}
                      </h4>
                      <p className="text-xs text-[#404750] font-semibold leading-relaxed">
                        <span className="font-bold">Location:</span> Shahbagh,{" "}
                        {location}, Bangladesh
                      </p>
                    </div>

                    <div className="space-y-2 pt-1 text-xs text-[#404750] font-medium">
                      <div className="flex items-center gap-1">
                        <HiOutlinePhone className="w-4 h-4 text-[#1e73be]" />
                        <span>+8801253767844</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HiOutlineMail className="w-4 h-4 text-[#1e73be]" />
                        <span className="hover:underline cursor-pointer">
                          {name.toLowerCase()}@gmail.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* </div> */}

            {/* Availability Card (Morning/Evening Session) */}
            <div className="bg-white col-span-2 rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="text-xl font-semibold text-[#191C20] flex items-center gap-2">
                <HiOutlineClock className="w-5 h-5 text-[#1e73be]" />{" "}
                Availability
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Morning Session Box */}
                <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100/70 rounded-xl">
                  <div className="p-3 bg-blue-50 text-blue-500 rounded-xl shrink-0">
                    <HiOutlineSun className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#191C20]">
                      Morning Session
                    </h4>
                    <p className="text-sm text-[#404750] font-normal mt-0.5">
                      {availability?.[0] || "08:30 AM - 12:30 PM"}
                    </p>
                  </div>
                </div>

                {/* Evening Session Box */}
                <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100/70 rounded-xl">
                  <div className="p-3 bg-indigo-50 text-indigo-500 rounded-xl shrink-0">
                    <HiOutlineMoon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#191C20]">
                      Evening Session
                    </h4>
                    <p className="text-sm text-[#404750] font-normal mt-0.5">
                      {availability?.[1] || "04:00 PM - 07:00 PM"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;

