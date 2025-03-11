// import { DarkThemeContext } from "@/context/ThemeContext";
// import React, { useContext, useState } from "react";
// import { IoSearch } from "react-icons/io5";
// import SearchResults from "./SearchResults";
// import { getBooksBySearches } from "../../services/bookService";

// const SearchBar = ({ search, setSearch }) => {
//   // Context
//   const { darkMode } = useContext(DarkThemeContext);

//   // State Variables
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [searchBooks, setSearchBooks] = useState([]);

//   // Search Function
//   const handleSearch = async (e) => {
//     setLoading(true);
//     setSearch(e);
//     try {
//       const books = await getBooksBySearches(e);
//       if (books.length > 0) {
//         setSearchBooks(books);
//         setLoading(false);
//         setError(false);
//       }
//     } catch (error) {
//       setLoading(false);
//       setError(true);
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <input
//         type="text"
//         onChange={(e) => handleSearch(e.target.value)}
//         placeholder="Search books..."
//         className={`w-full py-3 pl-4 rounded-[25px] pr-2 bg-transparent border ${
//           darkMode
//             ? "border-[#ffffff2c] focus:border-[#ffffff32] text-light_text placeholder:text-light_text"
//             : "border-[#ffffff2c] focus:border-[#ffffff2c] text-light_text placeholder:text-light_text"
//         } focus:outline-none focus:shadow-none `}
//       />
//       <button
//         className={`absolute right-[5px] rounded-[25px] top-1/2 transform -translate-y-1/2 ${
//           darkMode
//             ? "bg-primary hover:bg-hover_color text-light_text"
//             : "bg-light_theme_light_mode text-dark_text hover:bg-light_theme_hover_mode"
//         } px-2 py-2`}
//       >
//         <IoSearch size={24} className="font-semibold" />
//       </button>
//       {search && (
//         <SearchResults
//           books={searchBooks}
//           loading={loading}
//           error={error}
//           search={search}
//         />
//       )}
//     </>
//   );
// };

// export default SearchBar;

import { DarkThemeContext } from "@/context/ThemeContext";
import React, { useContext, useState, useEffect, useCallback } from "react";
import { IoSearch } from "react-icons/io5";
import SearchResults from "./SearchResults";
import { getBooksBySearches } from "../../services/bookService";

const SearchBar = ({ search, setSearch }) => {
  // Context
  const { darkMode } = useContext(DarkThemeContext);

  // State Variables
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchBooks, setSearchBooks] = useState([]);

  // Debounce Timer
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Search Function with Debouncing
  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const books = await getBooksBySearches(query);
      if (books.length > 0) {
        setSearchBooks(books);
        setError(false);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Debounce Effect
  useEffect(() => {
    const handler = setTimeout(() => {
      if (debouncedSearch) {
        handleSearch(debouncedSearch);
      }
    }, 1500); // API call will be made 500ms after last input

    return () => {
      clearTimeout(handler); // Clear timeout on every new keystroke
    };
  }, [debouncedSearch]);

  // Handle Input Change
  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setDebouncedSearch(e.target.value); // Update debounced state
  };

  return (
    <>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Search books..."
        className={`w-full py-3 pl-4 rounded-[25px] pr-2 bg-transparent border ${
          darkMode
            ? "border-[#ffffff2c] focus:border-[#ffffff32] text-light_text placeholder:text-light_text"
            : "border-[#ffffff2c] focus:border-[#ffffff2c] text-light_text placeholder:text-light_text"
        } focus:outline-none focus:shadow-none `}
      />
      <button
        className={`absolute right-[5px] rounded-[25px] top-1/2 transform -translate-y-1/2 ${
          darkMode
            ? "bg-primary hover:bg-hover_color text-light_text"
            : "bg-light_theme_light_mode text-dark_text hover:bg-light_theme_hover_mode"
        } px-2 py-2`}
      >
        <IoSearch size={24} className="font-semibold" />
      </button>
      {search && (
        <SearchResults
          books={searchBooks}
          loading={loading}
          error={error}
          search={search}
        />
      )}
    </>
  );
};

export default SearchBar;

