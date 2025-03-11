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
            <>
              <div key={category._id}>
                <h1
                  className={`${
                    darkMode ? "text-zinc-300" : "text-zinc-800"
                  } text-3xl font-semibold mt-10 mb-4`}
                >
                  {category.name}
                </h1>
              </div>

              <Swiper
                spaceBetween={20} // Default spacing
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                centeredSlides={false}
                navigation={{ clickable: true }}
                modules={[Navigation, Autoplay, Pagination]}
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
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default BookList;
