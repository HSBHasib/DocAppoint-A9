import React from "react";

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

  return <div>This is Booking Component</div>;
};

export default AppointmentBookingCard;
