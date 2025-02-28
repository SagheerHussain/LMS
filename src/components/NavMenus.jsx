import { DarkThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavMenus = () => {
  // Menus
  const menus = [
    {
      id: 2,
      label: "All Categories",
      slug: "/",
      subMenus: [
        { id: 1, label: "Fantasy", slug: "/fantasy" },
        { id: 2, label: "Fiction", slug: "/fiction" },
        { id: 3, label: "Mystery", slug: "/mystery" },
        { id: 4, label: "Thriller", slug: "/thriller" },
        { id: 5, label: "Romance", slug: "/romance" },
        { id: 6, label: "Self-help", slug: "/self-help" },
        { id: 7, label: "Business", slug: "/business" },
        { id: 8, label: "Finance", slug: "/finance" },
        { id: 9, label: "Psychology", slug: "/psychology" },
      ],
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
      subMenus: [
        { id: 1, label: "Sehar Rehman", slug: "/sehar-rehman" },
        { id: 2, label: "Naeem Ahmad", slug: "/naeem-ahmad" },
        { id: 3, label: "Hassan Raza", slug: "/hassan-raza" },
        { id: 4, label: "Sara Ali", slug: "/sara-ali" },
        { id: 5, label: "Zain Ul Abideen", slug: "/zain-ul-abideen" },
        { id: 6, label: "Sara Ali", slug: "/sara-ali" },
      ],
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
                          darkMode ? "bg-[#222]" : "bg-[#3076d2]"
                        }  text-zinc-100  flex items-center px-8 py-2 rounded-[25px] hover:text-zinc-100`
                      : "sm:inline-block hidden"
                  } ${
                    darkMode ? "text-zinc-300" : ""
                  } text-sm px-6 py-2 font-medium uppercase group relative  transition-all duration-200`}
                >
                  {id === 2 && (
                    <RiMenu2Line
                      size={20}
                      className="text-white font-bold me-4"
                    />
                  )}
                  {label}
                  {subMenus && (
                    <div
                      className={`opacity-0 rounded-[25px] invisible group-hover:opacity-100 group-hover:visible group-hover:top-[120%] transition-all duration-300 linear absolute top-[150%] left-0 capitalize  z-[90] flex flex-col border-2 ${
                        id === 2
                          ? `w-full ${
                              darkMode
                                ? "border-t-[#3076d2] border-r-0 border-l-0 border-b-0"
                                : "border-[#ddd] bg-[#fff]"
                            }`
                          : `w-[200%] border-t-[#3076d2] border-r-0 border-l-0 border-b-0`
                      } ${
                        darkMode
                          ? "bg-[#222] text-zinc-300"
                          : "bg-[#fff] text-zinc-800"
                      } pt-4 px-8 text-sm`}
                    >
                      <div
                        className={`absolute ${id === 2 ? "-top-[3%]" : "-top-[5%]"} bg-[#3076d2]  left-[20%] w-[10px] h-[10px]`}
                        style={{
                          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                        }}
                      ></div>

                      {subMenus?.map((subMenu) => (
                        <Link
                          to={`${subMenu.slug}`}
                          className="pb-4 hover:text-[#3076d2] transition-all duration-300 linear inline-block"
                          key={subMenu.slug}
                        >
                          {subMenu.label}
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
