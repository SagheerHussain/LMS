import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";
import {
  getStudentDetails,
  updateStudentDetails,
} from "../../../../services/studentService";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  // Storage
  const token = JSON.parse(localStorage.getItem("token"));

  // State Variables
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    universityName: "",
    universityId: "",
    profilePicture: null,
    universityIdCardImage: null,
  });
  const [file, setFile] = useState({});

  // Navigate
  const navigate = useNavigate();

  // Params
  const { id } = useParams();

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle File Change
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files[0]) {
      setFormData({ ...formData, [name]: files[0] }); // Preview new image
      setFile({ ...file, [name]: URL.createObjectURL(files[0]) });
    }
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const update = await updateStudentDetails(id, formData);
      if (update.success) {
        Swal.fire({
          icon: "success",
          title: "Student Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
        navigate("/dashboard/view-students");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Fetching Student Details
  const fetchingStudentDetails = async () => {
    try {
      const data = await getStudentDetails(id, token);
      setFormData({
        name: data.name,
        email: data.email,
        universityName: data.universityName,
        universityId: data.universityId,
        profilePicture: data.profilePicture,
        universityIdCardImage: data.universityIdCardImage,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingStudentDetails();
  }, []);

  return (
    <>
      <Layout>
        <section id="editBook" className={`min-h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#fff] text-4xl font-bold mb-5">
              Edit Student
            </h1>
            <div className="flex gap-4">
              <div className="book_form">
                <form action="" onSubmit={handleSubmit}>
                  {/* Name */}
                  <label className="text-[#fff] text-sm">Student Name*</label>
                  <input
                    type="name"
                    onChange={handleChange}
                    required
                    defaultValue={formData.name}
                    name="name"
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="Name"
                  />

                  {/* Email */}
                  <label className="text-[#fff] text-sm">Student Email</label>
                  <input
                    type="email"
                    onChange={handleChange}
                    required
                    defaultValue={formData.email}
                    name="email"
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="Email"
                  />

                  {/* University Name */}
                  <label className="text-[#fff] text-sm">University Name</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    required
                    defaultValue={formData.universityName}
                    name="universityName"
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="University Name"
                  />

                  {/* University ID */}
                  <label className="text-[#fff] text-sm">University ID</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    required
                    defaultValue={formData.universityId}
                    name="universityId"
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="University ID"
                  />

                  {/* Profile Picture */}
                  <label className="text-[#fff] text-sm">
                    Student Profile Picture*
                  </label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    name="profilePicture"
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="Profile Picture"
                  />

                  {/* University ID Card Image */}
                  <label className="text-[#fff] text-sm">
                    University ID Card Image*
                  </label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    name="universityIdCardImage"
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="University ID Card Image"
                  />

                  <button className="w-full bg-light_theme_primary hover:bg-green-700 text-white py-2 rounded mt-4">
                    {loading ? <ClipLoader color="#fff" /> : "Edit Student"}
                  </button>
                </form>
              </div>
              <div className="student_image">
                <img
                  src={file?.profilePicture || formData?.profilePicture}
                  alt="Student Profile Picture"
                  className="w-[300px] object-fill object-center rounded-[25px] mb-4"
                />
                <img
                  src={file?.universityIdCardImage || formData?.universityIdCardImage}
                  alt="Student Profile Picture"
                  className="w-[400px] object-fill object-center rounded-[25px]"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EditStudent;
