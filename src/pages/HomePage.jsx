import { HeroSection, Banner, BookList } from "@/components/index";
import Layout from "/app/(root)/Layout";
import React, { useEffect, useState } from "react";
import { sampleBooks } from "@/constants/data";
import { useMediaQuery } from "@mui/material";

const HomePage = () => {
  // State Variables
  const [newReleasesBooks, setNewReleasesBooks] = useState([]);
  const [booksOfTheMonth, setBooksOfTheMonth] = useState([]);

  const isMatch = useMediaQuery('(min-width:820px)');

  // Filter Books
  useEffect(() => {
    // Filter By New Releases
    const filteredBooks = sampleBooks.filter(
      (book) => book.publishedYear === 2025
    );
    setNewReleasesBooks(filteredBooks);
  }, []);

  // Filter Popular Books
  useEffect(() => {
    const filteredBooks = sampleBooks.filter((book) => {
      const soldCopies = book.total_copies - book.available_copies;
      const soldPercentage = (soldCopies / book.total_copies) * 100;
      return soldPercentage >= 90; // Filter books that have 90% or more sales
    });

    setBooksOfTheMonth(filteredBooks);
  }, []);

  

  return (
    <>
      <Layout className="pb-20">
        <HeroSection />
        <BookList
          isMoreInfo={true}
          breakPoints={{
            280: { slidesPerView: 1, spaceBetween: 20 },
            510: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 10 },
            1280: { slidesPerView: 5, spaceBetween: 10 },
            1538: { slidesPerView: 5, spaceBetween: 10 },
          }}
          content_classes=""
          className={`flex flex-col`}
        />
      </Layout>
    </>
  );
};

export default HomePage;
