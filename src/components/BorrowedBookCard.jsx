import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";
import { useContext } from "react";
import { DarkThemeContext } from "@/context/ThemeContext";
import { Link } from "react-router-dom";
import { HiStatusOnline } from "react-icons/hi";

const BorrowedBookCard = ({
  book,
  borrowedDate = null,
  dueDate = null,
  status = null,
  requestDate = null
}) => {
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
                className={`w-full h-[400px] object-cover object-left-top rounded-[25px] `}
                alt={book.title}
                loading="lazy"
              />
            </div>

            <h1
              className={`${
                darkMode ? "text-light_text" : "text-dark_text"
              }  text-[1rem] pt-4 font-semibold`}
            >
              {book.title.slice(0, 50)}...
            </h1>
            <h4
              className={`${
                darkMode ? "text-light_text" : "text-dark_text"
              } pt-4 font-medium text-[.75rem]`}
            >
              Category: {book.category.name}
            </h4>
            {borrowedDate && (
              <h6
                className={`${
                  darkMode ? "text-light_text" : "text-dark_text"
                } flex items-center text-[.8rem] pt-2`}
              >
                <FiBookOpen className="mt-1 me-2" />{" "}
                {borrowedDate?.split("T")[0]}
              </h6>
            )}
            {dueDate && (
              <h6
                className={`${
                  darkMode ? "text-light_text" : "text-dark_text"
                } flex items-center text-[.8rem] pt-2`}
              >
                <CiCalendarDate className="mt-1 me-2" />{" "}
                {dueDate?.split("T")[0]}
              </h6>
            )}
            {status && (
              <h6
                className={`text-light_text flex items-center text-[.8rem] pt-2`}
              >
                <HiStatusOnline className={`${darkMode? "text-light_text" : "text-dark_text"} mt-1 me-2`} />{" "}
                <span className={`${darkMode ? "bg-primary" : "bg-light_theme_primary"}  py-[3px] px-3`}>{status}</span>
              </h6>
            )}
            {requestDate && (
              <h6
                className={`${
                  darkMode ? "text-light_text" : "text-dark_text"
                } flex items-center text-[.8rem] pt-2`}
              >
                <CiCalendarDate className="mt-1 me-2" />{" "}
                {requestDate?.split("T")[0]}
              </h6>
            )}
          </div>
        </Link>
      )}
    </>
  );
};

export default BorrowedBookCard;
