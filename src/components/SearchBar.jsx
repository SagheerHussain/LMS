import { DarkThemeContext } from "@/context/ThemeContext";
import React, { useContext, useState, useEffect, useCallback } from "react";
import { IoSearch } from "react-icons/io5";
import SearchResults from "./SearchResults";
import { getBooksBySearches } from "../../services/bookService";

const SearchBar = ({ search, setSearch }) => {
  // Context
  const { darkMode } = useContext(DarkThemeContext);

  // State Variables
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchBooks, setSearchBooks] = useState([]);

  // Debounce Timer
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Search Function with Debouncing
  const handleSearch = async (query) => {
    console.log("running", loading)
    try {
      setLoading(true);
      const books = await getBooksBySearches(query);
      if (books.length > 0) {
        setSearchBooks(books);
        setError(false);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };

  // Debounce Effect
  useEffect(() => {
    const handler = setTimeout(() => {
      if (debouncedSearch) {
        handleSearch(debouncedSearch);
      }
    }, 1000); // API call will be made 500ms after last input

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
        value={search}
        placeholder="Search books..."
        className={`w-full py-3 pl-4 rounded-[25px] pr-2 bg-transparent border ${
          darkMode
            ? "border-[#ffffff2c] focus:border-[#ffffff32] text-light_text placeholder:text-light_text"
            : "border-[#ffffff2c] focus:border-[#ffffff2c] text-light_text placeholder:text-light_text"
        } focus:outline-none focus:shadow-none `}
      />
      {search && (
        <SearchResults
          books={searchBooks}
          loading={loading}
          error={error}
          search={search}
          setSearch={setSearch}
        />
      )}
    </>
  );
};

export default SearchBar;

