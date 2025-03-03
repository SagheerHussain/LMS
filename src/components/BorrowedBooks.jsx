import React, { useContext } from "react";
import { DarkThemeContext } from "@/context/ThemeContext";
import { sampleBooks } from "../constants/data";
import { FiBookOpen } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";

const BorrowedBooks = () => {

    const { darkMode } = useContext(DarkThemeContext);

  return (
    <>
      <h4 className={`capitalize font-semibold text-2xl ${darkMode ? "text-light_text" : "text-primary"} mb-4`}>
        Borrowed Books
      </h4>
      <div className="borrowed_books grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sampleBooks.slice(0, 4)?.map((book) => {
          return (
            <div className={`borrow_book_card ${darkMode ? "bg-secondary" : "bg-light_theme_hover_mode"} rounded-[25px] px-6 py-4`}>
              <div className="book_cover">
                <img
                  src={book.cover}
                  className="w-full object-cover max-h-[450px] rounded-[25px]"
                  alt={book.title}
                />
              </div>

              <h1 className="text-dark_text text-xl pt-4 font-semibold">{book.title}</h1>
              <h4 className="text-dark_text pt-4 font-medium">{book.category}</h4>
              <h6 className="text-dark_text flex items-center pt-2"><FiBookOpen className="mt-1 me-2" /> Borrowed On Dec 31</h6>
              <h6 className="text-dark_text flex items-center pt-2"><CiCalendarDate className="mt-1 me-2" /> 4 Days left on due date</h6>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BorrowedBooks;
