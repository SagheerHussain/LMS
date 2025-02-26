import React from "react";
import { BookCoverSvg } from "./index";
import { cn } from "@/lib/utils";

const BookCover = ({ coverImage = "", coverColor = "", className = "" }) => {
  return (
    <>
      <img
        src={coverImage}
        className={`${className} rounded-sm object-fill max-w-[400px] z-[999]`}
        alt="Book cover"
        loading="lazy"
      />
    </>
  );
};

export default BookCover;
