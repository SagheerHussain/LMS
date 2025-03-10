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
        alert("Failed to create admin account");
    }
}