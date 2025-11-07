import api from "./api";

export const createBooking = async (payload) => {
  const res = await api.post("/bookings", payload);
  return res.data;
};

export const getBookingStatus = async (id) => {
  const res = await api.get(`/bookings/${id}/status`);
  return res.data;
};

export const updateBookingStatus = async (id, status) => {
  const res = await api.patch(`/bookings/${id}`, { status });
  return res.data;
};
