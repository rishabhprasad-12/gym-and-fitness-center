import api from "../api/axios";

export const getClassSchedules = async () => {
  const response = await api.get("/class-schedules");
  return response.data;
};

export const getClassSchedule = async (id) => {
  const response = await api.get(`/class-schedules/${id}`);
  return response.data;
};

export const createClassSchedule = async (data, token) => {
  const response = await api.post("/class-schedules", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updateClassSchedule = async (id, data, token) => {
  const response = await api.put(`/class-schedules/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const deleteClassSchedule = async (id, token) => {
  const response = await api.delete(`/class-schedules/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
