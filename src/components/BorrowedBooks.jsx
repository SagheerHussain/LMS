import React, { useContext } from "react";
import { DarkThemeContext } from "@/context/ThemeContext";
import { sampleBooks } from "../constants/data";

import { BorrowedBookCard } from "./index";

const BorrowedBooks = () => {
  const { darkMode } = useContext(DarkThemeContext);

  return (
    <>
      <h4
        className={`capitalize font-semibold text-2xl ${
          darkMode ? "text-light_text" : "text-primary"
        } mb-4`}
      >
        Borrowed Books
      </h4>
      <div className="borrowed_books grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sampleBooks.slice(0, 4)?.map((book) => {
          return <BorrowedBookCard book={book} />;
        })}
      </div>
    </>
  );
};

export default BorrowedBooks;
