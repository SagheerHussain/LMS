import React, { useContext, useEffect } from "react";
import { IoSearch, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { FaRegUser, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdCall } from "react-icons/md";
import { Logo, NavMenus } from "../components/index";
import { DarkThemeContext } from "@/context/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkThemeContext);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#111" : "white";
  }, [darkMode]);

  return (
    <>
      <header
        id="header"
        classNam  e={`${
          darkMode ? "bg-[#111]" : "bg-white"
        } `}
      >
        <div
          id="top_navigation"
          className={`${
            darkMode
              ? "bg-[#222]"
              : "bg-[#f54512]"
          }`}
        >
          <div className={`container mx-auto py-2 px-6`}>
            <div className="flex items-center justify-between">
              <div className="client_contact">
                <Link
                  to={`phone:+92 331 6725129`}
                  className={`text-white flex items-center`}
                >
                  <MdCall />
                  <span className="font-medium">+92 331 6725129</span>
                </Link>
              </div>
              <div className="client_social_icons flex items-center">
                <FaFacebookF size={24} className={`bg-[#ffffff98] p-1 me-2`} />
                <FaLinkedin size={24} className={`bg-[#ffffff98] p-1`} />
              </div>
            </div>
          </div>
        </div>

        <nav id="navbar" className={`${darkMode ? "border-b-[#a5a5a56d]" : "border-b-zinc-300"}`}>
          <div
            className={`container mx-auto  py-4 px-6 flex items-center justify-between rounded-lg`}
          >
            {/* Left Side - Logo */}
            <div className="navbar_logo text-2xl font-bold text-gray-800">
              <Logo />
            </div>
            {/* Center - Search Box */}
            <div className="navbar_search_field relative w-1/2">
              <input
                type="text"
                placeholder="Search books..."
                className={`w-full py-2 pl-2 pr-2 bg-transparent border ${
                  darkMode
                    ? "border-zinc-700 focus:border-zinc-800 text-white"
                    : "border-zinc-300 focus:border-zinc-300"
                }  focus:outline-none focus:shadow-none `}
              />
              <button className={`absolute right-[10px] top-1/2 transform -translate-y-1/2 ${darkMode ? "bg-[#333] hover:bg-[#333333b7]" : "bg-[#f54512] hover:bg-[#f54312d7]"}  p-1 text-white`}>
                <IoSearch size={24} className="font-semibold" />
              </button>
            </div>

            {/* Right Side - Profile & Logout Icons */}
            <div
              className={`navbar_menus flex items-center gap-3 ${
                darkMode ? "text-zinc-300" : "text-zinc-700"
              } `}
            >
              <div
                className={`navbar_profile flex items-center cursor-pointer ${
                  darkMode ? "hover:bg-zinc-800" : "hover:bg-zinc-200"
                } p-3`}
              >
                <FaRegUser size={20} />
                <label htmlFor="" className="ms-2">
                  Muhammad Shayan
                </label>
              </div>
              <div
                className={`navbar_logout flex items-center cursor-pointer ${
                  darkMode ? "hover:bg-zinc-800" : "hover:bg-zinc-200"
                } p-3`}
              >
                <FiLogOut size={20} />
                <label htmlFor="" className="ms-2">
                  Logout
                </label>
              </div>
              <div
                className={`navbar_dark_mode flex items-center cursor-pointer ${
                  darkMode ? "hover:bg-zinc-800" : "hover:bg-zinc-200"
                }  p-2`}
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
