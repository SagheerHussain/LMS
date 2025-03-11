import axios from "axios";

// Create Student
export const createStudent = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/auth/register`,
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding student:", error);
    alert("Failed to add student");
  }
};

// Login Account
export const loginAccount = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    alert("Failed to log in");
  }
};

// Get Student Details
export const getStudentDetails = async (id, token) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/students/student/${id}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    alert("Failed to fetch students");
  }
};

// Get All Students
export const getAllStudents = async (token) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/students`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    alert("Failed to fetch students");
  }
};

// Update Student Details
export const updateStudentDetails = async (id, data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/students/update/${id}`,
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating student:", error);
    alert("Failed to update student");
  }
};

// Delete Student
export const deleteStudent = async (id) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/api/students/delete/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting student:", error);
    alert("Failed to delete student");
  }
};

