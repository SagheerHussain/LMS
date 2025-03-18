import { DarkThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const SearchResults = ({ books, loading, error, search, setSearch }) => {
  const { darkMode } = useContext(DarkThemeContext);

  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/filtered-books/${search}`);
    setSearch("");
  };

  return (
    <>
      <div
        className={`search_results z-[999] absolute top-[130%] rounded-[25px] left-0 ${
          darkMode ? "bg-secondary" : "bg-light_theme_light_mode"
        }  w-full p-8`}
      >
        {error && <p className="text-red-600">Something went wrong</p>}
        <button
          onClick={handleViewMore}
          className={`${
            darkMode ? "text-light_text" : "text-dark_text"
          } pb-4 text-end font-medium
         flex items-center w-full justify-end`}
        >
          View More Results{" "}
          <FaArrowRightLong className="ms-3 mt-[2px]" size={14} />
        </button>
        <div className="grid grid-cols-4 gap-4">
          {books?.slice(0, 4).map((book) => (
            <>
              {loading && (
                <div className="flex items-center justify-center">
                  <ClipLoader
                    size={18}
                    color={`${darkMode ? "#fff" : "#000"}`}
                  />
                </div>
              )}
              {!loading && (
                <Link to={`/book-overview/${book?._id}`}>
                  <div className="book-card">
                    <img
                      src={book?.image}
                      className="rounded-[25px] h-[200px]"
                      alt=""
                    />
                    <div className="book-card-content">
                      <h4
                        className={`pt-1 pb-2 text-sm ${
                          darkMode ? "text-light_text" : "text-dark_text"
                        }`}
                      >
                        {book?.title.slice(0, 30)}...
                      </h4>
                      <h5
                        className={`text-[.75rem] py-1 ${
                          darkMode ? "text-light_text" : "text-dark_text"
                        }`}
                      >
                        Category: {book?.category.name}
                      </h5>
                      <h6
                        className={`text-[.75rem] ${
                          darkMode ? "text-light_text" : "text-dark_text"
                        }`}
                      >
                        By: {book?.author.name}
                      </h6>
                    </div>
                  </div>
                </Link>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
