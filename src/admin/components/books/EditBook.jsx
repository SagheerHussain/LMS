import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";
import {
  createBook,
  getBookDetails,
  updateBook,
} from "../../../../services/bookService";
import { getAuthors } from "../../../../services/authorService";
import { getCategories } from "../../../../services/categoryService";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  // State Variables
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rating: "",
    ISBN: "",
    binding: "",
    totalPages: "",
    author: "",
    totalCopies: "",
    availableCopies: "",
    summary: "",
    publishedYear: "",
    category: "",
    color: "",
    image: null,
  });
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

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
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) }); // Preview new image
    }
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateBook(id, formData);
      Swal.fire({
        icon: "success",
        title: "Book Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoading(false);
      navigate("/dashboard/view-books");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Fetching Book Details
  const fetchingBookDetails = async () => {
    try {
      const data = await getBookDetails(id);
      setFormData({
        title: data.title,
        description: data.description,
        rating: data.rating,
        ISBN: data.ISBN,
        binding: data.binding,
        totalPages: data.totalPages,
        author: data.author._id,
        totalCopies: data.totalCopies,
        availableCopies: data.availableCopies,
        summary: data.summary,
        publishedYear: data.publishedYear,
        category: data.category._id,
        color: data.color,
        image: data.image,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Get Authors & Categories
  const fetchingAuthors = async () => {
    try {
      const data = await getAuthors();
      setAuthors(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchingCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingAuthors();
    fetchingCategories();
    fetchingBookDetails();
  }, []);

  return (
    <>
      <Layout>
        <section id="editBook" className={`min-h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#fff] text-4xl font-bold mb-5">Edit Book</h1>
            <div className="flex gap-4">
              <div className="book_form">
                <form action="" onSubmit={handleSubmit}>
                  {/* Title */}
                  <label className="text-[#fff] text-sm">Book Title*</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    required
                    defaultValue={formData.title}
                    name="title"
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="Title"
                  />

                  {/* Description */}
                  <label className="text-[#fff] text-sm">
                    Book Description
                  </label>
                  <textarea
                    name="description"
                    onChange={handleChange}
                    defaultValue={formData.description}
                    required
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="Description"
                  ></textarea>

                  {/* Binding ISBN Rating */}
                  <div className="flex items-center justify-between">
                    <div className="rating w-full">
                      <label className="text-[#fff] text-sm">
                        Book Rating*
                      </label>
                      <input
                        name="rating"
                        onChange={handleChange}
                        defaultValue={formData.rating}
                        required
                        type="number"
                        className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                        placeholder="Rating"
                      />
                    </div>
                    <div className="isbn w-full mx-4">
                      <label className="text-[#fff] text-sm">Book ISBN*</label>
                      <input
                        name="ISBN"
                        onChange={handleChange}
                        defaultValue={formData.ISBN}
                        required
                        type="number"
                        className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                        placeholder="ISBN"
                      />
                    </div>
                    <div className="binding w-full">
                      <label className="text-[#fff] text-sm">
                        Book Binding*
                      </label>
                      <input
                        name="binding"
                        onChange={handleChange}
                        defaultValue={formData.binding}
                        required
                        type="text"
                        className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                        placeholder="Binding"
                      />
                    </div>
                  </div>

                  {/* totalPages AvalableCopies TotalCopies */}
                  <div className="flex items-center justify-between">
                    <div className="rating w-full">
                      <label className="text-[#fff] text-sm">
                        Book Total Pages*
                      </label>
                      <input
                        name="totalPages"
                        onChange={handleChange}
                        defaultValue={formData.totalPages}
                        required
                        type="number"
                        className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                        placeholder="Total Pages"
                      />
                    </div>
                    <div className="isbn w-full mx-4">
                      <label className="text-[#fff] text-sm">
                        Book Total Copies*
                      </label>
                      <input
                        name="totalCopies"
                        onChange={handleChange}
                        defaultValue={formData.totalCopies}
                        required
                        type="number"
                        className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                        placeholder="Total Copies"
                      />
                    </div>
                    <div className="binding w-full">
                      <label className="text-[#fff] text-sm">
                        Book Available Copies*
                      </label>
                      <input
                        name="availableCopies"
                        onChange={handleChange}
                        defaultValue={formData.availableCopies}
                        required
                        type="number"
                        className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                        placeholder="Available Copies"
                      />
                    </div>
                  </div>

                  {/* Author Category */}
                  <div className="flex items-center justify-between">
                    <div className="author w-full">
                      <label className="text-[#fff] text-sm">
                        Book Author*
                      </label>
                      <select
                        name="author"
                        onChange={handleChange}
                        value={formData.author}
                        id="author"
                        className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                      >
                        <option selected hidden className="bg-primary">
                          Select Author
                        </option>
                        {authors?.map((author) => (
                          <option
                            key={author._id}
                            value={author._id}
                            className="bg-primary"
                          >
                            {author.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="categories w-full ms-4">
                      <label className="text-[#fff] text-sm">
                        Book Category*
                      </label>
                      <select
                        name="category"
                        onChange={handleChange}
                        value={formData.category}
                        id="category"
                        className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                      >
                        <option selected hidden className="bg-primary">
                          Select Category
                        </option>
                        {categories?.map((category) => (
                          <option
                            key={category._id}
                            value={category._id}
                            className="bg-primary"
                          >
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Published Year Color*/}
                  <div className="flex items-center justify-between">
                    <div className="rating w-full">
                      <label className="text-[#fff] text-sm">
                        Book Published Year*
                      </label>
                      <input
                        name="publishedYear"
                        onChange={handleChange}
                        defaultValue={formData.publishedYear}
                        required
                        type="text"
                        className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                        placeholder="Published Year"
                      />
                    </div>
                    <div className="isbn w-full ms-4">
                      <label className="text-[#fff] text-sm">Book Color*</label>
                      <input
                        name="color"
                        onChange={handleChange}
                        defaultValue={formData.color}
                        required
                        type="text"
                        className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                        placeholder="Color"
                      />
                    </div>
                  </div>

                  {/* Sumamry */}
                  <label className="text-[#fff] text-sm">Book Summary</label>
                  <textarea
                    name="summary"
                    onChange={handleChange}
                    defaultValue={formData.summary}
                    required
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="Summary"
                  ></textarea>

                  {/* Image */}
                  <label className="text-[#fff] text-sm">Book Image*</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    name="image"
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="Image"
                  />

                  <button className="w-full bg-primary hover:bg-hover_color text-white py-2 rounded mt-4">
                    {loading ? <ClipLoader color="#fff" /> : "Edit Book"}
                  </button>
                </form>
              </div>
              <div className="book_image">
                <img
                  src={formData?.image}
                  alt="Book Image"
                  className="w-full rounded-[25px]"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EditBook;
