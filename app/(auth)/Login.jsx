import React from "react";
import { useForm } from "react-hook-form";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import { Button } from "../../src/components/index";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg w-96">
      <h2 className="text-white text-2xl font-semibold text-center">
        Welcome Back to Liberty Books
      </h2>
      <p className="text-light_text text-center mb-6">
        Access the vast collection of resources, and stay updated
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <TextField
            fullWidth
            className="w-[300px]"
            label="Email"
            variant="outlined"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AiOutlineMail className="text-light_white" />
                </InputAdornment>
              ),
            }}
            className="bg-gray-700 text-white rounded-md"
          />
        </div>

        <div className="mb-4">
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            className="bg-gray-700 text-white rounded-md"
          />
        </div>

        <button
          className={`text-light_text bg-secondary transition-all duration-300 capitalize text-[.9rem] font-semibold px-4 py-2 mt-4`}
        >
          Create Your Account
        </button>
      </form>

      <p className="text-light_text text-center mt-4">
        Don’t have an account already?{" "}
        <span className="text-yellow-500 cursor-pointer">Register here</span>
      </p>
    </div>
  );
};

export default LoginForm;
