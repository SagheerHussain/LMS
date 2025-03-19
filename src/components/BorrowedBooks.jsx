import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { DarkThemeContext } from "@/context/ThemeContext";
import {
  getBorrowedBooksById,
  getBorrowedHistoryById,
  getBorrowedRequestById,
  checkIsBookExpire,
} from "../../services/borrowedService";

import { BorrowedBookCard } from "./index";
import { ClipLoader } from "react-spinners";

const BorrowedBooks = () => {
  const { darkMode } = useContext(DarkThemeContext);

  // Token & User
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  const [selectedType, setSelectedType] = useState("borrow-request");

  // Main Query Function
  const fetchBooks = async () => {
    let result;
    if (selectedType === "borrow-books") {
      result = await getBorrowedBooksById(user._id, token);
    } else if (selectedType === "borrow-request") {
      result = await getBorrowedRequestById(user._id, token);
    } else {
      result = await getBorrowedHistoryById(user._id, token);
    }
    return result.data;
  };

  // React Query Hook
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["borrowed-books", selectedType, user._id],
    queryFn: fetchBooks
  });

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
          value={selectedType}
          onChange={(e) => {
            setSelectedType(e.target.value);
            refetch(); // manually refetch when selection changes
          }}
          className={`cursor-pointer focus:outline-none bg-transparent rounded-[25px] ${
            darkMode
              ? "text-light_text border-[#ffffff23]"
              : "text-primary border-[#0a0a0a46]"
          } border-2  px-3 py-3`}
        >
          <option
            value="borrow-request"
            className={`${
              darkMode ? "bg-primary" : "bg-light_theme_light_mode"
            }`}
          >
            Borrowed Request
          </option>
          <option
            value="borrow-books"
            className={`${
              darkMode ? "bg-primary" : "bg-light_theme_light_mode"
            }`}
          >
            Borrowed Books
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

      {/* Loading */}
      {isLoading && (
        <div className="text-center">
          <ClipLoader size={32} color={`${darkMode ? "#fff" : "#000"}`} />
        </div>
      )}

      {/* Error */}
      {isError && (
        <p
          className={`${
            darkMode ? "text-light_text" : "text-dark_text"
          } text-sm text-center`}
        >
          Failed to fetch records.
        </p>
      )}

      {/* Records */}
      {data && data.length > 0 && !isLoading ? (
        <div className="borrowed_books grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.map((book) => (
            <BorrowedBookCard
              key={book._id}
              book={book.book}
              borrowedDate={book.borrowedDate}
              dueDate={book.dueDate}
              status={book.status}
              requestDate={book.requestDate}
            />
          ))}
        </div>
      ) : (
        !isLoading &&
        !isError && (
          <p
            className={`${
              darkMode ? "text-light_text" : "text-dark_text"
            } text-sm text-center`}
          >
            No Records Found.
          </p>
        )
      )}
    </>
  );
};

export default BorrowedBooks;
