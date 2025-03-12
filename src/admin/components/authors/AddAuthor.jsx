import React, { useState } from 'react';
import { Layout } from '../index';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddAuthor = () => {

    const [category, setCategory] = useState("");
    const [slug, setSlug] = useState("");

    const navigate = useNavigate();

    const handleAddCategory = async (e) => {
        e.preventDefault();

        
    }
  return (
    <>
      <Layout>
                <section id="addCategory" className={`h-[88vh] py-6`}>
                    <div className="container py-4">
                        <h1 className='text-[#fff] text-4xl font-bold mb-5'>Add New Author</h1>
                        <form action="" >
                            <label htmlFor="" className='text-zinc-300 text-sm'>Author Name</label>
                            <input type="text" name='category' onChange={(e) => setCategory(e.target.value)} placeholder='Author' className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2" />
                            <label htmlFor="" className='text-zinc-300 text-sm mt-4'>Author Slug</label>
                            <input type="name" onChange={(e) => setSlug(e.target.value)} name='slug' placeholder='Slug' className="placeholder:text-[#ffffff58] w-full text-white bg-transparent focus:border-[#ffffff25] border-2 border-[#ffffff25] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2" />
                            <button className='primary-button mt-2 hover:text-white'>Add Author</button>
                        </form>
                    </div>
                </section>
            </Layout>
    </>
  )
}

export default AddAuthor
