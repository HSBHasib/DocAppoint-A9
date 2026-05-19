"use client";

import React from "react";
import { Button, Modal, Surface } from "@heroui/react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { appointmentsFunc } from "@/lib/backendData";

const AppointmentBookForm = ({ doctorData }) => {

  const { data: session } = authClient.useSession();
  const patient = session?.user;
  const patientId = patient?.id;

  const { _id, name, fee, specialty, hospital } = doctorData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      doctorName: name,
    },
  });

  const formHandaler = async (data) => {
    // Access Token
    const getToken = await authClient.token();
    const token = getToken?.data?.token;

    const {
      doctorName,
      userEmail,
      patientName,
      gender,
      phone,
      date,
      time,
      reason,
    } = data;

    const bookingAppointment = {
      doctorId: _id,
      patientId: patientId,
      doctorName,
      email: userEmail,
      patientName,
      gender,
      phone,
      date,
      time,
      reason,
    };

    await appointmentsFunc(bookingAppointment, token)

  };

  return (
    <div>
      <Modal>
        <Button
          variant="secondary"
          className="bg-[#1e73be] hover:bg-[#165a94] text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow-sm transition-all active:scale-95 duration-300"
        >
          Book Appointment
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-lg">
              <Modal.CloseTrigger className="z-50 absolute right-7 top-7" />
              <Modal.Header>
                <div className="bg-[#f8fafc] border border-slate-200/60 rounded-2xl p-4 relative">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-4 pt-1">
                      <div className="flex items-center gap-3.5">
                        <div className="space-y-1">
                          <span className="block text-xs font-semibold text-[#1e73be] uppercase">
                            CONFIRMED SPECIALIST
                          </span>
                          <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                            {name}
                          </h3>
                          <p className="text-xs text-[#404750] font-semibold">
                            {specialty} •{" "}
                            {hospital?.split(" ")[0] || "Consultant"}
                          </p>
                        </div>
                      </div>

                      <div className="text-right -space-y-1">
                        <span className="block text-xs font-semibold text-[#404750]">
                          Consultation Fee
                        </span>
                        <span className="text-base font-bold text-[#1e73be]">
                          {fee}TK
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Header>
              <Modal.Body className="pb-6 pt-3 px-3">
                <Surface variant="default">
                  <form
                    onSubmit={handleSubmit(formHandaler)}
                    className="space-y-4"
                  >
                    {/* Doctor Name */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold px-2 text-[#404750] mb-1">
                        Doctor Name
                      </label>
                      <input
                        type="text"
                        readOnly
                        className="block w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs sm:text-sm text-[#404750] font-medium focus:outline-none cursor-not-allowed"
                        {...register("doctorName")}
                      />
                    </div>

                    {/* patient Email */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold px-2 text-[#404750] mb-1">
                        Patient Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="block w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                        {...register("userEmail", { required: true })}
                      />
                      {errors.userEmail && (
                        <p className="text-red-500 px-2 text-xs pt-0.5">
                          This filed is required
                        </p>
                      )}
                    </div>

                    {/* Patient Name */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold px-2 text-[#404750] mb-1">
                        Patient Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter patient name"
                        className="block w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm text-[#404750] focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                        {...register("patientName", { required: true })}
                      />
                      {errors.patientName && (
                        <p className="text-red-500 px-2 text-xs pt-0.5">
                          This filed is required
                        </p>
                      )}
                    </div>

                    {/* Gender & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold px-2 text-[#404750] mb-1">
                          Gender *
                        </label>
                        <select
                          className="block w-full px-4 py-2.5 bg-white border border-cyan-500/60 rounded-xl text-xs sm:text-sm text-[#404750] font-medium focus:outline-none appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://w3.org' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                            backgroundPosition: "right 1rem center",
                            backgroundSize: "1.25rem",
                            backgroundRepeat: "no-repeat",
                          }}
                          {...register("gender")}
                        >
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-semibold px-2 text-[#404750] mb-1">
                          Phone *
                        </label>
                        <input
                          type="text"
                          placeholder="01XXXXXXXXX"
                          className="block w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-[#404750] focus:outline-none focus:border-cyan-500 transition-all"
                          {...register("phone", { required: true })}
                        />
                        {errors.phone && (
                          <p className="text-red-500 px-2 text-xs pt-0.5">
                            This filed is required
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold px-2 mb-1 text-[#404750]">
                          Date *
                        </label>
                        <input
                          type="date"
                          className="block w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-[#404750] focus:outline-none focus:border-cyan-500 transition-all uppercase"
                          {...register("date", { required: true })}
                        />
                        {errors.date && (
                          <p className="text-red-500 px-2 text-xs pt-0.5">
                            This filed is required
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold px-2 mb-1 text-[#404750]">
                          Time *
                        </label>
                        <input
                          type="time"
                          className="block w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-[#404750] focus:outline-none focus:border-cyan-500 transition-all"
                          {...register("time", { required: true })}
                        />
                        {errors.time && (
                          <p className="text-red-500 px-2 text-xs pt-0.5">
                            This filed is required
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Reason */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold px-2 mb-1 text-[#404750]">
                        Reason (optional)
                      </label>
                      <textarea
                        rows="4"
                        placeholder="Brief reason for visit"
                        className="block w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-[#404750] focus:outline-none focus:border-cyan-500 transition-all "
                        {...register("reason")}
                      />
                    </div>

                    {/* Confirm Booking Button */}
                    <div className="pt-2">
                      <Button
                      slot="close"
                        type="submit"
                        className="w-full bg-[#1e73be] hover:bg-[#165a94] text-white font-semibold py-3 px-4 rounded-xl shadow-xs transition-all duration-300 active:scale-98 text-sm sm:text-base"
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default AppointmentBookForm;

