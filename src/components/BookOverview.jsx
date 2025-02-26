import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Button } from "./ui/button";
import { BookCover } from ".";

const BookOverview = ({
  book,
  // title = "",
  // description = "",
  // author = "",
  // genre,
  // publishedYear = null,
  // rating = 0,
  // totalCopies = 0,
  // availableCopies = 0,
  // color = "",
  // cover = "",
  // video = "",
  // summary = "",
}) => {
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

  return (
    <>
      <div className="flex items-center">
        <div className="book_overview w-1/2">
          <h1 className="text-5xl font-bold text-black">{title}</h1>
          <div className="flex items-center py-6">
            <span className="text-xl text-black">
              By <span className="text-black">{author}</span>
            </span>
            <span className="text-xl px-6 text-black">
              Category: <span className="text-black">{genre}</span>
            </span>
            <span className="text-xl flex items-center text-black">
              <FaRegStar />{" "}
              <span className="text-black ms-2">{rating}/5</span>
            </span>
          </div>
          <div className="flex items-center">
            <h4 className="text-xl font-semibold me-6 text-black">
              Total Copies: <span className="text-black">{total_copies}</span>
            </h4>
            <h4 className="text-xl font-semibold text-black">
              Available Copies: <span className="text-black">{available_copies}</span>
            </h4>
          </div>
          <p className="text-lg py-6 text-black">{description}</p>

          <button className="primary-button">Borrowing Book</button>
        </div>
        <div className="relative flex flex-1 justify-center">
          <div className="relative">
            <BookCover
              className="z-[999]"
              coverColor={color}
              coverImage={cover}
            />

            <div className="absolute blur-[4px] left-[8rem] top-10 rotate-12 opacity-40 max-sm:hidden z-[-1]">
              <BookCover
                coverColor={color}
                coverImage={cover}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookOverview;
