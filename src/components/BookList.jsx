import React, { useContext } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BookCard } from "./index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { DarkThemeContext } from "@/context/ThemeContext";

const BookList = ({ title, books, className = "", content_classes, isMoreInfo = false }) => {
  const { darkMode } = useContext(DarkThemeContext);

  return (
    <>
      <section className="books my-20">
        <div className="container mx-auto">
          <h1
            className={`${
              darkMode ? "text-zinc-300" : "text-zinc-800"
            } text-3xl font-semibold mb-6 font-serif`}
          >
            {title}
          </h1>

          <Swiper
            spaceBetween={50}
            slidesPerView={Math.min(books.length, 5)}
            autoplay={{ delay: 2500 }}
            modules={[Navigation]}
            navigation={{ clickable: true }}
          >
            {books?.map((book) => (
              <SwiperSlide>
                <BookCard book={book} className={className} isMoreInfo={isMoreInfo} content_classes={content_classes} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default BookList;
