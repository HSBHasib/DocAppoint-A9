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
