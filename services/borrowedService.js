import axios from "axios";
// Get All Borrowed Books
export const getBorrowedBooks = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/borrowed/borrowed-books`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching borrowed books:", error);
        alert("Failed to fetch borrowed books");
    }
}

// Get All Borrowed Request
export const getBorrowedRequests = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/borrowed/borrowed-requests`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching borrowed requests:", error);
        alert("Failed to fetch borrowed requests");
    }
}

// Get Borrowed History
export const getBorrowedHistory = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/borrowed/borrowed-history`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching borrowed history:", error);
        alert("Failed to fetch borrowed history");
    }
}

// Get Borrowed Request by ID
export const getBorrowedRequestById = async (id, token) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/borrowed/borrowed-requests/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching borrowed request by ID:", error);
    }
}

// Get Borrowed Books by User ID
export const getBorrowedBooksById = async (id, token) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/borrowed/borrowed-books/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching borrowed requests by user ID:", error);
    }
}

// Get Borrowed History by ID
export const getBorrowedHistoryById = async (id, token) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/borrowed/borrowed-history/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching borrowed history by ID:", error);
        alert("Failed to fetch borrowed history by ID");
    }
}

// Create Borrowed Request
export const createBorrowedRequest = async (data, token) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/borrowed`, data, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error creating borrowed request:", error);
        alert("Failed to create borrowed request");
    }
}

// Update Borrowed Request
export const updateBorrowedRequestStatus = async (id, data) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/borrowed/update/${id}`, data, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error updating borrowed request:", error);
        alert("Failed to update borrowed request");
    }
}
