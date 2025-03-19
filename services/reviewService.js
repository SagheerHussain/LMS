import axios from "axios";

// Get Reviews By Book
export const getReviews = async (token) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/reviews`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching reviews by book:", error);
    }
}

export const getReviewsByBook = async (id, token) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/reviews/review/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching reviews by book:", error);
    }
}

// Get Approve Books
export const getApprovedReviews = async (id, token) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/reviews/approved/review/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching approved reviews:", error);
    }
}

// Create Review
export const createReview = async (data, token) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/reviews`, data, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error creating review:", error);
        alert("Failed to create review");
    }
}

// Update Review
export const updateReview = async (id, data, token) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/reviews/update/${id}`, data, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error updating review:", error);
        alert("Failed to update review");
    }
}
