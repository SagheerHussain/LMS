import { DarkThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const Button = ({ className = "", label = "" }) => {
  const { darkMode } = useContext(DarkThemeContext);
  return (
    <>
      <button
        className={`${className} primary-button transition-all duration-300 uppercase text-[.8rem] font-semibold px-4 py-2 mt-4`}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
