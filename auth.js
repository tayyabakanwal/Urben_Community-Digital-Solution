import api from "./api";

// 🧾 Signup User
export const signup = async (payload) => {
  const res = await api.post("/auth/signup", payload);
  return res.data;
};

// 🔑 Login User
export const login = async (payload) => {
  const res = await api.post("/auth/login", payload);
  return res.data;
};

// 🔄 Send OTP (for forgot password)
export const sendOTP = async (email) => {
  const res = await api.post("/auth/send-otp", { email });
  return res.data;
};

// 🔁 Reset Password using OTP
export const resetPassword = async (payload) => {
  const res = await api.post("/auth/reset-password", payload);
  return res.data;
};
