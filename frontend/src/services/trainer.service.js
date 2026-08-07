import api from "../api/axios";

export const getTrainers = async () => {
  const response = await api.get("/trainers");
  return response.data;
};

export const getTrainer = async (id) => {
  const response = await api.get(`/trainers/${id}`);
  return response.data;
};

export const createTrainer = async (data, token) => {
  const response = await api.post("/trainers", data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const updateTrainer = async (id, data, token) => {
    console.log(id, data, token);
  const response = await api.put(`/trainers/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const deleteTrainer = async (id, token) => {
  const response = await api.delete(`/trainers/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
