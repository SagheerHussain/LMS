import { DarkThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const SearchResults = ({ books, loading, error, search }) => {
  const { darkMode } = useContext(DarkThemeContext);

  return (
    <>
      <div
        className={`search_results z-[999] absolute top-[130%] rounded-[25px] left-0 ${
          darkMode ? "bg-secondary" : "bg-light_theme_light_mode"
        }  w-full p-8`}
      >
        {error && <p className="text-red-600">Something went wrong</p>}
        <Link
          to={`/filtered-books/${search}`}
          className={`${
            darkMode ? "text-light_text" : "text-dark_text"
          } pb-4 text-end font-medium
         flex items-center justify-end`}
        >
          View More Results{" "}
          <FaArrowRightLong className="ms-3 mt-[2px]" size={14} />
        </Link>
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

          {/* <Link to={"/"}>
            <div className="book-card">
              <img
                src="http://res.cloudinary.com/duegs3psb/image/upload/v1741515201/kuww5amugqdhscwniapg.jpg"
                className="rounded-[25px] h-[200px]"
                alt=""
              />
              <div className="book-card-content">
                <h4 className="pt-1 text-sm">Book Title</h4>
                <h5 className="text-sm text-light_theme_primary py-1">
                  Category: Fiction
                </h5>
                <h6 className="text-sm text-light_theme_primary">
                  By: Esaac Newton
                </h6>
              </div>
            </div>
          </Link>

          <Link to={`/`}>
            <div className="book-card">
              <img
                src="http://res.cloudinary.com/duegs3psb/image/upload/v1741422366/o0uegtvzach8h9qa9aol.jpg"
                className="rounded-[25px] h-[200px]"
                alt=""
              />
              <div className="book-card-content">
                <h4 className="pt-1 text-sm">Book Title</h4>
                <h5 className="text-sm text-light_theme_primary py-1">
                  Category: Fiction
                </h5>
                <h6 className="text-sm text-light_theme_primary">
                  By: Esaac Newton
                </h6>
              </div>
            </div>
          </Link>

          <Link to={`/`}>
            <div className="book-card">
              <img
                src="http://res.cloudinary.com/duegs3psb/image/upload/v1741583105/utsz0lr9ygzlvvbrwaum.jpg"
                className="rounded-[25px] h-[200px]"
                alt=""
              />
              <div className="book-card-content">
                <h4 className="pt-1 text-sm">Book Title</h4>
                <h5 className="text-sm text-light_theme_primary py-1">
                  Category: Fiction
                </h5>
                <h6 className="text-sm text-light_theme_primary">
                  By: Esaac Newton
                </h6>
              </div>
            </div>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
