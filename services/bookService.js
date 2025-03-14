import axios from "axios";

// Get All Books
export const getBooks = async () => {  
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/books`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};

// Get Book Details
export const getBookDetails = async (id) => {  
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/books/book/${id}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};

// Get Books By Search
export const getBooksBySearches = async (search) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/books/search?keyword=${search}`
    );
    console.log("search books", response)
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
  }  
};

// Get Books By Categories
export const getBooksByCategories = async (category) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/books/category/${category}`
    );
    console.log("category books", response)
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
  }  
};

// Get Books By Authors
export const getBooksByAuthors = async (author) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/books/author/${author}`
    );
    console.log("authors books", response)
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
  }  
};

// Create Book
export const createBook = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/books`,
      data,
      { 
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log("created book", response)
    return response.data;
  } catch (error) {
    console.error("Error creating book:", error);
  }
};

// Update Book
export const updateBook = async (id, data) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_URL}/api/books/update/${id}`,
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating book:", error);
  }
};

// Delete Book
export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/api/books/delete/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting book:", error);
  }
};
