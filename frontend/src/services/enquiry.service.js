import api from "../api/axios";

export const getEnquiries = async () => {
  const response = await api.get("/enquiries");

  return response.data;
};

export const getEnquiry = async (id, token) => {
  const response = await api.get(`/enquiries/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const createEnquiry = async (data) => {
  const response = await api.post("/enquiries", data);

  return response.data;
};

export const updateEnquiry = async (id, data, token) => {
  const response = await api.put(`/enquiries/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const deleteEnquiry = async (id, token) => {
  const response = await api.delete(`/enquiries/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
