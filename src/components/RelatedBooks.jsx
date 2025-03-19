import React, { useCallback, useContext, useEffect, useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { DarkThemeContext } from "@/context/ThemeContext";
import { Rating, TextField } from "@mui/material";
import { Button } from ".";
import { sampleBooks } from "@/constants/data";
import BookCard from "./BookCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  getBooksByAuthors,
  getBooksByCategories,
} from "../../services/bookService";

// Define Light and Dark Themes
const lightTheme = {
  background: "#ffffff",
  text: "#fff",
  tabBg: "#c2f0ce",
  tabText: "#000",
  selectedTab: "#3d705f",
  hoverTabBg: "#529881",
};

const darkTheme = {
  background: "#1e1e1e",
  text: "#ffffff",
  tabBg: "#0A192F",
  tabText: "#fff",
  selectedTab: "#04293A",
  hoverTabBg: "#074a69",
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

const RelatedBooks = ({ book }) => {
  // Context
  const { darkMode } = useContext(DarkThemeContext);

  // State Variables
  const [value, setValue] = useState("1");
  const [recommended, setRecommended] = useState([]);
  const [authorRelated, setAuthorRelated] = useState([]);

  // Handle Tab Change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Fetching Books By Categories
  const fetchingData = useCallback(async () => {
    try {
      const recommendations = await getBooksByCategories(book.category.slug);
      const authorRelatedBooks = await getBooksByAuthors(book.author.slug);
      setRecommended(recommendations.message);
      setAuthorRelated(authorRelatedBooks.message);
    } catch (error) {
      console.log(error);
    }
  }, [book.category.slug, book.author.name]);

  useEffect(() => {
    fetchingData();
  }, [fetchingData]);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <div className="w-full mt-6">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                variant="scrollable"
                className="mb-4"
                aria-label="lab API tabs example"
              >
                <StyledTab label="More From This Author" value="1" />
                <StyledTab label="Recommended" value="2" />
              </TabList>
            </Box>
            <StyledTabPanel value="1">
              <div className="swiper-slides overflow-hidden">
                <Swiper
                  spaceBetween={20} // Default spacing
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  loop={true}
                  centeredSlides={false}
                  navigation={{ clickable: true }}
                  modules={[Navigation, Autoplay]}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 2, spaceBetween: 50 },
                    1280: { slidesPerView: 2, spaceBetween: 50 },
                    1538: { slidesPerView: 5, spaceBetween: 10 },
                  }}
                >
                  {authorRelated?.map((book) => (
                    <SwiperSlide key={book.id || book.title}>
                      <BookCard book={book} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </StyledTabPanel>
            <StyledTabPanel value="2">
              <div className="swiper-slides overflow-hidden">
                <Swiper
                  spaceBetween={20} // Default spacing
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  loop={true}
                  centeredSlides={false}
                  navigation={{ clickable: true }}
                  modules={[Navigation, Autoplay]}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 2, spaceBetween: 50 },
                    1280: { slidesPerView: 2, spaceBetween: 50 },
                    1538: { slidesPerView: 5, spaceBetween: 10 },
                  }}
                >
                  {recommended?.map((book) => (
                    <SwiperSlide key={book.id || book.title}>
                      <BookCard book={book} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </StyledTabPanel>
          </TabContext>
        </div>
      </ThemeProvider>
    </>
  );
};

export default RelatedBooks;
