import api from "./api";

// Get all providers
export const getProviders = async () => {
  const res = await api.get("/providers");
  return res.data;
};

// Get single provider by ID
export const getProviderById = async (id) => {
  const res = await api.get(`/providers/${id}`);
  return res.data;
};
