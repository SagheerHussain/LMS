import React from "react";
import { Logo } from "./index";
import { DarkThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import payment from "/Images/payment.png";
import { IoSearch } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { darkMode } = useContext(DarkThemeContext);

  return (
    <footer class={` ${darkMode ? "bg-[#111]" : "bg-white"} `}>
      <div class="mx-auto w-full container">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2
              class={`mb-6 text-sm font-bold ${
                darkMode ? "text-zinc-300" : "text-[#3076d2]"
              } uppercase`}
            >
              Need Help?
            </h2>
            <ul
              class={`${
                darkMode ? "text-zinc-300" : "text-zinc-500"
              } font-medium text-sm`}
            >
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Help Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Shipping FAQs
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Pick up in Store
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Order Status
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Product Recalls
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Corrections & Updates
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class={`mb-6 text-sm font-bold ${
                darkMode ? "text-zinc-300" : "text-[#3076d2]"
              } uppercase`}
            >
              About Us
            </h2>
            <ul
              class={`${
                darkMode ? "text-zinc-300" : "text-zinc-500"
              } font-medium text-sm`}
            >
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Contact Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Track Your Order
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Returns Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Delivery Information
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Loyalty Program
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class={`mb-6 text-sm font-bold ${
                darkMode ? "text-zinc-300" : "text-[#3076d2]"
              } uppercase`}
            >
              Categories
            </h2>
            <ul
              class={`${
                darkMode ? "text-zinc-300" : "text-zinc-500"
              } font-medium text-sm`}
            >
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Coupons
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  RX Prescription
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Scholarship Program
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Brand Directory
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  E-Catalogs/Requests
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Order Form
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#eee]">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class={`mb-6 text-sm font-bold ${
                darkMode ? "text-zinc-300" : "text-[#3076d2]"
              } uppercase`}
            >
              Our Newsletter
            </h2>
            <p
              class={`text-sm ${
                darkMode ? "text-zinc-300" : "text-zinc-800"
              } mb-4`}
            >
              Sign up for our latest news and offers:
            </p>
            <div class="relative">
              <input
                type="search"
                id="search"
                className={`block rounded-[25px] w-full px-4 py-3 ps-5 text-sm ${darkMode ? "text-zinc-300 border-zinc-800" : "text-zinc-800 border-zinc-400"} border bg-transparent focus:outline-none focus:shadow-none focus:border-zinc-800`}
                placeholder="Search"
                required
              />
              <button
                type="submit"
                class={`text-white absolute top-[50%] -translate-y-[50%] right-[6px] ${darkMode ? "bg-[#222] hover:bg-[#333] text-zinc-300" : "bg-[#ddd] hover:bg-[#ccc] text-zinc-800"} focus:outline-none font-medium rounded-[25px] text-sm px-2 py-2`}
              >
                <IoSearch size={20} />
              </button>
            </div>
          </div>
        </div>
        <div
          class={`px-4 py-6 ${
            darkMode ? "bg-[#111]" : "bg-white"
          } md:flex md:items-center md:justify-between`}
        >
          <span
            class={`text-sm ${
              darkMode ? "text-zinc-300" : "text-zinc-800"
            } sm:text-center`}
          >
            © copyright 2025 <a href="https://flowbite.com/">Skynet Silicon</a>. All
            Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <img src={payment} loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
