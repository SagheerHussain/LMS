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
import { sampleBooks } from "@/constants/data";
import BookCard from "./BookCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const RelatedBooks = ({ book }) => {
  const { darkMode } = useContext(DarkThemeContext);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log(book);
  }, []);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <div className="w-full mt-6">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                variant="scrollable"
                aria-label="lab API tabs example"
              >
                <StyledTab label="More From This Author" value="1" />
                <StyledTab label="Recommended" value="2" />
              </TabList>
            </Box>
            <StyledTabPanel value="1">
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
                  1538: { slidesPerView: 4, spaceBetween: 10 },
                }}
              >
                {sampleBooks.slice(5, 9)?.map((book) => (
                  <SwiperSlide key={book.id || book.title}>
                    <BookCard book={book} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </StyledTabPanel>
            <StyledTabPanel value="2">
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
                  1538: { slidesPerView: 4, spaceBetween: 10 },
                }}
              >
                {sampleBooks.slice(0, 4)?.map((book) => (
                  <SwiperSlide key={book.id || book.title}>
                    <BookCard book={book} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </StyledTabPanel>
          </TabContext>
        </div>
      </ThemeProvider>
    </>
  );
};

export default RelatedBooks;
