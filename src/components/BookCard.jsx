import { DarkThemeContext } from "@/context/ThemeContext";
import { Rating } from "@mui/material";
import React, { useContext } from "react";
import { FaEye } from "react-icons/fa6";
import { Button } from "./index";

const BookCard = ({
  book,
  content_classes = "",
  isMoreInfo,
  className = "",
}) => {
  // Context
  const { darkMode } = useContext(DarkThemeContext);

  // Book Data
  const { cover, title, author, description, genre, rating } = book;

  return (
    <>
      <>
        <div className={`book_card ${className}`}>
          <div className="group cursor-pointer book_image relative overflow-hidden min-w-[275px]">
            <img
              src={cover}
              className="w-full h-[500px] lg:h-[400px] object-cover object-left-top rounded-[25px]"
              alt={title}
              loading="lazy"
            />
            <div className="group-hover:bottom-0  transition-all duration-300 book_eye_icon absolute bottom-[-20%] flex justify-center items-center w-full bg-[#111111ca] text-white py-2">
              <FaEye className="cursor-pointer hover:text-[#ddd]" size={20} />
            </div>
          </div>
          <div className={`book_content ${content_classes}`}>
            <Rating name="read-only" className="text-[.8rem] mt-4" value={rating} readOnly />
            <h4
              className={`${
                darkMode ? "text-zinc-300" : "text-zinc-700"
              } text-sm pt-2`}
            >
              By: {author}
            </h4>
            <h3
              className={`${
                darkMode ? "text-zinc-300" : "text-[#3076d2]"
              } font-serif text-lg`}
            >
              {title}
            </h3>
            {isMoreInfo && (
              <>
                <p
                  className={`${
                    darkMode ? "text-zinc-300" : "text-zinc-800"
                  } text-sm pt-3`}
                >
                  {description}
                </p>
                <h3
                  className={`${
                    darkMode ? "text-zinc-300" : "text-zinc-800"
                  } text-sm pt-3`}
                >
                  Category: {genre}
                </h3>
              </>
            )}
            <Button label="Borrowing Now" />
          </div>
        </div>
      </>
    </>
  );
};

export default BookCard;
