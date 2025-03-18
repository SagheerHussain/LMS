import React, { useState } from "react";
import { Layout } from "../index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../../../services/categoryService";
import { ClipLoader } from "react-spinners";

const AddCategory = () => {
  const [loading, setLoading] = useState(false);
  const [gCategory, setgCategory] = useState("");
  const [slug, setSlug] = useState("");

  const navigate = useNavigate();

  const handleAddCategory = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = { name: gCategory, slug };
      const { category, success, message } = await createCategory(data);
      if (success) {
        Swal.fire({
          icon: "success",
          title: "Category Added Successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        setLoading(false);
        setTimeout(() => {
          navigate("/dashboard/view-category");
        }, 1500);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error creating category:", error);
    }
  };

  return (
    <>
      <Layout>
        <section id="addCategory" className={`h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#fff] text-4xl font-bold mb-5">
              Add New Category
            </h1>
            <form action="" onSubmit={handleAddCategory}>
              <label htmlFor="" className="text-zinc-300 text-sm">
                Category Name
              </label>
              <input
                type="text"
                name="category"
                required
                onChange={(e) => setgCategory(e.target.value)}
                placeholder="Category"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              />
              <label htmlFor="" className="text-zinc-300 text-sm mt-4">
                Category Slug
              </label>
              <input
                type="name"
                required
                onChange={(e) => setSlug(e.target.value)}
                name="slug"
                placeholder="Slug"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              />
              <button className="w-full bg-light_theme_primary hover:bg-green-700 text-white py-2 rounded mt-4">
                {loading ? <ClipLoader color="#fff" /> : "Add Category"}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AddCategory;
