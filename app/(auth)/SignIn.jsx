import React, { useEffect, useState } from "react";
import AuthLayout from "./AuthLayout";
import { Logo } from "@/components/index";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./auth.css";
import { loginAccount } from "../../services/studentService";
import { ClipLoader } from "react-spinners";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("student");

  const navigate = useNavigate();

  // Auto-update email/password based on role selection
  useEffect(() => {
    if (role === "student") {
      setValue("email", "user@skynetsilicon.com");
      setValue("password", "user123");
    } else {
      setValue("email", "info@skynetsilicon.com");
      setValue("password", "admin123");
    }
  }, [role, setValue]);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSignIn = async (data) => {
    setLoading(true);
    try {
      const { success, user, token } = await loginAccount(data);
      if (success) {
        Swal.fire({
          title: "Login Successfully",
          timer: 1200,
          icon: "success",
        });

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(token));
        setLoading(false);

        setTimeout(() => {
          const user = JSON.parse(localStorage.getItem("user"));
          if (user.role === "Admin") {
            navigate("/dashboard");
          } else {
            navigate("/");
          }
        }, 1700);
      }
    } catch (error) {
      Swal.fire({
        title: "Email or Password is incorrect",
        icon: "error",
      });
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div
        className="auth_form p-10 flex flex-col items-center justify-center min-h-full rounded-[25px]"
        style={{ backgroundColor: "#12141d" }}
      >
        <Logo />
        <h2 className="text-lg sm:text-2xl text-light_text font-bold mt-4">
          Welcome To LibertyBooks
        </h2>
        <p className="text-light_text pt-2 pb-6 text-sm sm:text-base">
          Access the vast collection of resources, and stay updated
        </p>

        <form onSubmit={handleSubmit(handleSignIn)} className="auth_user_form">
          {/* Email */}
          <label className="text-light_text text-sm pb-3">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border-none text-light_text focus:outline-none"
            style={{ backgroundColor: "#232839", borderRadius: "3px" }}
          />
          {errors.email && (
            <p className="text-sm mb-4 text-red-500">{errors.email.message}</p>
          )}

          {/* Role Select */}
          <FormControl fullWidth>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              value={role}
              onChange={handleChange}
              label="Select Role"
              className="w-full px-4 py-0 mb-4 border-none text-light_text focus:outline-none"
              style={{
                backgroundColor: "#232839",
                borderRadius: "50px",
                color: "#fff",
              }}
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>

          {/* Password */}
          <label className="text-light_text text-sm mb-3">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border-none text-light_text focus:outline-none"
            style={{ backgroundColor: "#232839", borderRadius: "3px" }}
          />
          {errors.password && (
            <p className="text-sm mb-4 text-red-500">
              {errors.password.message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-light_theme_primary text-white py-2 rounded-[25px] mt-4"
          >
            {loading ? <ClipLoader size={20} color="#fff" /> : "Login Account"}
          </button>

          <p className="mt-4 text-light_text">
            Don’t have an account{" "}
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
            <Link to={`/resend-email`} className="text-zinc-400">
              Forget Password?
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
