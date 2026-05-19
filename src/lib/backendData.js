import { redirect } from "next/navigation";
import toast from "react-hot-toast";

// Get Doctor Appointment
export const appointmentsFunc = async (bookingAppointment, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bookingAppointment),
    },
  );
  const data = await res.json();
  if (data.insertedId) {
    toast.success("Appointment booked successfully!");
  } else {
    toast.error("Something went wrong!");
  }
};


// Cencel Appointment
export const CencelAppointmentFunc = async (appointmentId, getToken) => {
  // Access Token
  const token = await getToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${appointmentId}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();
  if (data?.deletedCount) {
    toast.success(`Appointment Cencel Successful!`);
    redirect("/dashboard");
  }
};


// Update Appointments Data
export const UpdateAppointmentFunc = async (
  updatedData,
  appointmentId,
  token,
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${appointmentId}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    },
  );
  const data = await res.json();
  if (data.modifiedCount) {
    toast.success(`Appointment Updated Successfully!`);
    redirect("/dashboard");
  }
};
