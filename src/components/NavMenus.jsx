import { DarkThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const NavMenus = () => {

  // Menus
  const menus = [
    {
      id: 1,
      label: "Home",
      slug: "/",
      isActive: true,
    },
    {
      id: 2,
      label: "Categories",
      slug: "/",
      isActive: true,
    },
    {
      id: 3,
      label: "Authors",
      slug: "/",
      isActive: true,
    },
    {
      id: 4,
      label: "Request a book",
      slug: "/",
      isActive: true,
    },
  ];

  // Context

  const { darkMode } = useContext(DarkThemeContext);

  return (
    <>
      <div id="nav_menus" className={``}>
        <div className={`container mx-auto px-4 ${darkMode ? "bg-[#222]" : "bg-[#396eb0]"} p-4 rounded-[10px]`}>
          {menus?.map(({ id, label, slug, isActive }) => (
            isActive && <Link to={`${slug}`} key={id} className="text-white text-lg px-4 font-medium">{label}</Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavMenus;
