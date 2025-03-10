import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";
import { useContext } from "react";
import { DarkThemeContext } from "@/context/ThemeContext";

const BorrowedBookCard = ({ book }) => {
  const { darkMode } = useContext(DarkThemeContext);

  return (
    <>
      <div
        className={`borrow_book_card ${
          darkMode ? "bg-secondary" : "bg-light_theme_hover_mode"
        } rounded-[25px] px-6 py-4`}
      >
        <div
            className={`cursor-pointer book_image max-h-[370px] max-w-full`}
          >
            <img
              src={book.image}
              className={`w-full h-[370px] object-cover object-left-top rounded-[25px] `}
              alt={book.title}
              loading="lazy"
            />
          </div>

        <h1 className={`${darkMode ? "text-light_text" : "text-dark_text"}  text-xl pt-4 font-semibold`}>
          {book.title}
        </h1>
        <h4 className={`${darkMode ? "text-light_text" : "text-dark_text"} pt-4 font-medium`}>{book.category.name}</h4>
        <h6 className={`${darkMode ? "text-light_text" : "text-dark_text"} flex items-center pt-2`}>
          <FiBookOpen className="mt-1 me-2" /> Borrowed On Dec 31
        </h6>
        <h6 className={`${darkMode ? "text-light_text" : "text-dark_text"} flex items-center pt-2`}>
          <CiCalendarDate className="mt-1 me-2" /> 4 Days left on due date
        </h6>
      </div>
    </>
  );
};

export default BorrowedBookCard;
