import api from "./api";

export const makePayment = async (payload) => {
  const res = await api.post("/payments", payload);
  return res.data;
};

export const getWalletBalance = async (userId) => {
  const res = await api.get(`/wallet/${userId}`);
  return res.data;
};
