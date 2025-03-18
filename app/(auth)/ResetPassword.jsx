import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./auth.css";
import { resetPassword } from "./../../services/authService";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // State Variables
  const [loading, setLoading] = useState(false);

  // Get Params
  const { token } = useParams();

  // navigate
  const navigate = useNavigate();

  // Verify Email
  const resetPasswordVerification = async (data) => {
    setLoading(true);
    try {
      const { success, message } = await resetPassword(token, data);
      if (success) {
        Swal.fire({
          title: message,
          timer: 1500,
          icon: "success",
        });
        setLoading(false);
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      }
    } catch (error) {
      Swal.fire({
        title: "Something went wrong",
        icon: "error",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="verification_email p-10 flex justify-center items-center"
        style={{ backgroundColor: "#070a13", height: "100vh", width: "100vw" }}
      >
        <form
          onSubmit={handleSubmit(resetPasswordVerification)}
          className="verification_email_form"
          style={{
            minWidth: "600px",
            height: "150px",
            margin: "0 auto",
            padding: "1rem",
            backgroundColor: "#12141d",
          }}
        >
          <label htmlFor="" className="text-light_text text-sm mb-3">
            New Password
          </label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border-none text-light_text focus:outline-none"
            style={{ backgroundColor: "#232839", borderRadius: "3px" }}
          />
          {errors.password && (
            <p className="text-sm mb-4" style={{ color: "rgb(255, 60, 60)" }}>
              {errors.password.message}
            </p>
          )}
          <button
            disabled={loading}
            className={`w-full bg-light_theme_primary text-white py-2 rounded-[25px]`}
          >
            {loading ? (
              <ClipLoader color="#fff" size={20} />
            ) : (
              "Reset Your Password"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
