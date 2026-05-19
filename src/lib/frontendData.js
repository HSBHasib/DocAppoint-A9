// Get all doctors data and filter doctor data by search
export const getAllDoctorData = async (search = '') => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors?search=${search}`);
    const data = await res.json() || [];
    return data;
}

// Get Top rated doctors data
export const getTopDoctorData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/topDoctors`);
    const data = await res.json() || [];
    return data;
}

// Get Doctor Details base on their id
export const getDoctorDataById = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`)
    const data = await res.json();
    return data;
}

// Get All Appointments Data based on patient id
export const getAllAppointmentsData = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${id}`);
    const data = await res.json() || [];
    return data;
}
