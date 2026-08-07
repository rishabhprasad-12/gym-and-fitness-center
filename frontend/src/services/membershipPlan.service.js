import api from "../api/axios.js";

export const getMembershipPlans = async () => {
    const response = await api.get("/membership-plans");
    return response.data;
};

export const getMembershipPlan = async (id) => {
    const response = await api.get(`/membership-plans/${id}`);
    return response.data;
};

export const createMembershipPlan = async (data, token) => {
    const response = await api.post("/membership-plans", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
};

export const updateMembershipPlan = async (id, data, token) => {
    const response = await api.put(`/membership-plans/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const deleteMembershipPlan = async (id, token) => {
    const response = await api.delete(`/membership-plans/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};
