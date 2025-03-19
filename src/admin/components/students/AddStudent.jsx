import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../../../../services/studentService";

const AddStudent = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    universityName: "",
    universityId: "",
    profilePicture: null,
    universityIdCardImage: null,
  });

  // Navigate
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle File Change
  const handleFileChange = (e) => {
    const { files, name } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const addStudent = await createStudent(data);
      if (addStudent.success) {
        Swal.fire({
          icon: "success",
          title: "Student Added Successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        setLoading(false);
        setTimeout(() => {
          navigate("/dashboard/view-students");
        }, 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout>
        <section id="addBook" className={`h-full min-h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#fff] text-4xl font-bold mb-5">
              Add New Student
            </h1>

            <form action="" onSubmit={handleSubmit}>
              {/* Name */}
              <label className="text-[#fff] text-sm">Name*</label>
              <input
                name="name"
                onChange={handleChange}
                required
                type="text"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Enter Your Name"
              />

              {/* Email */}
              <label className="text-[#fff] text-sm">Email*</label>
              <input
                name="email"
                onChange={handleChange}
                required
                type="text"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Enter Your Email"
              />

              {/* Password */}
              <label className="text-[#fff] text-sm">Password*</label>
              <input
                name="password"
                onChange={handleChange}
                required
                type="password"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Set Your Password"
              />

              {/* Universit Name */}
              <label className="text-[#fff] text-sm">University Name*</label>
              <input
                name="universityName"
                onChange={handleChange}
                required
                type="text"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Enter University Name"
              />

              {/* Universit Id */}
              <label className="text-[#fff] text-sm">University ID*</label>
              <input
                name="universityId"
                onChange={handleChange}
                required
                type="name"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Enter University ID"
              />

              {/* Profile Picture */}
              <label className="text-[#fff] text-sm">Profile Picture*</label>
              <input
                name="profilePicture"
                onChange={handleFileChange}
                required
                type="file"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Upload Profile Picture"
              />

              {/* University ID Card Picture */}
              <label className="text-[#fff] text-sm">Id Card Picture*</label>
              <input
                name="universityIdCardImage"
                onChange={handleFileChange}
                required
                type="file"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Upload Id Card"
              />

              <button className="w-full bg-primary hover:bg-hover_color text-white py-2 rounded mt-4">
                {loading ? <ClipLoader color="#fff" /> : "Add Student"}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AddStudent;
