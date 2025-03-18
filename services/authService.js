import axios from "axios";

export const resendEmail = async (data) => {
 try {
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/forget-password`, data);
  return response.data;
 } catch (error) {
   console.error("Error resending verification email:", error);
   alert("Failed to resend verification email");
 } 
}

export const resetPassword = async (token, data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/reset-password/${token}`, data);
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    alert("Failed to reset password");
  }
}

export default {
  resendEmail,
  resetPassword
}