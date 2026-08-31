import api from "../api/axios";

export const getMembershipRegistrations = async (token) => {
  const response = await api.get("/membership-registrations", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getMembershipRegistration = async (id, token) => {
  const response = await api.get(`/membership-registrations/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getMyMembershipRegistrations = async (token) => {
  const response = await api.get("/membership-registrations/my", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getCurrentMembershipRegistration = async (token) => {
  const response = await api.get("/membership-registrations/current", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createMembershipRegistration = async (data, token) => {
  const response = await api.post("/membership-registrations", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateMembershipRegistration = async (id, data, token) => {
  const response = await api.put(`/membership-registrations/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteMembershipRegistration = async (id, token) => {
  const response = await api.delete(`/membership-registrations/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
