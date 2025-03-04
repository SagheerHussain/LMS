import React from "react";
import AuthLayout from "./AuthLayout";
import { Logo } from "@/components/index";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./auth.css";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <AuthLayout>
        <div
          className="auth_form p-10 w-full max-w-md flex flex-col items-center justify-center min-h-screen"
          style={{ backgroundColor: "#12141d" }}
        >
          <Logo />
          <h2 className="text-lg sm:text-2xl text-light_text font-bold mt-4">
            Welcome To LibertyBooks
          </h2>
          <p className="text-light_text pt-2 pb-6 sm:text-base text-sm">
            Access the vast collection of resources, and stay updated
          </p>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="auth_user_form"
          >
            <label htmlFor="" className="text-light_text text-sm pb-3">
              Full Name
            </label>
            <input
              type="name"
              {...register("fullName", { required: "Full Name is required" })}
              placeholder="Full Name"
              className="w-full px-4 py-2 mb-4 border-none text-light_text focus:outline-none"
              style={{ backgroundColor: "#232839", borderRadius: "3px" }}
            />
            {errors.fullName && (
              <p className="text-sm mb-4" style={{ color: "rgb(255, 60, 60)" }}>
                {errors.fullName.message}
              </p>
            )}
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
            <label htmlFor="" className="text-light_text text-sm mb-3">
              Password
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
            <label htmlFor="" className="text-light_text text-sm mb-3">
              Upload University Card
            </label>
            <input
              {...register("universityCard", {
                required: "University Card is required",
              })}
              type="file"
              placeholder="Upload University Card"
              className="w-full px-4 py-2 mb-4 border-none text-light_text focus:outline-none"
              style={{ backgroundColor: "#232839", borderRadius: "3px" }}
            />
            {errors.universityCard && (
              <p className="text-sm mb-4" style={{ color: "rgb(255, 60, 60)" }}>
                {errors.universityCard.message}
              </p>
            )}
            <button className="w-full bg-light_theme_primary text-white py-2 rounded mt-4">
              Register
            </button>

            <p className="mt-4 text-light_text">
              Already have an account{" "}
              <Link
                to={`/signin`}
                style={{ paddingRight: "5px" }}
                className="text-light_theme_primary inline-block"
              >
                Login
              </Link>
              here
            </p>
          </form>
        </div>
      </AuthLayout>
    </>
  );
};

export default SignUp;
