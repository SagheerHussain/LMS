import axios from "axios";

// Get Reviews By Book
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
        alert("Failed to fetch reviews by book");
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
