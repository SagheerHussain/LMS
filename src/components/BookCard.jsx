import { DarkThemeContext } from "@/context/ThemeContext";
import { Popover, Rating, Typography, useMediaQuery } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
import Swal from "sweetalert2";
import {
  createBorrowedRequest,
  getBorrowedBooksById,
  getBorrowedRequestById,
} from "../../services/borrowedService";

const BookCard = ({
  book,
  label = "",
  content_classes = "",
  isMoreInfo,
  className = "",
}) => {
  const { darkMode } = useContext(DarkThemeContext);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));

  const isMatch = useMediaQuery("(max-width:820px)");
  const smDevice = useMediaQuery("(max-width:510px)");

  const [year, setYear] = useState(null);
  const [borrowBooks, setBorrowBooks] = useState([]);
  const [borrowRequest, setBorrowRequest] = useState([]);
  const [loadingBorrowStatus, setLoadingBorrowStatus] = useState(true);

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
    setYear(new Date().getFullYear());
  }, []);

  const handleBorrowedRequest = async (bookId) => {
    try {
      if (user.isVerified) {
        const createRequest = { studentId: user._id, bookId };
        const data = await createBorrowedRequest(createRequest, token);
        if (data.success) {
          Swal.fire({
            title: data.message,
            timer: 1500,
            icon: "success",
          });
          getBorrowBooks();
        }
      } else {
        Swal.fire({
          title: "Your account is awaiting approval",
          html: "We appreciate your interest. Our team is currently reviewing your account details. Once verified by the admin, you'll be able to borrow books.<br/><b>You can check your account status in your profile</b>",
          icon: "info",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getBorrowBooks = async () => {
    setLoadingBorrowStatus(true);
    try {
      const borrowBooksRes = await getBorrowedBooksById(user._id, token);
      const borrowRequestRes = await getBorrowedRequestById(user._id, token);
      setBorrowBooks(borrowBooksRes.data);
      setBorrowRequest(borrowRequestRes.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingBorrowStatus(false);
    }
  };

  useEffect(() => {
    getBorrowBooks();
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleNavigateRequests = () => {
    navigate("/profile");
  };

  return (
    <>
      <div
        className={`book_card ${className} w-full scale-[.95] relative ${
          smDevice && "text-center"
        }`}
      >
        <Link to={`/book-overview/${_id}`} key={_id}>
          <div className={`cursor-pointer book_image ${smDevice && "mx-auto"}`}>
            <img
              src={image}
              className={`w-full lg:h-[400px] object-cover object-left-top rounded-[25px] `}
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
          <h4 className={`${darkMode ? "text-zinc-300" : "text-zinc-700"} text-sm pt-2`}>
            By: {author.name}
          </h4>
          <h3 className={`${darkMode ? "text-zinc-300" : "text-dark_text"}`}>
            {title?.slice(0, 30)}...
          </h3>
          <Link to={`/book-overview/${_id}`} key={_id}>
            {isMoreInfo && (
              <h3 className={`${darkMode ? "text-zinc-300" : "text-zinc-800"} text-sm pt-3 flex items-center ${smDevice ? "justify-center" : "justify-start"}`}>
                Category: {category.name}
              </h3>
            )}
          </Link>
          <div className={`flex items-center ${smDevice ? "justify-center" : "justify-start"}`}>
            {loadingBorrowStatus ? (
              <button
                disabled
                className={`text-gray-400 bg-green-100 px-4 py-2 mt-4 rounded-[25px] text-sm`}
              >
                Loading...
              </button>
            ) : borrowBooks?.some((b) => b.book._id === book._id) || borrowRequest?.some((b) => b.book._id === book._id) ? (
              <div className="mt-4 flex items-center">
                {borrowRequest?.some((b) => b.book._id === book._id) ? (
                  <>
                    <button
                      className={` text-light_text rounded-[25px] ${
                        darkMode ? "bg-[#074a69]" : "bg-light_theme_secondary"
                      } text-sm font-semibold px-4 py-2`}
                    >
                      Waiting For Approval
                    </button>
                    <span className="ms-2">
                      <HiOutlineExternalLink
                        onClick={handleNavigateRequests}
                        size={20}
                        className={`text-light_theme_secondary`}
                      />
                    </span>
                  </>
                ) : (
                  <button className={` text-dark_text rounded-[25px] bg-yellow_color text-sm font-semibold px-4 py-2`}>
                    Borrowed
                  </button>
                )}
              </div>
            ) : (
              <button
                onClick={() => handleBorrowedRequest(_id)}
                className={`${
                  darkMode ? "primary-dark-mode-button" : "primary-button"
                } text-sm font-semibold px-4 py-2 mt-4`}
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
