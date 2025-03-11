import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import { Logo } from "@/components/index";
import { Link } from "react-router-dom";
import "./auth.css";
import { createStudent } from "../../services/studentService";
import axios from "axios";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const SignUp = () => {
  // State Variables
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    universityId: "",
    universityName: "",
    universityIdCardImage: null,
    profilePicture: null,
  });

  // Value Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // File Change
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
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
      const user = await createStudent(data);
      if (user.success) {
        Swal.fire({
          title: "Student Created Successfully",
          icon: "success"
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
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
            Welcome To LibertyBooks
          </h2>
          <p className="text-light_text pt-2 pb-6 sm:text-base text-sm">
            Access the vast collection of resources, and stay updated
          </p>
          <form onSubmit={handleSignUp} className="auth_user_form">
            <label htmlFor="" className="text-light_text text-sm mb-3">
              Upload Profile Picture
            </label>
            <input
              onChange={handleFileChange}
              type="file"
              name="profilePicture"
              placeholder="Upload Profile Picture"
              className="w-full px-4 py-2 mb-4 border-none text-light_text focus:outline-none"
              style={{ backgroundColor: "#232839", borderRadius: "3px" }}
            />

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

            <label htmlFor="" className="text-light_text text-sm mb-3">
              University ID
            </label>
            <input
              type="number"
              onChange={handleChange}
              required
              name="universityId"
              placeholder="University ID"
              className="w-full px-4 py-2 mb-4 border-none text-light_text focus:outline-none"
              style={{ backgroundColor: "#232839", borderRadius: "3px" }}
            />

            <label htmlFor="" className="text-light_text text-sm mb-3">
              University Name
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="universityName"
              required
              placeholder="University Name"
              className="w-full px-4 py-2 mb-4 border-none text-light_text focus:outline-none"
              style={{ backgroundColor: "#232839", borderRadius: "3px" }}
            />

            <label htmlFor="" className="text-light_text text-sm mb-3">
              Upload University Card
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              required
              name="universityIdCardImage"
              placeholder="Upload University Card"
              className="w-full px-4 py-2 mb-4 border-none text-light_text focus:outline-none"
              style={{ backgroundColor: "#232839", borderRadius: "3px" }}
            />

            <button disabled={loading} className={`${loading && "opacity-[.5]"} w-full bg-light_theme_primary text-white py-2 rounded mt-4`}>
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

export default SignUp;
