import React from "react";
import { FaRegStar } from "react-icons/fa";
import { BookCover } from ".";

const BookOverview = ({ book, darkMode }) => {
  const {
    title,
    description,
    author,
    genre,
    publishedYear,
    rating,
    total_copies,
    available_copies,
    color,
    cover,
    video,
    summary,
  } = book;

  const textColor = darkMode ? "text-white" : "text-black";

  return (
    <>
      <div className="flex items-center">
        <div className="book_overview w-1/2">
          <h1 className={`text-5xl font-bold ${textColor}`}>{title}</h1>
          <div className="flex items-center py-6">
            <span className={`text-xl ${textColor}`}>
              By <span className={textColor}>{author}</span>
            </span>
            <span className={`text-xl px-6 ${textColor}`}>
              Category: <span className={textColor}>{genre}</span>
            </span>
            <span className={`text-xl flex items-center ${textColor}`}>
              <FaRegStar /> <span className={`${textColor} ms-2`}>{rating}/5</span>
            </span>
          </div>
          <div className="flex items-center">
            <h4 className={`text-xl font-semibold me-6 ${textColor}`}>
              Total Copies: <span className={textColor}>{total_copies}</span>
            </h4>
            <h4 className={`text-xl font-semibold ${textColor}`}>
              Available Copies: <span className={textColor}>{available_copies}</span>
            </h4>
          </div>
          <p className={`text-lg py-6 ${textColor}`}>{description}</p>

          <button className="primary-button">Borrowing Book</button>
        </div>
        <div className="relative flex flex-1 justify-center">
          <div className="relative">
            <BookCover className="z-[999]" coverColor={color} coverImage={cover} />

            <div className="absolute blur-[4px] left-[8rem] top-10 rotate-12 opacity-40 max-sm:hidden z-[-1]">
              <BookCover coverColor={color} coverImage={cover} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookOverview;
