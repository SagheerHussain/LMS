import React from "react";
import { useForm } from "react-hook-form";
import "./auth.css";

const ResendEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div
        className="verification_email p-10 flex justify-center items-center"
        style={{ backgroundColor: "#070a13", height: "100vh", width: "100vw" }}
      >
        <form
          className="verification_email_form"
          style={{
            minWidth: "600px",
            height: "150px",
            margin: "0 auto",
            padding: "1rem",
            backgroundColor: "#12141d",
          }}
        >
          <label htmlFor="" className="text-light_text text-sm pb-3">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border-none text-light_text focus:outline-none"
            style={{ backgroundColor: "#232839", borderRadius: "3px" }}
          />
          {errors.email && (
            <p className="text-sm mb-4" style={{ color: "rgb(255, 60, 60)" }}>
              {errors.email.message}
            </p>
          )}
          <button className="w-full bg-light_theme_primary text-white py-2 rounded">
            Send Verification Email
          </button>
        </form>
      </div>
    </>
  );
};

export default ResendEmail;
