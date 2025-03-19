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
import Swal from "sweetalert2";
import { createReview, getApprovedReviews } from "../../services/reviewService";

// Define Light and Dark Themes
const lightTheme = {
  background: "#ffffff",
  text: "#fff",
  tabBg: "#c2f0ce",
  tabText: "#000",
  selectedTab: "#3d705f",
  hoverTabBg: "#529881"
};

const darkTheme = {
  background: "#1e1e1e",
  text: "#ffffff",
  tabBg: "#0A192F",
  tabText: "#fff",
  selectedTab: "#04293A",
  hoverTabBg: "#074a69"
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
    background-color: ${({ theme }) => theme.hoverTabBg} !important;
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
  // Context
  const { darkMode } = useContext(DarkThemeContext);

  // user
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));

  // State Variable
  const [value, setValue] = useState("1");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [studentReviews, setReviewStudents] = useState([]);

  // Handle Tab Change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Get Reviews By Book
  const getReviews = async () => {
    try {
      const { reviews, success } = await getApprovedReviews(book._id, token);
      if (success) {
        setReviewStudents(reviews);
        console.log(reviews);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Add New Review
  const handleReview = async () => {
    try {
      const newReview = { student: user._id, book: book._id, review, rating };
      const data = await createReview(newReview, token);
      if (data.success) {
        Swal.fire({
          title: "Review Added Successfully. Waiting For Admin Approval",
          timer: 1500,
          icon: "success",
        });
        setReview("");
        setRating(0);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className="w-full mt-6">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              variant="scrollable"
              onChange={handleChange}
              className="mb-4"
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
                    {book.totalPages}
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
                    {book.binding}
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
                    {book.ISBN}
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
                    {book.category.name}
                  </h3>
                </div>
              </div>
            </div>
          </StyledTabPanel>
          <StyledTabPanel value="3">
            {studentReviews.length > 0 ? studentReviews.map((review) => (
              <div className="student_reviews pb-6">
                <div className="flex items-center">
                  <h6
                    className={`${
                      darkMode ? "text-light_text" : "text-dark_text"
                    } text-sm`}
                  >
                    By {review.student.name}
                  </h6>
                  <Rating
                    name="read-only"
                    className="mx-2"
                    sx={{ fontSize: ".8rem !important" }}
                    value={review.rating}
                    readOnly
                  />
                </div>
                <h6
                  className={`${
                    darkMode ? "text-light_text" : "text-dark_text"
                  } text-sm py-2`}
                >
                  {review.createdAt?.split("T")[0]}
                </h6>
                <p
                  className={`${
                    darkMode ? "text-light_text" : "text-dark_text"
                  } text-sm`}
                >
                  {review.review}
                </p>
              </div>
            )) : <p className="text-center">No Reviews Yet</p>}
          </StyledTabPanel>
          <StyledTabPanel value="4">
            <div className="review_write">
              <Rating
                name="simple-controlled"
                value={rating}
                sx={{ fontSize: "1.2rem !important" }}
                onChange={(event, newValue) => {
                  setRating(newValue);
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
                onChange={(e) => setReview(e.target.value)}
                value={review}
                className={`w-full  bg-transparent ${
                  darkMode
                    ? "text-light_text border-[#ffffff46] focus:border-[#ffffff46] focus:outline-none placeholder:text-light_text"
                    : "border-[#00000046] focus:border-[#00000046] focus:outline-none placeholder:text-dark_text text-dark_text"
                } border px-4 rounded-[20px] py-2`}
                placeholder="Write Review"
              />
              <button
                onClick={handleReview}
                className={`primary-button transition-all duration-300 uppercase text-[.8rem] font-semibold px-4 py-2 mt-4`}
              >
                Add Review
              </button>
            </div>
          </StyledTabPanel>
        </TabContext>
      </div>
    </ThemeProvider>
  );
};

export default BookOverviewDetails;
