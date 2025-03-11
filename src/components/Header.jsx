import React, { useContext, useEffect, useState } from "react";
import { IoSearch, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { FaRegUser, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { MdCall, MdEmail } from "react-icons/md";
import { Logo, NavMenus, SearchBar, SearchResults } from "../components/index";
import { DarkThemeContext } from "@/context/ThemeContext";
import { Link } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdOutlineExpandMore } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { authors } from "@/constants/data";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkThemeContext);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [search, setSearch] = useState("");

  const student = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#041C32" : "#d6f1dd";
  }, [darkMode]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY > 10) {
  //       setIsFixed(true); // Fix navbar when scrolled past 100px
  //       setIsScrollingUp(currentScrollY < lastScrollY); // Check scroll direction
  //     } else {
  //       setIsFixed(false); // Reset when at the top
  //     }

  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);

  // Drawer List
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: `${darkMode ? "#04293A" : "#3d705f"}`,
        height: "100vh",
      }}
      role="presentation"
    >
      <div className="text-end flex justify-end m-2">
        <IoClose color={`#fff`} size={24} onClick={toggleDrawer(false)} />
      </div>
      <List>
        {["Home", "Authors"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {index === 1 ? (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<MdOutlineExpandMore />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">{text}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {authors.map((author) => (
                      <Link
                        to={`/filtered-books/${author.name}`}
                        className="pb-4 hover:text-light_theme_light_mode transition-all duration-300 linear block relative group"
                      >
                        {author.name}
                      </Link>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ) : (
                <ListItemText primary={text} className={`text-light_text`} />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider className={`bg-light_text`} />
      <List>
        <div className={`navbar_menus items-center gap-3`}>
          <Link
            to={`/profile`}
            className={`navbar_profile flex items-center cursor-pointer rounded-[25px] ${
              darkMode
                ? "hover:bg-hover_color text-light_text"
                : "text-light_text hover:text-light_theme_light_mode"
            } py-3 px-4`}
          >
            <FaUser size={20} />
            <label htmlFor="" className="ms-2 cursor-pointer text-sm">
              Hello, Shayan
            </label>
          </Link>

          <div
            className={`navbar_dark_mode flex items-center cursor-pointer rounded-[25px] ${
              darkMode
                ? "hover:bg-hover_color text-light_text"
                : "text-light_text hover:text-light_theme_light_mode"
            } py-3 px-4`}
          >
            {darkMode ? (
              <>
                <h4 className={`text-light_text me-3`}>Light Mode</h4>
                <IoSunnyOutline size={24} onClick={() => setDarkMode(false)} />
              </>
            ) : (
              <>
                <h4 className={`text-light_text me-3`}>Dark Mode</h4>
                <IoMoonOutline size={24} onClick={() => setDarkMode(true)} />
              </>
            )}
          </div>
        </div>
      </List>
    </Box>
  );

  return (
    <>
      <header
        id="header"
        className={`${
          darkMode ? "bg-primary" : "var(--primary-color)"
        } relative z-[999]`}
      >
        <div id="top_navigation" className={`pt-3 pb-4 sm:block hidden`}>
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
                  <span className="font-medium">info@skynetsilicon.com</span>
                </Link>
              </div>
              <div className="client_social_icons flex items-center">
                <a href="#">
                  <FaFacebookF
                    size={24}
                    className={`rounded-[50%] ${
                      darkMode
                        ? "bg-secondary hover:bg-hover_color text-light_text"
                        : "text-dark_text bg-light_theme_light_mode border border-[#ddd] hover:bg-light_theme_hover_mode"
                    } p-1 `}
                  />
                </a>
                <a href="#">
                  <FaLinkedin
                    size={24}
                    className={`rounded-[50%] ${
                      darkMode
                        ? "bg-secondary hover:bg-hover_color text-light_text"
                        : "text-dark_text bg-light_theme_light_mode border border-[#ddd] hover:bg-light_theme_hover_mode"
                    } p-1 mx-2`}
                  />
                </a>
                <a href="#">
                  <FaTwitter
                    size={24}
                    className={`rounded-[50%] ${
                      darkMode
                        ? "bg-secondary hover:bg-hover_color text-light_text"
                        : "text-dark_text bg-light_theme_light_mode border border-[#ddd] hover:bg-light_theme_hover_mode"
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
          className={`py-3 ${
            darkMode ? "bg-secondary" : "bg-light_theme_primary"
          } ${
            isFixed
              ? `w-full transition-all duration-300 shadow-md linear ${
                  darkMode ? "bg-secondary" : "bg-light_theme_primary shadow"
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
            <div className="navbar_logo">
              <Logo />
            </div>
            {/* Center - Search Box */}
            <div className="navbar_search_field relative lg:w-[40%] lg:block hidden xl:w-1/2 z-[9999]">
              <SearchBar search={search} setSearch={setSearch} />
            </div>

            {/* Right Side - Profile & Logout Icons */}
            <div
              className={`navbar_menus items-center gap-3 sm:flex hidden desktop_only`}
            >
              <Link
                to={`/profile`}
                className={`navbar_profile flex items-center cursor-pointer rounded-[25px] ${
                  darkMode
                    ? "hover:bg-hover_color text-light_text"
                    : "hover:bg-light_theme_hover_mode text-light_text hover:text-primary"
                } py-3 px-4`}
              >
                <FaUser size={20} />
                <label htmlFor="" className="ms-2 cursor-pointer text-sm">
                  {student.name}
                </label>
              </Link>

              <div
                className={`navbar_dark_mode flex items-center cursor-pointer rounded-[25px] ${
                  darkMode
                    ? "hover:bg-hover_color text-light_text"
                    : "hover:bg-light_theme_hover_mode text-light_text hover:text-primary"
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

            {/* Hamburger Icon for Mobile */}
            <div className="hamburger_menu sm:hidden block">
              <Button onClick={toggleDrawer(true)}>
                <RiMenu5Line color="#fff" size={24} />
              </Button>
              <Drawer open={open}>{DrawerList}</Drawer>
            </div>
          </div>
        </nav>

        <NavMenus search={search} />
      </header>
    </>
  );
};

export default Header;
