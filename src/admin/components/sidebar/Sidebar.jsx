import React, { useState } from "react";
import logoSrc from "/Images/logo.webp";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { PiStudentDuotone } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { GoDot } from "react-icons/go";
import { MdOutlineBookmark } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineVerifiedUser } from "react-icons/md";

const Sidebar = () => {
  const [services, setServices] = useState(false);
  const [students, setStudents] = useState(false);
  const [categories, setCategories] = useState(false);
  const [authors, setAuthors] = useState(false);
  const [pricing, setPricing] = useState(false);

  const handleService = () => {
    setServices(!services);
  };
  const handleStudents = () => {
    setStudents(!students);
  };
  const handleCategories = () => {
    setCategories(!categories);
  };
  const handleAuthors = () => {
    setAuthors(!authors);
  };
  const handlePricing = () => {
    setPricing(!pricing);
  };

  return (
    <>
      <aside id="sidebar" className="sidebar bg-primary h-full py-10">
        <div className="sidbar_logo flex justify-center mb-4">
          <Link to="/dashboard">
            <img src={logoSrc} className={`max-w-[200px]`} alt="" />
          </Link>
        </div>
        <div className="sidebar_menus">
          <List>
            <ListItem
              disablePadding
              className="my-[.75rem] border-1 border-transparent border-b-[#ffffff24]"
            >
              <div className="px-[.75rem]">
                <ListItemButton>
                  <ListItemIcon className="-mr-4">
                    <IoMdHome className="text-light_text text-xl" />
                  </ListItemIcon>
                  <Link className="text-light_text" to={`/dashboard`}>
                    Home
                  </Link>
                </ListItemButton>
              </div>
            </ListItem>

            {/* Books */}
            <div className="text-light_text border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]">
              <div className="px-[.75rem]">
                <ListItemButton onClick={handleService}>
                  <ListItemIcon className="-mr-4">
                    <FaBook className="text-light_text text-xl" />
                  </ListItemIcon>
                  <h6 className="text-light_text">Books</h6>
                  {services ? (
                    <HiOutlineChevronDown className="ms-auto" />
                  ) : (
                    <HiOutlineChevronRight className="ms-auto" />
                  )}
                </ListItemButton>

                <Collapse in={services} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon className="-mr-4">
                        <GoDot className="text-light_text" />
                      </ListItemIcon>
                      <Link
                        className="text-light_text"
                        to={`/dashboard/add-book`}
                      >
                        Add Book
                      </Link>
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon className="-mr-4">
                        <GoDot className="text-light_text" />
                      </ListItemIcon>
                      <Link
                        className="text-light_text"
                        to={`/dashboard/view-books`}
                      >
                        View Books
                      </Link>
                    </ListItemButton>
                  </List>
                </Collapse>
              </div>
            </div>

            {/* Portfolio */}
            <div className="text-light_text border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]">
              <div className="px-[.75rem]">
                <ListItemButton
                  onClick={handleStudents}
                  className='text-light_text relative before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-slate-50'
                >
                  <ListItemIcon className="-mr-4">
                    <PiStudentDuotone className="text-light_text text-xl" />
                  </ListItemIcon>
                  <h6 className="text-light_text">Students</h6>
                  {students ? (
                    <HiOutlineChevronDown className="ms-auto" />
                  ) : (
                    <HiOutlineChevronRight className="ms-auto" />
                  )}
                </ListItemButton>
                <Collapse in={students} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon className="-mr-4">
                        <GoDot className="text-light_text" />
                      </ListItemIcon>
                      <Link
                        className="text-light_text"
                        to={`/dashboard/add-student`}
                      >
                        Add Student
                      </Link>
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon className="-mr-4">
                        <GoDot className="text-light_text" />
                      </ListItemIcon>
                      <Link
                        className="text-light_text"
                        to={`/dashboard/view-students`}
                      >
                        View Students
                      </Link>
                    </ListItemButton>
                  </List>
                </Collapse>
              </div>
            </div>

            {/* Categories */}
            <div className="text-light_text border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]">
              <div className="px-[.75rem]">
                <ListItemButton
                  onClick={handleCategories}
                  className='text-light_text relative before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-slate-50'
                >
                  <ListItemIcon className="-mr-4">
                    <BiCategory className="text-light_text text-xl" />
                  </ListItemIcon>
                  <h6 className="text-light_text">Categories</h6>
                  {categories ? (
                    <HiOutlineChevronDown className="ms-auto" />
                  ) : (
                    <HiOutlineChevronRight className="ms-auto" />
                  )}
                </ListItemButton>
                <Collapse in={categories} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon className="-mr-4">
                        <GoDot className="text-light_text" />
                      </ListItemIcon>
                      <Link
                        className="text-light_text"
                        to={`/dashboard/add-category`}
                      >
                        Add Category
                      </Link>
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon className="-mr-4">
                        <GoDot className="text-light_text" />
                      </ListItemIcon>
                      <Link
                        className="text-light_text"
                        to={`/dashboard/view-category`}
                      >
                        View Categories
                      </Link>
                    </ListItemButton>
                  </List>
                </Collapse>
              </div>
            </div>

            {/* Authors */}
            <div className="text-light_text border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]">
              <div className="px-[.75rem]">
                <ListItemButton
                  onClick={handleAuthors}
                  className='text-light_text relative before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-slate-50'
                >
                  <ListItemIcon className="-mr-4">
                    <MdOutlineBookmark className="text-light_text text-xl" />
                  </ListItemIcon>
                  <h6 className="text-light_text">Authors</h6>
                  {authors ? (
                    <HiOutlineChevronDown className="ms-auto" />
                  ) : (
                    <HiOutlineChevronRight className="ms-auto" />
                  )}
                </ListItemButton>
                <Collapse in={authors} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon className="-mr-4">
                        <GoDot className="text-light_text" />
                      </ListItemIcon>
                      <Link
                        className="text-light_text"
                        to={`/dashboard/add-author`}
                      >
                        Add Author
                      </Link>
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon className="-mr-4">
                        <GoDot className="text-light_text" />
                      </ListItemIcon>
                      <Link
                        className="text-light_text"
                        to={`/dashboard/view-authors`}
                      >
                        View Author
                      </Link>
                    </ListItemButton>
                  </List>
                </Collapse>
              </div>
            </div>

            {/* Account Requests */}
            <ListItem
              disablePadding
              className="my-[.75rem] border-1 border-transparent border-b-[#ffffff24]"
            >
              <div className="px-[.75rem]">
                <ListItemButton>
                  <ListItemIcon className="-mr-4">
                    <MdOutlineVerifiedUser className="text-light_text text-xl" />
                  </ListItemIcon>
                  <Link
                    className="text-light_text"
                    to={`/dashboard/account-requests`}
                  >
                    Account Requests
                  </Link>
                </ListItemButton>
              </div>
            </ListItem>

            {/* Borrowed Requests */}
            <ListItem
              disablePadding
              className="my-[.75rem] border-1 border-transparent border-b-[#ffffff24]"
            >
              <div className="px-[.75rem]">
                <ListItemButton>
                  <ListItemIcon className="-mr-4">
                    <IoBookOutline className="text-light_text text-xl" />
                  </ListItemIcon>
                  <Link
                    className="text-light_text"
                    to={`/dashboard/borrowed-requests`}
                  >
                    Borrowed Requests
                  </Link>
                </ListItemButton>
              </div>
            </ListItem>
          </List>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
