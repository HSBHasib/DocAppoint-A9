import {
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineDocumentText,
} from "react-icons/hi";
import React from "react";
import { Button } from "@heroui/react";

const AppointmentBookingCard = ({ appointment }) => {
  const {
    date,
    doctorName,
    email,
    gender,
    patientName,
    phone,
    reason,
    time,
    _id,
    doctorId,
  } = appointment;
  return (
    <div className="bg-gray-50 rounded-2xl border border-slate-200/60 p-5 sm:p-6 shadow-xs space-y-1.5 hover:shadow-md hover:shadow-[#1e73be60] transition-all duration-300">
      {/* Doctor Name */}
      <div>
        <h3 className="text-base font-bold text-[#191C20] tracking-tight">
          {doctorName}
        </h3>
      </div>
      {/* Appoinments Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium pt-2 mt-2 border-t border-gray-10">
        <div className="flex items-center gap-2">
          <HiOutlineUser className="w-4 h-4 text-[#404750]" />
          <span className="text-[#191C20]">
            Patient: <strong>{patientName}</strong>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineCalendar className="w-4 h-4 text-[#404750]" />
          <span className="text-[#191C20]">
            Date: <strong>{date}</strong>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineClock className="w-4 h-4 text-[#404750]" />
          <span className="text-[#191C20]">
            Time: <strong>{time}</strong>
          </span>
        </div>
        <div className="flex items-center gap-2 sm:col-span-2">
          <HiOutlineDocumentText className="w-4 h-4 text-[#404750]" />
          <span className="text-[#191C20]">
            Reason: <span>{reason || "General Consultation"}</span>
          </span>
        </div>
      </div>

      {/* Update and Delete Buttons */}
      <div className="flex items-center gap-3 mt-6">
        <div>
          <Button variant="outline">Update</Button>
        </div>
        <div>
          <Button variant="outline">Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBookingCard;

