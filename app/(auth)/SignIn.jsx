import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import { Logo } from "@/components/index";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./auth.css";
import { loginAccount } from "../../services/studentService";
import { ClipLoader } from "react-spinners";

const SignIn = () => {
  // React Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // State Variables
  const [loading, setLoading] = useState(false);

  // Navigate 
  const navigate = useNavigate();

  // Login Form
  const handleSignIn = async (data) => {
    setLoading(true);
    try {
      const { success, user, token } = await loginAccount(data);
      if (success) {
        Swal.fire({
          title: "Login Successfully",
          timer: 2000,
          icon: "success",
        });
        setLoading(false);
        // Stored User in Local Storage
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(token));
        // navigate
        setTimeout(() => {
          navigate("/")
        }, 3000);
      }
    } catch (error) {
      Swal.fire({
        title: "Something went wrong",
        icon: "error",
      });
      console.log(error);
    }
  };

  return (
    <>
      <AuthLayout>
        <div
          className="auth_form p-10 flex flex-col items-center justify-center min-h-screen"
          style={{ backgroundColor: "#12141d" }}
        >
          <Logo />
          <h2 className="text-lg sm:text-2xl text-light_text font-bold mt-4">
            Welcome To LibertyBooks
          </h2>
          <p className="text-light_text pt-2 pb-6 text-sm sm:text-base ">
            Access the vast collection of resources, and stay updated
          </p>
          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="auth_user_form"
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
            <button className="w-full bg-light_theme_primary text-white py-2 rounded mt-4">
              {loading ? <ClipLoader color="#fff" /> : "Login Account"}
            </button>

            <p className="mt-4 text-light_text">
              Dont have an account{" "}
              <Link
                to={`/signup`}
                style={{ paddingRight: "5px" }}
                className="text-light_theme_primary inline-block"
              >
                Register
              </Link>
              here
            </p>

            <div className="mt-4">
              <Link to={`/resend-email`} className="text-zinc-400 ">
                Forget Password?
              </Link>
            </div>
          </form>
        </div>
      </AuthLayout>
    </>
  );
};

export default SignIn;
