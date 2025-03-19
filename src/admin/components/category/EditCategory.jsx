import React, { useEffect, useState } from "react";
import { Layout } from "../index";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { createCategory, getCategory, updateCategory } from "../../../../services/categoryService";
import { ClipLoader } from "react-spinners";

const EditCategory = () => {
  const [loading, setLoading] = useState(false);
  const [gCategory, setgCategory] = useState("");
  const [slug, setSlug] = useState("");

  const navigate = useNavigate();

  const {id} = useParams();

  // Get Category Details
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const category = await getCategory(id);
        setgCategory(category.name);
        setSlug(category.slug);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };
    fetchCategory();
  }, [id]);

  // Edit Category
  const handleAddCategory = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = { name: gCategory, slug };
      const { success } = await updateCategory(id, data);
      if (success) {
        Swal.fire({
          icon: "success",
          title: "Category Updated Successfully",
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
              Edit Category
            </h1>
            <form action="" onSubmit={handleAddCategory}>
              <label htmlFor="" className="text-zinc-300 text-sm">
                Category Name
              </label>
              <input
                type="text"
                defaultValue={gCategory}
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
                defaultValue={slug}
                name="slug"
                placeholder="Slug"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              />
              <button className="w-full bg-primary hover:bg-hover_color text-white py-2 rounded mt-4">
                {loading ? <ClipLoader color="#fff" /> : "Edit Category"}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EditCategory;
