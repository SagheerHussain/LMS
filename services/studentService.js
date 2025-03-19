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
  }
};

export const getAccountRequests = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/students/account-requests`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching account requests:", error);
  }
}

export const updateAccountRequestStatus = async (id, data) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_URL}/api/students/update-status/${id}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error updating account request status:", error);
  }
}

// Get All Students
export const getStudents = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/students`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
  }
};

// Get Students Length
export const getStudentsLength = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/students/length`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching students length:", error);
  }
};

// Get Unverified Students length
export const getUnverifiedStudentsLength = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/students/unverified-length`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching unverified students length:", error);
  }
};

// Update Student Details
export const updateStudentDetails = async (id, data) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_URL}/api/students/update/${id}`,
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating student:", error);
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
  }
};

