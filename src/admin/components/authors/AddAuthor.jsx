import React, { useState } from "react";
import { Layout } from "../index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { createAuthor } from "../../../../services/authorService";

const AddAuthor = () => {
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState("");
  const [slug, setSlug] = useState("");

  const navigate = useNavigate();

  const handleAddAuthor = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = { name: author, slug };
      const { success, message } = await createAuthor(data);
      if (success) {
        Swal.fire({
          icon: "success",
          title: "Author Added Successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        setLoading(false);
        setTimeout(() => {
          navigate("/dashboard/view-authors");
        }, 1500);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error creating author:", error);
    }
  };

  return (
    <>
      <Layout>
        <section id="addAuthor" className={`min-h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#fff] text-4xl font-bold mb-5">
              Add New Author
            </h1>
            <form action="" onSubmit={handleAddAuthor}>
              <label htmlFor="" className="text-zinc-300 text-sm">
                Author Name
              </label>
              <input
                type="text"
                required
                name="author"
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              />
              <label htmlFor="" className="text-zinc-300 text-sm mt-4">
                Author Slug
              </label>
              <input
                type="name"
                required
                onChange={(e) => setSlug(e.target.value)}
                name="slug"
                placeholder="Slug"
                className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              />
              <button className="w-full bg-primary hover:bg-hover_color text-white py-2 rounded mt-4">
                {loading ? <ClipLoader color="#fff" /> : "Add Author"}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AddAuthor;
