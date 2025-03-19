import { DarkThemeContext } from "@/context/ThemeContext";
import { Popover, Rating, Typography, useMediaQuery } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaExclamation } from "react-icons/fa";
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
  const navigate = useNavigate();

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
          title: "Your account is awaiting approval",
          html: "We appreciate your interest Our team is currently reviewing your account details. Once verified by the admin, you'll be able to borrow books. <br /> <b>You can check your account status in your profile</b>",
          icon: "info",
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

  // Popover
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // Handle Navigate
  const handleNavigateRequests = () => {
    navigate("/profile");
  };

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
                ? `${isMatch ? "scale-[1]" : "scale-[1]"}`
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
          <h3 className={`${darkMode ? "text-zinc-300" : "text-dark_text"}`}>
            {title?.slice(0, 30)}...
          </h3>
          <Link to={`/book-overview/${_id}`} key={_id}>
            {isMoreInfo && (
              <>
                <h3
                  className={`${
                    darkMode ? "text-zinc-300" : "text-zinc-800"
                  } text-sm pt-3 flex items-center justify-between`}
                >
                  Category: {category.name}
                </h3>
              </>
            )}
          </Link>
          <div className={`flex items-center`}>
            {(borrowBooks &&
              borrowRequest &&
              borrowBooks?.some((b) => b.book._id === book._id)) ||
            borrowRequest?.some((b) => b.book._id === book._id) ? (
              <>
              <div className="mt-4 flex items-center">
                <button
                  className={` text-light_text rounded-[25px] ${
                    darkMode ? "bg-[#074a69]" : "bg-light_theme_secondary"
                  }  transition-all duration-300 capitalize text-[.8rem] font-semibold px-4 py-2`}
                >
                  Borrowed
                </button>
                {borrowRequest?.some((b) => b.book._id === book._id) && (
                  <>
                    <span className="ms-4 me-2 ">
                      <Typography
                        aria-owns={open ? "mouse-over-popover" : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        className="text-sm"
                      >
                        <FaExclamation
                          size={20}
                          className={`bg-yellow_color p-1 text-dark_text rounded-full`}
                        />
                      </Typography>
                      <Popover
                        id="mouse-over-popover"
                        sx={{ pointerEvents: "none" }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                      >
                        <Typography
                          sx={{
                            p: 1,
                            backgroundColor: "#ea9d31",
                            color: "#000",
                            fontSize: ".8rem",
                          }}
                        >
                          Waiting For Approval.
                        </Typography>
                      </Popover>
                    </span>
                    <span>
                      <HiOutlineExternalLink onClick={handleNavigateRequests} size={20} className={`text-yellow_color`} />
                    </span>
                  </>
                )}
                </div>
              </>
            ) : (
              <button
                onClick={() => handleBorrowedRequest(_id)}
                className={`${
                  darkMode ? "primary-dark-mode-button" : "primary-button"
                }  transition-all duration-300 capitalize text-[.8rem] font-semibold px-4 py-2 mt-4`}
              >
                Borrow Now
              </button>
            )}
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
