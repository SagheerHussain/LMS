import { DarkThemeContext } from "@/context/ThemeContext";
import { Rating } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { Button } from "./index";
import { Link, useLocation } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";

const BookCard = ({
  book,
  label = "",
  content_classes = "",
  isMoreInfo,
  className = "",
}) => {
  // Context
  const { darkMode } = useContext(DarkThemeContext);

  // State Variables
  const [year, setYear] = useState(null);

  // Book Data
  const {
    id,
    cover,
    title,
    author,
    description,
    category,
    rating,
    publishedYear,
  } = book;

  const location = useLocation();

  useEffect(() => {
    const currentDate = new Date().getFullYear();
    setYear(currentDate);
    console.log("book", book);
  }, []);

  return (
    <>
      <Link to={`/book-overview/${id}`} key={id}>
        <div
          className={`book_card ${className} w-full hover:shadow-lg cursor-pointer relative`}
        >
          <div
            className={`cursor-pointer book_image ${
              location.pathname === "/" ? "scale-[.8]" : "scale-[1]"
            }  max-h-[300px] max-w-[200px]`}
          >
            <img
              src={cover}
              className={`w-full ${
                location.pathname === "/" ? "h-full" : "h-[300px]"
              } object-cover object-left-top rounded-[25px]`}
              alt={title}
              loading="lazy"
            />
          </div>
          <div className={`book_content ${content_classes}`}>
            <Rating
              name="read-only"
              className="text-[.8rem] mt-4"
              value={rating}
              style={{ backgroundColor: "#e99d31 !important" }}
              readOnly
            />
            <h4
              className={`${
                darkMode ? "text-zinc-300" : "text-zinc-700"
              } text-sm pt-2`}
            >
              By: {author}
            </h4>
            <h3
              className={`${
                darkMode ? "text-zinc-300" : "text-dark_text"
              } text-lg`}
            >
              {title}
            </h3>
            {isMoreInfo && (
              <>
                <p
                  className={`${
                    darkMode ? "text-zinc-300" : "text-zinc-800"
                  } text-sm pt-3`}
                >
                  {description.slice(0, 50)}...
                </p>
                <h3
                  className={`${
                    darkMode ? "text-zinc-300" : "text-zinc-800"
                  } text-sm pt-3`}
                >
                  Category: {category}
                </h3>
              </>
            )}
            <div className="flex items-center">
              <Button label="Borrowing Now" />
              <IoMdHeartEmpty
                size={24}
                className={`${darkMode ? "text-light_theme_primary" : "text-primary"} ms-2 mt-4 cursor-pointer`}
              />
            </div>
          </div>
          {label && (
            <div className="prescription">
              <span className="bg-yellow_color text-white absolute uppercase text-sm top-0 right-0 px-3">
                {label}
              </span>
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default BookCard;
