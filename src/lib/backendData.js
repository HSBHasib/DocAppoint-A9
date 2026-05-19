import toast from "react-hot-toast";

// Get Doctor Appointment
export const appointmentsFunc = async (bookingAppointment) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
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
export const CencelAppointmentFunc = async (appointmentId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${appointmentId}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
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
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${appointmentId}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
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