"use client";

import React from "react";
import { Button, Modal, Surface } from "@heroui/react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { UpdateAppointmentFunc } from "@/lib/backendData";

const UpdateAppointmentData = ({ appointment }) => {
  const { data: session } = authClient.useSession();
  const patient = session?.user;
  const patientId = patient?.id;

  const appointmentId = appointment?._id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      doctorName: appointment?.doctorName,
      patientName: appointment?.patientName,
      date: appointment?.date,
      time: appointment?.time,
      reason: appointment?.reason,
    },
  });

  const formHandaler = async (data) => {
    // Access Token
    const getToken = await authClient.token();
    const token = getToken?.data?.token;

    const { doctorName, patientName, date, time, reason } = data;

    const updatedData = {
      doctorName,
      patientName,
      date,
      time,
      reason,
    };
    await UpdateAppointmentFunc(updatedData, appointmentId, token);
  };

  return (
    <div>
      <Modal>
        <Button
          variant="secondary"
          className="bg-[#f0f7ff] text-[#1e73be] border rounded-xl"
        >
          Update
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-lg">
              <Modal.CloseTrigger className="z-50 absolute right-7 top-7" />
              <Modal.Header>
                <Modal.Heading className="text-xl font-bold">
                  Update Appointment
                </Modal.Heading>
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
                        className="w-full bg-[#1e73be] hover:bg-[#165a94] text-white font-medium py-3 px-4 rounded-xl shadow-xs transition-all duration-300 active:scale-98 text-sm sm:text-base"
                      >
                        Save Chnages
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

export default UpdateAppointmentData;

