import React, { useCallback, useContext, useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BookCard } from "./index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { DarkThemeContext } from "@/context/ThemeContext";
// Import Services
import { getCategories } from "../../services/categoryService";
import { getBooks } from "../../services/bookService";
import { ClipLoader, PacmanLoader, PropagateLoader } from "react-spinners";
import { Link } from "react-router-dom";

const BookList = ({
  className = "",
  breakPoints,
  content_classes,
  isMoreInfo = false,
}) => {
  const { darkMode } = useContext(DarkThemeContext);

  // State Variables
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);
  const [bookLists, setBookLists] = useState([]);

  // Fetching Categories
  const fetchingData = useCallback(async () => {
    setLoading(true);
    try {
      const categories = await getCategories();
      const books = await getBooks();

      if (categories.length > 0 || books.length > 0) {
        setCategories(categories);
        setBookLists(books);
        setLoading(false);
        setError(false);
        console.log("books", books);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }, []);

  // Fetch Books
  useEffect(() => {
    fetchingData();
  }, [fetchingData]);

  return (
    <>
      <section className="books py-10">
        <div className="container mx-auto">
          {loading && (
            <div className="flex justify-center pt-10">
              <ClipLoader color={`${darkMode ? "#fff" : "#000"}`} size={36} />
            </div>
          )}
          {error && <div className="text-white">Error fetching books</div>}

          {categories?.map((category) => (
            <div className="pb-12">
              <div
                key={category._id}
                className="flex items-center justify-between "
              >
                <h1
                  className={`${
                    darkMode ? "text-zinc-300" : "text-zinc-800"
                  } text-2xl font-serif italic pt-14 pb-5 `}
                >
                  {category.name}
                </h1>
                <Link
                  to={`/filtered-books/${category.slug}`}
                  className={`${
                    darkMode
                      ? "text-light_text bg-secondary hover:bg-[#074a69]"
                      : "text-light_text bg-light_theme_primary hover:bg-light_theme_secondary"
                  } mt-10 text-sm px-3 py-1`}
                >
                  See All
                </Link>
              </div>

                <Swiper
                  spaceBetween={20} // Default spacing
                  // autoplay={{ delay: 2500, disableOnInteraction: false }}
                  loop={true}
                  centeredSlides={false}
                  navigation={{ clickable: true }}
                  modules={[Navigation, Pagination]}
                  pagination={{ clickable: true }}
                  breakpoints={breakPoints}
                >
                  {bookLists
                    ?.filter((book) => book.category.name === category.name)
                    .map((book) => (
                      <SwiperSlide key={book.id || book.title}>
                        <BookCard
                          book={book}
                          className={className}
                          isMoreInfo={isMoreInfo}
                          content_classes={content_classes}
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>

            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BookList;
