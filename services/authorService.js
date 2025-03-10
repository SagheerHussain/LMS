import axios from "axios";

// Get All Authors
export const getAuthors = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/authors`);
        return response.data;
    } catch (error) {
        console.error("Error fetching authors:", error);
    }
}

// Get Single Author
export const getAuthor = async (id) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/authors/author/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching author:", error);
    }
}

// Create Author
export const createAuthor = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/authors`, data);
        return response.data;
    } catch (error) {
        console.error("Error creating author:", error);   
    }
};

// Update Author
export const updateAuthor = async (id, data) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/authors/update/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Error updating author:", error);
    }
};

// Delete Author
export const deleteAuthor = async (id) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/authors/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting author:", error);
    }
};
