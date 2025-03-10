import React, { useCallback, useEffect, useState } from "react";
import { BookCover, Button } from "./index";
import { Rating } from "@mui/material";
import { IoMdHeartEmpty } from "react-icons/io";
import BookOverviewDetails from "./BookOverviewDetails";
import RelatedBooks from "./RelatedBooks";
import { useMediaQuery } from "@mui/material";
import { getBookDetails } from "../../services/bookService";

const BookOverview = ({ id, darkMode }) => {
  const matches = useMediaQuery("(max-width:530px)");

  const [bookData, setBookData] = useState(null);

  const fetchingBookData = useCallback(async () => {
    try {
      const book = await getBookDetails(id);
      setBookData(book);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetchingBookData();
  }, [fetchingBookData, id]);

  const textColor = darkMode ? "text-white" : "text-black";

  return (
    <>
      <section id="book-overview" className="py-10 sm:py-20">
        {bookData && (
          <div className="container mx-auto">
            <div className={`${matches ? "block" : "flex"}`}>
              <div className="relative">
                <BookCover
                className="z-[999]"
                image={bookData.image}
              />
              </div>
              <div
                className={`book_overview sm:ps-6 ps-3 ${
                  matches ? "pt-6" : "pt-0"
                }`}
              >
                <h1
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ${textColor}`}
                >
                  {bookData.title}
                </h1>
                <div className="py-6">
                  <h2 className={`md:text-lg lg::text-xl ${textColor}`}>
                    By:{" "}
                    <span
                      className={`${
                        darkMode
                          ? "text-light_theme_light_mode"
                          : " text-primary"
                      } `}
                    >
                      {bookData.author.name}
                    </span>
                  </h2>
                  <h2 className={`md:text-lg lg::text-xl py-4 ${textColor}`}>
                    Category:{" "}
                    <span
                      className={`${
                        darkMode
                          ? "text-light_theme_light_mode"
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
                          ? "text-light_theme_light_mode"
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
                          ? "text-light_theme_light_mode"
                          : " text-primary"
                      } ms-2`}
                    >
                      {bookData.availableCopies}
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
                  <BookOverviewDetails book={bookData} />
                </div>
              </div>
            </div>

            <div className="book_overview_details lg:hidden block">
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
