import api from "./api";

// 🏷️ Get all service categories
export const getCategories = async () => {
  const res = await api.get("/categories");
  return res.data;
};

// 🌟 Get testimonials (static or from backend)
export const getTestimonials = async () => {
  const res = await api.get("/testimonials");
  return res.data;
};
