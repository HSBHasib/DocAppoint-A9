// Get all doctors data
export const getAllDoctorData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`);
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