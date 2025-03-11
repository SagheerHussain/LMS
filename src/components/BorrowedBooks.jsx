import React, { useContext, useEffect, useState } from "react";
import { DarkThemeContext } from "@/context/ThemeContext";
import { sampleBooks } from "../constants/data";

import { BorrowedBookCard } from "./index";
import { getBorrowedBooksById, getBorrowedRequestById } from "../../services/borrowedService";

const BorrowedBooks = () => {
  // Context
  const { darkMode } = useContext(DarkThemeContext);

  // State Variables
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  // Token
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  // Fetching Borrow Records
  const fetchingData = async (e) => {
    try {
       const data = e === "borrow-books" ? await getBorrowedBooksById(user._id, token) : e === "borrow-request" ? await getBorrowedRequestById(user._id, token) : await getBorrowedHistoryById(user._id, token)
       setBorrowedBooks(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchingData("borrow-books");
  }, [])
 
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
        <select name="" onChange={(e) => fetchingData(e.target.value)} id="" className="cursor-pointer focus:outline-none bg-transparent text-light_text border-2 border-[#ffffff23] px-4 py-3">
          <option value="borrow-books" className="bg-primary">Borrowed Books</option>
          <option value="borrow-request" className="bg-primary">Borrowed Request</option>
          <option value="borrow-history" className="bg-primary">Borrowed History</option>
        </select>
      </div>
      <div className="borrowed_books grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sampleBooks.slice(0, 4)?.map((book) => {
          return <BorrowedBookCard book={book} />;
        })}
      </div>
    </>
  );
};

export default BorrowedBooks;
