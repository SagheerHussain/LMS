import React, { useContext, useEffect, useState } from "react";
import { IoSearch, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { FaRegUser, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdCall, MdEmail } from "react-icons/md";
import { Logo, NavMenus } from "../components/index";
import { DarkThemeContext } from "@/context/ThemeContext";
import { Link } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkThemeContext);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#111" : "white";
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
        setIsFixed(true); // Fix navbar when scrolled past 100px
        setIsScrollingUp(currentScrollY < lastScrollY); // Check scroll direction
      } else {
        setIsFixed(false); // Reset when at the top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        id="header"
        className={`${darkMode ? "bg-[#111]" : "bg-white"} relative`}
      >
        <div
          id="top_navigation"
          className={`${
            darkMode ? "bg-[#111]" : "bg-[#fff]"
          } pt-3 pb-4 sm:block hidden`}
        >
          <div className={`container mx-auto py-2 px-6`}>
            <div className="flex items-center justify-between">
              <div className="client_contact flex items-center">
                <Link
                  to={`tel:+92 331 6725129`}
                  className={`${
                    darkMode ? "text-zinc-300" : "text-zinc-800"
                  } flex items-center me-4`}
                >
                  <MdCall />
                  <span className="font-medium">+92 331 6725129</span>
                </Link>
                <Link
                  to={`mailto:info@booksvilla.com`}
                  className={`${
                    darkMode ? "text-zinc-300" : "text-zinc-800"
                  } flex items-center`}
                >
                  <MdEmail className="mt-[1px] me-1" />
                  <span className="font-medium">info@booksvilla.com</span>
                </Link>
              </div>
              <div className="client_social_icons flex items-center">
                <a href="#">
                  <FaFacebookF
                    size={24}
                    className={`rounded-[50%] ${
                      darkMode ? "bg-[#222] hover:bg-[#333]  text-zinc-300 " : "bg-[#ddd] hover:bg-[#ccc]"
                    } p-1 `}
                  />
                </a>
                <a href="#">
                  <FaLinkedin
                    size={24}
                    className={`rounded-[50%] ${
                      darkMode ? "bg-[#222] hover:bg-[#333] text-zinc-300 " : "bg-[#ddd] hover:bg-[#ccc]"
                    } p-1 mx-2`}
                  />
                </a>
                <a href="#">
                  <FaTwitter
                    size={24}
                    className={`rounded-[50%] ${
                      darkMode ? "bg-[#222] hover:bg-[#333] text-zinc-300 " : "bg-[#ddd] hover:bg-[#ccc]"
                    } p-1`}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav
          id="navbar"
          className={`${
            darkMode ? "border-b-[#a5a5a56d]" : "border-b-zinc-300"
          } ${
            isFixed
              ? `fixed top-0 left-0 w-full transition-all duration-300 shadow-md linear ${
                  darkMode ? "bg-[#222]" : "bg-[#fff] shadow"
                } `
              : ""
          } ${
            isFixed && !isScrollingUp
              ? "-translate-y-full bg-transparent"
              : "translate-y-0 z-[999]"
          }`}
        >
          <div
            className={`container mx-auto py-4 px-6 flex items-center justify-between rounded-lg`}
          >
            {/* Left Side - Logo */}
            <div className="navbar_logo text-2xl font-bold text-gray-800">
              <Logo />
            </div>
            {/* Center - Search Box */}
            <div className="navbar_search_field relative lg:w-[40%] lg:block hidden xl:w-1/2">
              <input
                type="text"
                placeholder="Search books..."
                className={`w-full py-3 pl-4 rounded-[25px] pr-2 bg-transparent border ${
                  darkMode
                    ? "border-zinc-700 focus:border-zinc-800 text-white"
                    : "border-zinc-300 focus:border-zinc-300"
                } focus:outline-none focus:shadow-none`}
              />
              <button
                className={`absolute right-[5px] rounded-[25px] top-1/2 transform -translate-y-1/2 ${
                  darkMode
                    ? "bg-[#333] hover:bg-[#333333b7]"
                    : "bg-[#f54512] hover:bg-[#f54312d7]"
                } px-2 py-2 text-white`}
              >
                <IoSearch size={24} className="font-semibold" />
              </button>
            </div>

            {/* Right Side - Profile & Logout Icons */}
            <div
              className={`navbar_menus items-center gap-3 md:flex hidden desktop_only ${
                darkMode ? "text-zinc-300" : "text-zinc-700"
              }`}
            >
              <div
                className={`navbar_profile flex items-center cursor-pointer rounded-[25px] ${
                  darkMode ? "hover:bg-zinc-800" : "hover:bg-zinc-200"
                } py-3 px-4`}
              >
                <FaRegUser size={20} />
                <label htmlFor="" className="ms-2 cursor-pointer">
                  Muhammad Shayan
                </label>
              </div>
              <div
                className={`navbar_logout flex items-center cursor-pointer rounded-[25px] ${
                  darkMode ? "hover:bg-zinc-800" : "hover:bg-zinc-200"
                } py-3 px-4`}
              >
                <FiLogOut size={20} />
                <label htmlFor="" className="ms-2 cursor-pointer">
                  Logout
                </label>
              </div>
              <div
                className={`navbar_dark_mode flex items-center cursor-pointer rounded-[25px] ${
                  darkMode ? "hover:bg-zinc-800" : "hover:bg-zinc-200"
                } py-3 px-4`}
              >
                {darkMode ? (
                  <IoSunnyOutline
                    size={24}
                    onClick={() => setDarkMode(false)}
                  />
                ) : (
                  <IoMoonOutline size={24} onClick={() => setDarkMode(true)} />
                )}
              </div>
            </div>
          </div>
        </nav>

        <NavMenus />
      </header>
    </>
  );
};

export default Header;
