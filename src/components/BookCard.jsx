import { DarkThemeContext } from "@/context/ThemeContext";
import { Rating, useMediaQuery } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  createBorrowedRequest,
  getBorrowedBooks,
  getBorrowedBooksById,
  getBorrowedRequestById,
  getBorrowedRequests,
} from "../../services/borrowedService";
import Swal from "sweetalert2";

const BookCard = ({
  book,
  label = "",
  content_classes = "",
  isMoreInfo,
  className = "",
}) => {
  // Context
  const { darkMode } = useContext(DarkThemeContext);

  // Get Student From Local Storage
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));

  // media Query
  const isMatch = useMediaQuery("(max-width:820px)");
  const smDevice = useMediaQuery("(max-width:510px)");

  // State Variables
  const [year, setYear] = useState(null);
  const [borrowBooks, setBorrowBooks] = useState([]);
  const [borrowRequest, setBorrowRequest] = useState([]);

  // Book Data
  const {
    _id,
    image,
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
  }, []);

  // Borrowed Request Handler
  const handleBorrowedRequest = async (bookId) => {
    try {
      if (user.isVerified) {
        const createRequest = { studentId: user._id, bookId };
        const data = await createBorrowedRequest(createRequest, token);
        console.log(data);
        if (data.success) {
          Swal.fire({
            title: data.message,
            timer: 1500,
            icon: "success",
          });
          console.log(data);
          getBorrowBooks();
        }
      } else {
        Swal.fire({
          title: "Your account is not verified",
          html: "Your account will be verified by the admin. <br>For inquiries, contact: <b>03313908443</b>",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get All Borrow Books
  const getBorrowBooks = async () => {
    try {
      const borrowBooks = await getBorrowedBooksById(user._id, token);
      const borrowRequest = await getBorrowedRequestById(user._id, token);
      setBorrowBooks(borrowBooks.data);
      setBorrowRequest(borrowRequest.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBorrowBooks();
  }, []);

  return (
    <>
      <div
        className={`book_card ${className} w-full relative ${
          smDevice && "text-center"
        }`}
      >
        <Link to={`/book-overview/${_id}`} key={_id}>
          <div
            className={`cursor-pointer book_image ${
              location.pathname === "/"
                ? `${isMatch ? "scale-[1]" : "scale-[.8]"}`
                : "scale-[1]"
            }  max-h-[300px] max-w-[200px] ${smDevice && "mx-auto"}`}
          >
            <img
              src={image}
              className={`w-full ${
                location.pathname === "/"
                  ? "min-h-[300px] min-w-[200px]"
                  : "h-[300px]"
              } object-cover object-left-top rounded-[25px] `}
              alt={title}
              loading="lazy"
            />
          </div>
        </Link>
        <div className={`book_content ${content_classes} cursor-pointer`}>
          <Rating
            name="read-only"
            className="text-[.8rem] mt-4"
            value={rating}
            readOnly
          />
          <h4
            className={`${
              darkMode ? "text-zinc-300" : "text-zinc-700"
            } text-sm pt-2`}
          >
            By: {author.name}
          </h4>
          <h3
            className={`${
              darkMode ? "text-zinc-300" : "text-dark_text"
            } text-lg`}
          >
            {title?.slice(0, 50)}...
          </h3>
          <Link to={`/book-overview/${_id}`} key={_id}>
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
                  Category: {category.name}
                </h3>
              </>
            )}
          </Link>
          <div className={`flex items-center ${smDevice && "justify-center"}`}>
            {(borrowBooks &&
              borrowRequest &&
              borrowBooks?.some((b) => b.book._id === book._id)) ||
            borrowRequest?.some((b) => b.book._id === book._id) ? (
              <button
                className={`text-dark_text rounded-[25px] bg-yellow_color transition-all duration-300 capitalize text-[.8rem] font-semibold px-4 py-2 mt-4`}
              >
                Already Borrow
              </button>
            ) : (
              <button
                onClick={() => handleBorrowedRequest(_id)}
                className={`primary-button transition-all duration-300 capitalize text-[.8rem] font-semibold px-4 py-2 mt-4`}
              >
                Borrowing Now
              </button> 
            )}

            <IoMdHeartEmpty
              size={24}
              className={`${
                darkMode ? "text-light_theme_primary" : "text-primary"
              } ms-2 mt-4 cursor-pointer`}
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
    </>
  );
};

export default BookCard;
