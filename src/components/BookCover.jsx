import React from "react";
import { useMediaQuery } from "@mui/material";

const BookCover = ({ image = "", className = "" }) => {

  const matches = useMediaQuery('(max-width:530px)');

  return (
    <>
      <img
        src={image}
        className={`${className} object-cover min-w-[400px] min-h-[400px] object-top z-[999] rounded-[25px]`}
        alt="Book cover"
        loading="lazy"
      />
    </>
  );
};

export default BookCover;
