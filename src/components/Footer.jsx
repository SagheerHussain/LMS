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
    <footer class={` ${darkMode ? "bg-[#04293A]" : "bg-light_theme_secondary"} `}>
      <div class="mx-auto w-full container">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2
              class={`mb-6 text-sm font-bold ${
                darkMode ? "text-light_text" : "text-light_theme_light_mode"
              } capitalize`}
            >
              Need Help?
            </h2>
            <ul
              class={`${
                darkMode ? "text-light_text" : "text-light_theme_light_mode"
              } font-medium text-sm`}
            >
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Help Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Shipping FAQs
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Pick up in Store
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Order Status
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Product Recalls
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Corrections & Updates
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class={`mb-6 text-sm font-bold ${
                darkMode ? "text-light_text" : "text-light_theme_light_mode"
              } capitalize`}
            >
              About Us
            </h2>
            <ul
              class={`${
                darkMode ? "text-light_text" : "text-light_theme_light_mode"
              } font-medium text-sm`}
            >
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Contact Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Track Your Order
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Returns Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Delivery Information
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Loyalty Program
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class={`mb-6 text-sm font-bold ${
                darkMode ? "text-light_text" : "text-light_theme_light_mode"
              } capitalize`}
            >
              Categories
            </h2>
            <ul
              class={`${
                darkMode ? "text-light_text" : "text-light_theme_light_mode"
              } font-medium text-sm`}
            >
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Coupons
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  RX Prescription
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Scholarship Program
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Brand Directory
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  E-Catalogs/Requests
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Order Form
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-secondary">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class={`mb-6 text-sm font-bold ${
                darkMode ? "text-light_text" : "text-light_theme_light_mode"
              } capitalize`}
            >
              Our Newsletter
            </h2>
            <p
              class={`text-sm ${
                darkMode ? "text-light_text" : "text-light_theme_light_mode"
              } mb-4`}
            >
              Sign up for our latest news and offers:
            </p>
            <div class="relative">
              <input
                type="email"
                id="email"
                className={`block rounded-[25px] w-full px-4 py-3 ps-5 text-sm ${darkMode ? "text-light_text border-[#ffffff2c] focus:border-[#ffffff2c]" : "text-light_theme_light_mode border-[#1e1d1d7f] focus:border-[#1e1d1d7f] placeholder:text-light_theme_light_mode"} border bg-transparent focus:outline-none focus:shadow-none `}
                placeholder="Subscribe Email"
                required
              />
              <button
                type="submit"
                class={`absolute top-[50%] -translate-y-[50%] right-[6px] ${darkMode ? "bg-primary hover:bg-hover_color text-light_text" : "bg-light_theme_light_mode hover:bg-light_theme_hover_mode text-light_theme_primary"} focus:outline-none font-medium rounded-[25px] text-sm px-4 py-2`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div
          class={`px-4 py-6 ${
            darkMode ? "bg-[#04293A]" : "bg-light_theme_secondary"
          } md:flex md:items-center md:justify-between`}
        >
          <span
            class={`text-sm ${
              darkMode ? "text-light_text" : "text-light_theme_light_mode"
            } sm:text-center`}
          >
            © copyright 2025 <a href="https://skynetsilicon.com/" className={`${darkMode ? "text-yellow_color" : "text-green-300"} `} target="_blank">Skynet Silicon</a>. All
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
