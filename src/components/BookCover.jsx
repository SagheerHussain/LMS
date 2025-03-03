import React from "react";
import { useMediaQuery } from "@mui/material";

const BookCover = ({ coverImage = "", coverColor = "", className = "" }) => {

  const matches = useMediaQuery('(max-width:530px)');

  return (
    <>
      <img
        src={coverImage}
        className={`${className} object-cover w-full max-h-[500px] object-top z-[999] rounded-[25px]`}
        alt="Book cover"
        loading="lazy"
      />
    </>
  );
};

export default BookCover;
