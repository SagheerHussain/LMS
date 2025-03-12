import React from "react";
import { DarkThemeContext } from "@/context/ThemeContext";
import { FiBookOpen } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiStatusOnline } from "react-icons/hi";

const FilterBookCard = ({ book }) => {
  const { darkMode } = useContext(DarkThemeContext);

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
                className={`w-[170px] h-[250px] object-cover object-left-top rounded-[25px] `}
                alt={book.title}
                loading="lazy"
              />
            </div>

            <h1
              className={`${
                darkMode ? "text-light_text" : "text-dark_text"
              }  text-[.95rem] pt-4 font-semibold`}
            >
              {book.title.slice(0, 30)}...
            </h1>
            <p
              className={`${
                darkMode ? "text-light_text" : "text-dark_text"
              }  text-[.75rem] pt-4 font-semibold`}
            >
              {book.description.slice(0, 50)}...
            </p>
            <h4
              className={`${
                darkMode ? "text-light_text" : "text-dark_text"
              } pt-4 font-medium text-[.75rem]`}
            >
              Category: {book.category.name}
            </h4>
          </div>
        </Link>
      )}
    </>
  );
};

export default FilterBookCard;
