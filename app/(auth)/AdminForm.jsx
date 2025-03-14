import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import { Logo } from "@/components/index";
import { Link } from "react-router-dom";
import "./auth.css";
import { createAdminAccount } from "../../services/adminService";
import axios from "axios";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const AdminForm = () => {
  // State Variables
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Value Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const admin = await createAdminAccount(data);
      if (admin.success) {
        Swal.fire({
          title: "Admin Created Successfully",
          icon: "success",
        });
        setLoading(false);
        // navigate
        setTimeout(() => {
          navigate("/signin")
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
            Register As Administrator
          </h2>
          <p className="text-light_text pt-2 pb-6 sm:text-base text-sm">
            Access the vast collection of resources, and stay updated
          </p>
          <form onSubmit={handleSignUp} className="auth_user_form">
            <label htmlFor="" className="text-light_text text-sm pb-3">
              Full Name
            </label>
            <input
              onChange={handleChange}
              type="name"
              required
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 mb-4 border-none text-light_text focus:outline-none"
              style={{ backgroundColor: "#232839", borderRadius: "3px" }}
            />

            <label htmlFor="" className="text-light_text text-sm pb-3">
              Email
            </label>
            <input
              onChange={handleChange}
              name="email"
              required
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-4 border-none text-light_text focus:outline-none"
              style={{ backgroundColor: "#232839", borderRadius: "3px" }}
            />

            <label htmlFor="" className="text-light_text text-sm mb-3">
              Password
            </label>
            <input
              type="password"
              onChange={handleChange}
              required
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-4 border-none text-light_text focus:outline-none"
              style={{ backgroundColor: "#232839", borderRadius: "3px" }}
            />

            <button
              disabled={loading}
              className={`${
                loading && "opacity-[.5]"
              } w-full bg-light_theme_primary text-white py-2 rounded mt-4`}
            >
              {loading ? <ClipLoader color="#fff" /> : "Register Account"}
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

export default AdminForm;
