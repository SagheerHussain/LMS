import { DarkThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const { darkMode } = useContext(DarkThemeContext);

  return (
    <>
      <div
        className={`search_results z-[999] absolute top-[130%] rounded-[25px] left-0 ${
          darkMode ? "bg-light_text" : "bg-light_text"
        }  w-full p-8`}
      >
        <Link
          to={"/"}
          className={`${
            darkMode ? "text-light_text" : "text-dark_text"
          } pb-4 text-end text-primary font-medium
         flex items-center justify-end`}
        >
          View More Results{" "}
          <FaArrowRightLong className="ms-3 mt-[2px]" size={14} />
        </Link>
        <div className="grid grid-cols-4 gap-4">
          <Link to={"/"}>
            <div className="book-card">
              <img
                src="http://res.cloudinary.com/duegs3psb/image/upload/v1741515062/qd4qdh7wnlrxmecmqztu.jpg"
                className="rounded-[25px] h-[200px]"
                alt=""
              />
              <div className="book-card-content">
                <h4 className="pt-1 text-sm">Book Title</h4>
                <h5 className="text-sm text-primary py-1">
                  Category: Fiction
                </h5>
                <h6 className="text-sm text-primary">
                  By: Esaac Newton
                </h6>
              </div>
            </div>
          </Link>

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
        </div>
      </div>
    </>
  );
};

export default SearchResults;
