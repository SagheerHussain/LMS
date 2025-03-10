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
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 50 },
            1280: { slidesPerView: 2, spaceBetween: 50 },
            1538: { slidesPerView: 3, spaceBetween: 10 },
          }}
          content_classes=""
          className={`flex ${isMatch ? "flex-row" : "flex-col"}`}
        />

        <div className="container mx-auto">
          <Banner
            className="h-[300px] mb-6"
            title={["20% Off Select Books"]}
            btnClasses={
              "bg-[#111] hover:bg-[#111] text-white px-6 py-2 font-semibold mt-4"
            }
            btnTitle="Shop Now"
            isBannerSideTitle={true}
            bannerContent={
              "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center scale-[1.2]"
            }
            image={"/Images/Banners/banner (4).jpg"}
          />
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
