import axios from "axios";

export const resendEmail = async (email) => {
 try {
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/forget-password`, {
    email: email
  });
  return response.data;
 } catch (error) {
   console.error("Error resending verification email:", error);
   alert("Failed to resend verification email");
 } 
}

export const resetPassword = async (token, password) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/reset-password/${token}`, {
      password: password
    });
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