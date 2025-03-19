import React from "react";
import { DarkThemeContext } from "@/context/ThemeContext";
import { FiBookOpen } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiStatusOnline } from "react-icons/hi";
import { Rating } from "@mui/material";

const FilterBookCard = ({ book }) => {
  const { darkMode } = useContext(DarkThemeContext);

  console.log(book);

  return (
    <>
      {book && (
        <Link to={`/book-overview/${book._id}`} key={book._id}>
          <div
            className={`borrow_book_card ${
              darkMode ? "bg-secondary" : "bg-light_theme_hover_mode"
            } rounded-[25px] px-6 py-4`}
          >
            <div className={`cursor-pointer book_image flex justify-center`}>
              <img
                src={book.image}
                className={`w-[200px] h-[250px] object-cover object-left-top rounded-[25px] `}
                alt={book.title}
                loading="lazy"
              />
            </div>

            <h1
              className={`${
                darkMode ? "text-light_text" : "text-dark_text"
              }  text-[.95rem] pt-4 font-semibold`}
            >
              {book.title.slice(0, 20)}...
            </h1>
            <Rating
              name="read-only"
              className="text-[.8rem] pt-1"
              value={book.rating}
              readOnly
            />
            <h4
              className={`${
                darkMode ? "text-light_text" : "text-dark_text"
              } pt-1 text-[.75rem]`}
            >
              Category: {book.category.name}
            </h4>
            <h4
              className={`${
                darkMode ? "text-light_text" : "text-dark_text"
              } pt-1 text-[.75rem]`}
            >
              Author: {book.author.name}
            </h4>
          </div>
        </Link>
      )}
    </>
  );
};

export default FilterBookCard;
