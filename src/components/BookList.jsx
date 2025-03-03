import React, { useContext } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BookCard } from "./index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { DarkThemeContext } from "@/context/ThemeContext";

const BookList = ({
  title,
  books,
  className = "",
  breakPoints,
  content_classes,
  isMoreInfo = false,
}) => {
  const { darkMode } = useContext(DarkThemeContext);

  return (
    <>
      <section className="books py-10">
        <div className="container mx-auto">
          <h1
            className={`${darkMode ? "text-zinc-300" : "text-zinc-800"
              } text-3xl font-semibold mb-6`}
          >
            {title}
          </h1>

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
            {books?.map((book) => (
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
      </section>
    </>
  );
};

export default BookList;
