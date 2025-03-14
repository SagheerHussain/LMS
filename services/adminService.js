import axios from "axios";

export const createAdminAccount = async (data) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/api/auth/admin`,
            data,
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating admin account:", error);
    }
}

export const getAdminDetails = async (id, token) => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/auth/admin/${id}`,
            {
                headers: { "Authorization": `Bearer ${token}` },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching admin details:", error);
    }
}

export const getAdmins = async (token) => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/auth/admin`,
            {
                headers: { "Authorization": `Bearer ${token}` },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching admin details:", error);
    }
}

export const updateAdmin = async (id, data, token) => {
    try {
        const response = await axios.put(
            `${import.meta.env.VITE_BASE_URL}/api/auth/admin/update/${id}`,
            data,
            {
                headers: { "Authorization": `Bearer ${token}` },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error updating admin:", error);
    }
}

export const deleteAdmin = async (id, token) => {
    try {
        const response = await axios.delete(
            `${import.meta.env.VITE_BASE_URL}/api/auth/admin/delete/${id}`,
            {
                headers: { "Authorization": `Bearer ${token}` },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error deleting admin:", error);
    }
}