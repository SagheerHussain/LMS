import { DarkThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const { darkMode } = useContext(DarkThemeContext);

  return (
    <>
      <input
        type="text"
        placeholder="Search books..."
        className={`w-full py-3 pl-4 rounded-[25px] pr-2 bg-transparent border ${
          darkMode
            ? "border-[#ffffff2c] focus:border-[#ffffff32] text-light_text placeholder:text-light_text"
            : "border-[#ffffff2c] focus:border-[#ffffff2c] text-light_text placeholder:text-light_text"
        } focus:outline-none focus:shadow-none `}
      />
      <button
        className={`absolute right-[5px] rounded-[25px] top-1/2 transform -translate-y-1/2 ${
          darkMode
            ? "bg-primary hover:bg-hover_color text-light_text"
            : "bg-light_theme_light_mode text-dark_text hover:bg-light_theme_hover_mode"
        } px-2 py-2`}
      >
        <IoSearch size={24} className="font-semibold" />
      </button>
    </>
  );
};

export default SearchBar;
