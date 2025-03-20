import React, { useCallback, useEffect, useState } from "react";
import { BookCover, Button } from "./index";
import { Rating } from "@mui/material";
import { IoMdHeartEmpty } from "react-icons/io";
import BookOverviewDetails from "./BookOverviewDetails";
import RelatedBooks from "./RelatedBooks";
import { useMediaQuery } from "@mui/material";
import { getBookDetails } from "../../services/bookService";
import { ClipLoader } from "react-spinners";
import Swal from "sweetalert2";
import { createBorrowedRequest } from "../../services/borrowedService";
import {
  getBorrowedBooksById,
  getBorrowedRequestById,
} from "../../services/borrowedService";

const BookOverview = ({ id, darkMode }) => {
  const matches = useMediaQuery("(max-width:530px)");
  const largeDevices = useMediaQuery("(min-width:1900px)");
  const mediumDevices = useMediaQuery("(min-width:1025px)");

  // Get Data From Local Storage
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));

  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [borrowBooks, setBorrowBooks] = useState([]);
  const [borrowRequest, setBorrowRequest] = useState([]);

  const fetchingBookData = useCallback(async () => {
    try {
      setLoading(true);
      const book = await getBookDetails(id);
      setBookData(book);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetchingBookData();
  }, [fetchingBookData, id]);

  const textColor = darkMode ? "text-white" : "text-black";

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
      <section id="book-overview" className="py-10 sm:py-20 min-h-[100vh]">
        {loading && (
          <div className="flex justify-center items-center">
            <ClipLoader size={32} color={`${darkMode ? "#fff" : "#000"}`} />
          </div>
        )}
        {bookData && (
          <div className="container  mx-auto">
            <div className={`${matches ? "block" : "flex"} ${largeDevices && "min-h-[90vh]"} ${mediumDevices && "min-h-[110vh]"}`}>
              <div className="sm:w-[30%] h-full relative">
                <BookCover className="z-[999]" image={bookData.image} />
              </div>
              <div
                className={`sm:w-[70%] h-full book_overview sm:ps-6 ps-3 ${
                  matches ? "pt-6" : "pt-0"
                }`}
              >
                <h1
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ${textColor}`}
                >
                  {bookData.title}
                </h1>
                <div className="py-6">
                  <h2 className={`text-base ${textColor}`}>
                    By:{" "}
                    <span
                      className={`${
                        darkMode
                          ? "text-yellow_color"
                          : " text-primary"
                      } `}
                    >
                      {bookData.author.name}
                    </span>
                  </h2>
                  <h2 className={`text-base py-4 ${textColor}`}>
                    Category:{" "}
                    <span
                      className={`${
                        darkMode
                          ? "text-yellow_color"
                          : " text-primary"
                      } `}
                    >
                      {bookData.category.name}
                    </span>
                  </h2>
                  <h2
                    className={`md:text-lg lg::text-xl flex items-center ${textColor}`}
                  >
                    <Rating name="read-only" value={bookData.rating} readOnly />
                    <span className="text-sm ms-3">({bookData.rating})</span>
                  </h2>
                </div>
                <div className="">
                  <h4
                    className={`text-sm md:text-base font-semibold me-6 ${textColor}`}
                  >
                    Total Copies:{" "}
                    <span
                      className={`${
                        darkMode
                          ? "text-yellow_color"
                          : " text-primary"
                      } ms-2`}
                    >
                      {bookData.totalCopies}
                    </span>
                  </h4>
                  <h4
                    className={`text-sm md:text-base  font-semibold ${textColor}`}
                  >
                    Available Copies:{" "}
                    <span
                      className={`${
                        darkMode
                          ? "text-yellow_color"
                          : " text-primary"
                      } ms-2`}
                    >
                      {bookData.availableCopies}
                    </span>
                    <span className={`sm:inline-block hidden sm:text-xs md:text-sm text-light_text ${darkMode ? "bg-secondary" : "bg-light_theme_secondary"}  px-3 py-1 ms-3`}>
                      Limited Stock
                    </span>
                  </h4>
                </div>

                <div className="flex items-center mt-6">
                  {(borrowBooks &&
                    borrowRequest &&
                    borrowBooks?.some((b) => b.book._id === bookData._id)) ||
                  borrowRequest?.some((b) => b.book._id === bookData._id) ? (
                    <button
                      className={`text-dark_text rounded-[25px] bg-yellow_color transition-all duration-300 capitalize text-[.8rem] font-semibold px-4 py-2 mt-4`}
                    >
                      Borrowed
                    </button>
                  ) : (
                    <button
                      onClick={() => handleBorrowedRequest(bookData._id)}
                      className={`${darkMode ? "primary-dark-mode-button" : "primary-button"} transition-all duration-300 capitalize text-[.8rem] font-semibold px-4 py-2 mt-4`}
                    >
                      Borrow Now
                    </button>
                  )}
                </div>

                <div className="book_overview_details lg:block hidden">
                  <BookOverviewDetails book={bookData} />
                </div>
              </div>
            </div>

            <div className="book_overview_details lg:hidden block lg:min-h-0 min-h-[550px]">
              <BookOverviewDetails book={bookData} />
            </div>

            <div className="related_books mt-10">
              <RelatedBooks book={bookData} />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default BookOverview;
