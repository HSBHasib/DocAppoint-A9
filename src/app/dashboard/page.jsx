import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import ProfileCard from "@/components/Dashboard/ProfileCard";
import { getAllAppointmentsData } from "@/lib/frontendData";
import AppointmentBookingCard from "@/components/Dashboard/AppointmentBookingCard";
import Link from "next/link";

const DashboardPage = async ({ searchParams }) => {
  const SearchItem = await searchParams;
  const activeTab = SearchItem?.tab || "bookings";

  // Get User Data From Session
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const patient = session?.user;
  const patientId = patient?.id;

  // Call the appoinment func
  const appointments = await getAllAppointmentsData(patientId);

  return (
    <div className=" sm:min-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 font-sans text-left">
      <div className="space-y-3">
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#191C20] tracking-tight">
            Dashboard
          </h1>
        </div>

        {/* Bookings and Profile Button */}
        <div className="bg-gray-100 rounded-lg p-1 inline-block space-x-2">
          <Link href="/dashboard?tab=bookings">
            <button
              className={`px-5 py-2 rounded-lg text-xs transition-all duration-200 ${
                activeTab === "bookings"
                  ? "bg-[#f0f7ff] text-[#1e73be] shadow-xs font-bold"
                  : " hover:bg-[#f0f7ff] font-semibold"
              }`}
            >
              My Bookings
            </button>
          </Link>

          <Link href="/dashboard?tab=profile">
            <button
              className={`px-5 py-2 rounded-lg text-xs transition-all duration-200 ${
                activeTab === "profile"
                  ? "bg-[#f0f7ff] text-[#1e73be] shadow-xs font-bold"
                  : " hover:bg-[#f0f7ff] font-semibold"
              }`}
            >
              Profile
            </button>
          </Link>
        </div>

        <div className="mt-4">
          {/* Check activeTab is booking or profile */}
          {activeTab === "bookings" ? (
            // First we check is any appointments patient book or not
            <div>
              {!appointments || appointments.length === 0 ? (
                <div className="bg-gray-50 shadow-xs rounded-2xl p-8 text-center border border-gray-100 text-[#404750] text-base font-medium">
                  No appointments booked yet.
                </div>
              ) : (
                <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {" "}
                  {appointments.map((appointment) => (
                    <AppointmentBookingCard
                      key={appointment._id}
                      appointment={appointment}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="max-w-sm mx-auto flex justify-center">
              <ProfileCard patient={patient} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
