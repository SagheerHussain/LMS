import { DarkThemeContext } from "@/context/ThemeContext";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { getCategories } from "../../services/categoryService";
import { getAuthors } from "../../services/authorService";

const NavMenus = ({ search }) => {
  // State Variables
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  // Fetching Data
  const fetchingData = useCallback(async () => {
    try {
      const categories = await getCategories();
      setCategories(categories);
      const authors = await getAuthors();
      setAuthors(authors);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }, []);

  useEffect(() => {
    fetchingData();
  }, [fetchingData]);

  // Menus
  const menus = [
    {
      id: 2,
      label: "All Categories",
      slug: "",
      subMenus: categories,
      isActive: true,
    },
    {
      id: 1,
      label: "Home",
      slug: "/",
      isActive: true,
    },
    {
      id: 3,
      label: "Authors",
      slug: "/",
      isActive: true,
      subMenus: authors,
    },
    {
      id: 4,
      label: "Request a book",
      slug: "/",
      isActive: false,
    },
  ];

  // Context

  const { darkMode } = useContext(DarkThemeContext);

  return (
    <>
      <div id="nav_menus" className={`py-6`}>
        <div
          className={`container mx-auto px-4 p-4 rounded-[10px] flex items-center`}
        >
          {menus?.map(
            ({ id, label, slug, isActive, subMenus }) =>
              isActive && (
                <Link
                  to={`${slug}`}
                  key={id}
                  className={`${
                    id === 2
                      ? `${
                          darkMode
                            ? "bg-secondary text-light_text"
                            : "bg-light_theme_primary text-light_text hover:text-light_text"
                        }   flex items-center px-8 py-2 rounded-[25px]`
                      : `${
                          darkMode
                            ? "text-zinc-300 hover:text-light_theme_primary"
                            : "text-primary hover:hover:text-light_theme_primary"
                        } sm:inline-block hidden`
                  } ${
                    id === 3 ? `${search ? "-z-[1]" : "z-[0]"}` : ""
                  } nav_menu_link text-base px-6 py-2 font-medium capitalize group relative  transition-all duration-200`}
                >
                  {id === 2 && (
                    <RiMenu2Line
                      size={20}
                      className={`${
                        darkMode ? "text-light_text" : "text-light_text"
                      }  font-bold me-4`}
                    />
                  )}
                  {label}
                  {subMenus && (
                    <div
                      className={`opacity-0 w-full invisible group-hover:opacity-100 group-hover:visible group-hover:top-[120%] transition-all duration-300 linear absolute top-[150%] left-0 capitalize  z-[90] flex flex-col border-2 ${
                        id === 2
                          ? `w-full border-t-light_theme_primary border-r-0 border-l-0 border-b-0`
                          : `min-w-[250px] border-t-light_theme_primary border-r-0 border-l-0 border-b-0`
                      } ${
                        darkMode
                          ? "bg-primary text-zinc-300"
                          : "bg-[#fff] text-zinc-800"
                      } pt-4 px-8 text-sm`}
                    >
                      <div
                        className={`absolute ${
                          id === 2 ? "-top-[10px]" : "-top-[10px]"
                        } bg-light_theme_primary  left-[20%] w-[10px] h-[10px]`}
                        style={{
                          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                        }}
                      ></div>

                      {subMenus?.map((subMenu) => (
                        <Link
                          to={`/filtered-books/${subMenu.slug}`}
                          className="pb-4 hover:text-light_theme_primary transition-all duration-300 linear inline-block relative group"
                        >
                          {subMenu.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </Link>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default NavMenus;
