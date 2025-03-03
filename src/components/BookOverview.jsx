import React from "react";
import { BookCover, Button } from "./index";
import { Rating } from "@mui/material";
import { IoMdHeartEmpty } from "react-icons/io";
import BookOverviewDetails from "./BookOverviewDetails";
import RelatedBooks from "./RelatedBooks";
import { useMediaQuery } from "@mui/material";

const BookOverview = ({ book, darkMode }) => {

  const matches = useMediaQuery('(max-width:530px)');

  const {
    title,
    description,
    author,
    category,
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
      <section id="book-overview" className="py-10 sm:py-20">
        <div className="container mx-auto">
          <div className={`${matches ? "block" : "flex"}`}>
            <div className="relative">
              <BookCover
                className="z-[999]"
                coverColor={color}
                coverImage={cover}
              />
            </div>
            <div className={`book_overview sm:ps-6 ps-3 ${matches ? "pt-6" : "pt-0"}`}>
              <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ${textColor}`}>{title}</h1>
              <div className="py-6">
                <h2 className={`md:text-lg lg::text-xl ${textColor}`}>
                  By: <span className={`${darkMode ? "text-light_theme_light_mode" : " text-primary"} `}>{author}</span>
                </h2>
                <h2 className={`md:text-lg lg::text-xl py-4 ${textColor}`}>
                  Category:{" "}
                  <span className={`${darkMode ? "text-light_theme_light_mode" : " text-primary"} `}>{category}</span>
                </h2>
                <h2 className={`md:text-lg lg::text-xl flex items-center ${textColor}`}>
                  <Rating name="read-only" value={rating} readOnly />
                  <span className="text-sm ms-3">({rating})</span>
                </h2>
              </div>
              <div className="">
                <h4 className={`text-sm md:text-base font-semibold me-6 ${textColor}`}>
                  Total Copies:{" "}
                  <span className={`${darkMode ? "text-light_theme_light_mode" : " text-primary"} ms-2`}>
                    {total_copies}
                  </span>
                </h4>
                <h4 className={`text-sm md:text-base  font-semibold ${textColor}`}>
                  Available Copies:{" "}
                  <span className={`${darkMode ? "text-light_theme_light_mode" : " text-primary"} ms-2`}>
                    {available_copies}
                  </span>
                  <span className="sm:inline-block hidden sm:text-xs md:text-sm text-light_text bg-light_theme_secondary px-3 py-1 ms-3">
                    Limited Stock
                  </span>
                </h4>
              </div>

              <div className="flex items-center mt-6">
                <Button label="Borrowing Now" />
                <IoMdHeartEmpty
                  size={28}
                  className="text-light_theme_primary ms-2 mt-4 cursor-pointer"
                />
              </div>

              <div className="book_overview_details lg:block hidden">
                <BookOverviewDetails book={book} />
              </div>
            </div>
          </div>

          <div className="book_overview_details lg:hidden block">
            <BookOverviewDetails book={book} />
          </div>

          <div className="related_books mt-10">
            <RelatedBooks book={book} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BookOverview;
