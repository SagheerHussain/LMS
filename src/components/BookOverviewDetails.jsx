import React, { useContext, useEffect, useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { DarkThemeContext } from "@/context/ThemeContext";
import { Rating, TextField } from "@mui/material";
import { Button } from ".";

// Define Light and Dark Themes
const lightTheme = {
  background: "#ffffff",
  text: "#fff",
  tabBg: "#fdfdfd",
  tabText: "#000",
  selectedTab: "#3d705f",
};

const darkTheme = {
  background: "#1e1e1e",
  text: "#ffffff",
  tabBg: "#0A192F",
  tabText: "#fff",
  selectedTab: "#04293A",
};

// Styled Components for Tabs
const StyledTab = styled(Tab)`
  background-color: ${({ theme }) => theme.tabBg} !important;
  color: ${({ theme }) => theme.tabText} !important;
  margin-right: 0.5rem !important;
  text-transform: capitalize !important;
  transition: all 0.4s ease-in-out;
  border-radius: 25px !important;

  &[aria-selected="true"] {
    color: #fff !important;
    background-color: ${({ theme }) => theme.selectedTab} !important;
  }

  &[aria-selected="false"]:hover {
    background-color: ${({ theme }) => theme.selectedTab} !important;
    color: #fff !important;
  }
`;

const StyledTabPanel = styled(TabPanel)`
  background-color: ${({ theme }) => theme.tabBg} !important;
  color: ${({ theme }) => theme.tabText} !important;
  border-radius: 25px !important;
  margin-top: 0.5rem;
`;

const BookOverviewDetails = ({ book }) => {
  const { darkMode } = useContext(DarkThemeContext);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log(book);
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className="w-full mt-6">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              variant="scrollable"
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <StyledTab label="Description" value="1" />
              <StyledTab label="Book Details" value="2" />
              <StyledTab label="Student Reviews" value="3" />
              <StyledTab label="Write Review" value="4" />
            </TabList>
          </Box>
          <StyledTabPanel value="1">
            <h3
              className={`${
                darkMode ? "text-light_text" : "text-dark_text"
              } capitalize pb-4 text-lg font-semibold`}
            >
              Description:
            </h3>
            <p className={`${darkMode ? "text-light_text" : "text-dark_text"}`}>
              {book.description}
            </p>
            <h3
              className={`${
                darkMode ? "text-light_text" : "text-dark_text"
              } capitalize pb-4 pt-8 text-lg font-semibold`}
            >
              Summary:
            </h3>
            <p className={`${darkMode ? "text-light_text" : "text-dark_text"}`}>
              {book.summary}
            </p>
          </StyledTabPanel>
          <StyledTabPanel value="2">
            <div className="book_details">
              <div className="flex justify-between items-center mb-6">
                <div className="published_title">
                  <h3
                    className={`${
                      darkMode ? "text-light_text" : "text-dark_text"
                    } font-medium capitalize text-sm`}
                  >
                    Published Year :
                  </h3>
                </div>
                <div className="published_year">
                  <h3
                    className={`${
                      darkMode ? "text-light_text" : "text-dark_text"
                    } capitalize text-sm`}
                  >
                    {book.publishedYear}
                  </h3>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="published_title">
                  <h3
                    className={`${
                      darkMode ? "text-light_text" : "text-dark_text"
                    } font-medium capitalize text-sm`}
                  >
                    Number of pages :
                  </h3>
                </div>
                <div className="published_year">
                  <h3
                    className={`${
                      darkMode ? "text-light_text" : "text-dark_text"
                    } capitalize text-sm`}
                  >
                    100
                  </h3>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="published_title">
                  <h3
                    className={`${
                      darkMode ? "text-light_text" : "text-dark_text"
                    } font-medium capitalize text-sm`}
                  >
                    Binding :
                  </h3>
                </div>
                <div className="published_year">
                  <h3
                    className={`${
                      darkMode ? "text-light_text" : "text-dark_text"
                    } capitalize text-sm`}
                  >
                    Black
                  </h3>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="published_title">
                  <h3
                    className={`${
                      darkMode ? "text-light_text" : "text-dark_text"
                    } font-medium capitalize text-sm`}
                  >
                    ISBN :
                  </h3>
                </div>
                <div className="published_year">
                  <h3
                    className={`${
                      darkMode ? "text-light_text" : "text-dark_text"
                    } capitalize text-sm`}
                  >
                    9780007278770
                  </h3>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="published_title">
                  <h3
                    className={`${
                      darkMode ? "text-light_text" : "text-dark_text"
                    } font-medium capitalize text-sm`}
                  >
                    category :
                  </h3>
                </div>
                <div className="published_year">
                  <h3
                    className={`${
                      darkMode ? "text-light_text" : "text-dark_text"
                    } capitalize text-sm`}
                  >
                    {book.category}
                  </h3>
                </div>
              </div>
            </div>
          </StyledTabPanel>
          <StyledTabPanel value="3">
            <div className="student_reviews pb-6">
              <div className="flex items-center">
                <h6
                  className={`${
                    darkMode ? "text-light_text" : "text-dark_text"
                  } text-sm`}
                >
                  By Glen
                </h6>
                <Rating
                  name="read-only"
                  className="mx-2"
                  sx={{ fontSize: ".8rem !important" }}
                  value={4}
                  readOnly
                />
              </div>
              <h6
                className={`${
                  darkMode ? "text-light_text" : "text-dark_text"
                } text-sm py-2`}
              >
                March 02, 2025
              </h6>
              <p
                className={`${
                  darkMode ? "text-light_text" : "text-dark_text"
                } text-sm`}
              >
                Islam - Understanding the religion behind the headlines by
                Ruqaiyyah Waris Maqsood In this format 192 pages across 10
                chapters of easily accessible information, supported by
                interesting pictures and separate notes in the margins
                supporting useful snippets and external links.
              </p>
            </div>
            <div className="student_reviews pb-6">
              <div className="flex items-center">
                <h6
                  className={`${
                    darkMode ? "text-light_text" : "text-dark_text"
                  } text-sm`}
                >
                  By Abdul Rehman
                </h6>
                <Rating
                  name="read-only"
                  className="mx-2"
                  sx={{ fontSize: ".8rem !important" }}
                  value={4}
                  readOnly
                />
              </div>
              <h6
                className={`${
                  darkMode ? "text-light_text" : "text-dark_text"
                } text-sm py-2`}
              >
                March 02, 2025
              </h6>
              <p
                className={`${
                  darkMode ? "text-light_text" : "text-dark_text"
                } text-sm`}
              >
                Islam - Understanding the religion behind the headlines by
                Ruqaiyyah Waris Maqsood In this format 192 pages across 10
                chapters of easily accessible information, supported by
                interesting pictures and separate notes in the margins
                supporting useful snippets and external links.
              </p>
            </div>
          </StyledTabPanel>
          <StyledTabPanel value="4">
            <div className="review_write">
              <Rating
                name="simple-controlled"
                value={0}
                sx={{ fontSize: "1.2rem !important" }}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <h3
                className={`${
                  darkMode ? "text-light_text" : "text-dark_text"
                } text-sm mb-4`}
              >
                Write a Review
              </h3>
              <input
                type="text"
                className={`w-full  bg-transparent ${
                  darkMode
                    ? "text-light_text border-[#ffffff46] focus:border-[#ffffff46] focus:outline-none placeholder:text-light_text"
                    : "border-[#00000046] focus:border-[#00000046] focus:outline-none placeholder:text-dark_text text-dark_text"
                } border px-4 rounded-[20px] py-2`}
                placeholder="Write Review"
              />
              <Button label="Submit Review" />
            </div>
          </StyledTabPanel>
        </TabContext>
      </div>
    </ThemeProvider>
  );
};

export default BookOverviewDetails;
