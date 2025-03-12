import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const AddBook = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Layout>
        <section id="addBook" className={`h-full py-6`}>
          <div className="container py-4">
            <h1 className="text-[#fff] text-4xl font-bold mb-5">
              Add New Book
            </h1>

            <form action="">
              {/* Title */}
              <label className="text-[#fff] text-sm">Book Title*</label>
              <input
                type="text"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Title"
              />

              {/* Description */}
              <label className="text-[#fff] text-sm">Book Description</label>
              <textarea
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Description"
              ></textarea>

              {/* Binding ISBN Rating */}
              <div className="flex items-center justify-between">
                <div className="rating w-full">
                  <label className="text-[#fff] text-sm">Book Rating*</label>
                  <input
                    type="number"
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="Rating"
                  />
                </div>
                <div className="isbn w-full mx-4">
                  <label className="text-[#fff] text-sm">Book ISBN*</label>
                  <input
                    type="number"
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="ISBN"
                  />
                </div>
                <div className="binding w-full">
                  <label className="text-[#fff] text-sm">Book Binding*</label>
                  <input
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
                    type="number"
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="Available Copies"
                  />
                </div>
              </div>

              {/* Author Category */}
              <div className="flex items-center justify-between">
                <div className="rating w-full">
                  <label className="text-[#fff] text-sm">Book Author*</label>
                  <input
                    type="text"
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="Author"
                  />
                </div>
                <div className="isbn w-full ms-4">
                  <label className="text-[#fff] text-sm">Book Category*</label>
                  <input
                    type="text"
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="Category"
                  />
                </div>
              </div>

              {/* Published Year Color*/}
              <div className="flex items-center justify-between">
                <div className="rating w-full">
                  <label className="text-[#fff] text-sm">
                    Book Published Year*
                  </label>
                  <input
                    type="text"
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="Published Year"
                  />
                </div>
                <div className="isbn w-full ms-4">
                  <label className="text-[#fff] text-sm">Book Color*</label>
                  <input
                    type="text"
                    className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    placeholder="Color"
                  />
                </div>
              </div>

              {/* Sumamry */}
              <label className="text-[#fff] text-sm">Book Summary</label>
              <textarea
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Summary"
              ></textarea>

              {/* Image */}
              <label className="text-[#fff] text-sm">Book Image*</label>
              <input
                type="file"
                name="image"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Image"
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

export default AddBook;
