import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const AddStudent = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Layout>
        <section id="addBook" className={`h-full py-6`}>
          <div className="container py-4">
            <h1 className="text-[#fff] text-4xl font-bold mb-5">
              Add New Student
            </h1>

            <form action="">
              {/* Name */}
              <label className="text-[#fff] text-sm">Name*</label>
              <input
                type="text"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Enter Your Name"
              />

              {/* Email */}
              <label className="text-[#fff] text-sm">Email*</label>
              <input
                type="text"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Enter Your Email"
              />

              {/* Password */}
              <label className="text-[#fff] text-sm">Password*</label>
              <input
                type="password"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Set Your Password"
              />

              {/* Universit Name */}
              <label className="text-[#fff] text-sm">University Name*</label>
              <input
                type="text"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Enter University Name"
              />

              {/* Universit Id */}
              <label className="text-[#fff] text-sm">University ID*</label>
              <input
                type="name"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Enter University ID"
              />

              {/* Profile Picture */}
              <label className="text-[#fff] text-sm">Profile Picture*</label>
              <input
                type="file"
                name="profilePicture"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Upload Profile Picture"
              />

              {/* University ID Card Picture */}
              <label className="text-[#fff] text-sm">Id Card Picture*</label>
              <input
                type="file"
                name="universityIdCardImage"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Upload Id Card"
              />

              <button className="primary-button hover:text-[#fff]">
                {loading ? <ClipLoader size={12} color="#1092fd" /> : "Submit"}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AddStudent;
