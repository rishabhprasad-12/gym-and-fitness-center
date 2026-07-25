import api from "../api/axios.js";

export const getMembershipPlans = async () => {
    const response = await api.get("/membership-plan");
    return response.data;
};

export const getMembershipPlan = async (id) => {
    const response = await api.get(`membership-plan/${id}`);
    return response.data;
};

export const createMembershipPlans = async (data, token) => {
    const response = await api.post("/membership-plan", data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const updateMembershipPlans = async (id, data, token) => {
    const response = await api.put(`/membership-plan/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const deleteMembershipPlans = async (id, token) => {
    const response = await api.delete(`/membership-plan/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};
