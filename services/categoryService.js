import axios from "axios";

// Get All Categories
export const getCategories = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/categories`);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}

// Get Single Category
export const getCategory = async (id) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/categories/category/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching category:", error);
    }
}

// Create Category
export const createCategory = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/categories`, data);
        return response.data;
    } catch (error) {
        console.error("Error creating category:", error);
    }
};

// Update Category
export const updateCategory = async (id, data) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/categories/update/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Error updating category:", error);
    }
};

// Delete Category
export const deleteCategory = async (id) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/categories/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting category:", error);
    }
};

// Delete Many Categories
export const deleteManyCategories = async (ids) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/api/categories/delete-many?ids=${ids.join(",")}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting categories:", error);
  }
};