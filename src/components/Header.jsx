import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Logo } from "../components/index";

const Header = () => {
  return (
    <>
      <header id="header" className="border-b border-b-[#a5a5a56d]">
        <nav id="navbar">
          <div className="container mx-auto max-w-[1800px] py-4 px-6 flex items-center justify-between bg-white rounded-lg">
            {/* Left Side - Logo */}
            <div className="navbar_logo text-2xl font-bold text-gray-800">
              <Logo />
            </div>

            {/* Center - Search Box */}
            <div className="navbar_search_field relative w-1/2">
              <input
                type="text"
                placeholder="Search books..."
                className="w-full py-2 pl-4 pr-4 border border-zinc-300 focus:outline-none rounded-[50px] focus:shadow-none focus:border-zinc-400"
              />
              <button className="absolute right-[16px] top-1/2 transform -translate-y-1/2 bg-[#fa0032] p-2 rounded-[50%] hover:bg-[#ff2954] text-white">
                <IoSearch size={18} className="font-semibold" />
              </button>
            </div>

            {/* Right Side - Profile & Logout Icons */}
            <div className="navbar_menus flex items-center gap-3 text-gray-700">
              <div className="navbar_profile flex items-center cursor-pointer hover:bg-zinc-200 p-3">
                <FaRegUser
                  size={20}
                />
                <label htmlFor="" className="ms-2">Muhammad Shayan</label>
              </div>
              <div className="navbar_logout flex items-center cursor-pointer hover:bg-zinc-200 p-3">
                <FiLogOut size={20}  />
                <label htmlFor="" className="ms-2">Logout</label>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
