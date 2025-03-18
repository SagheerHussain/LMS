import React, { useContext, useEffect, useState } from "react";
import { DarkThemeContext } from "@/context/ThemeContext";
import { sampleBooks } from "../constants/data";

import { BorrowedBookCard } from "./index";
import {
  getBorrowedBooksById,
  getBorrowedHistoryById,
  getBorrowedRequestById,
} from "../../services/borrowedService";
import { ClipLoader } from "react-spinners";

const BorrowedBooks = () => {
  // Context
  const { darkMode } = useContext(DarkThemeContext);

  // State Variables
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Token
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  // Fetching Borrow Records
  const fetchingData = async (e) => {
    setLoading(true);
    try {
      const { data, message } =
        e === "borrow-books"
          ? await getBorrowedBooksById(user._id, token)
          : e === "borrow-request"
          ? await getBorrowedRequestById(user._id, token)
          : await getBorrowedHistoryById(user._id, token);
      setBorrowedBooks(data);
      setLoading(false);
      console.log(data)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingData("borrow-books");
  }, []);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h4
          className={`capitalize font-semibold text-2xl ${
            darkMode ? "text-light_text" : "text-primary"
          } mb-4`}
        >
          Borrowed Books
        </h4>
        <select
          name=""
          onChange={(e) => fetchingData(e.target.value)}
          id=""
          className={`cursor-pointer focus:outline-none bg-transparent rounded-[25px] ${
            darkMode
              ? "text-light_text border-[#ffffff23]"
              : "text-primary border-[#0a0a0a46]"
          } border-2  px-3 py-3`}
        >
          <option
            value="borrow-books"
            className={`${
              darkMode ? "bg-primary" : "bg-light_theme_light_mode"
            }`}
          >
            Borrowed Books
          </option>
          <option
            value="borrow-request"
            className={`${
              darkMode ? "bg-primary" : "bg-light_theme_light_mode"
            }`}
          >
            Borrowed Request
          </option>
          <option
            value="borrow-history"
            className={`${
              darkMode ? "bg-primary" : "bg-light_theme_light_mode"
            }`}
          >
            Borrowed History
          </option>
        </select>
      </div>

      {loading && <div className="text-center"> <ClipLoader size={32} color={`${darkMode ? "#fff" : "#000"}`} /> </div>}

      {borrowedBooks.length > 0 && !loading ? (
        <div className="borrowed_books grid grid-cols-1 sm:grid-cols-2 gap-4">
          {borrowedBooks?.map((book) => {
            return (
              <BorrowedBookCard
                book={book.book}
                borrowedDate={book.borrowedDate}
                dueDate={book.dueDate}
                status={book.status}
                requestDate={book.requestDate}
              />
            );
          })}
        </div>
      ) : (
        !loading && <p
          className={`${
            darkMode ? "text-light_text" : "text-dark_text"
          } text-sm text-center`}
        >
          No Records Found.
        </p>
      )}
    </>
  );
};

export default BorrowedBooks;
