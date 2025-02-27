import { HeroSection, Banner, BookList } from "@/components/index";
import Layout from "/app/(root)/Layout";
import React, { useEffect, useState } from "react";
import { sampleBooks } from "@/constants/data";

const HomePage = () => {
  // State Variables
  const [newReleasesBooks, setNewReleasesBooks] = useState([]);
  const [booksOfTheMonth, setBooksOfTheMonth] = useState([]);

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
  }, [])

  return (
    <>
      <Layout>
        <HeroSection />
        <div className="container mx-auto">
          <div className=" flex items-center my-10">
            <Banner
              className="w-[33%] h-[400px]"
              title={["New", "Release."]}
              btnClasses={
                "bg-[#8f2224] hover:bg-[#8f2224] text-white px-6 py-2 font-semibold mt-4"
              }
              bannerContent={"absolute bottom-[5%] left-[8%]"}
              image={"/Images/Banners/banner (1).webp"}
            />
            <Banner
              className=" w-[33%] mx-4 h-[400px]"
              title={["Pre Order", "Now."]}
              btnClasses={
                "bg-[#2c8a6b] hover:bg-[#2c8a6b] text-white px-6 py-2 font-semibold mt-4"
              }
              bannerContent={"absolute bottom-[5%] left-[8%]"}
              image={"/Images/Banners/banner (3).webp"}
            />
            <Banner
              className=" w-[33%] h-[400px]"
              title={["Top", "Rated."]}
              btnClasses={
                "bg-[#3076d2] hover:bg-[#3076d2] text-white px-6 py-2 font-semibold mt-4"
              }
              bannerContent={"absolute bottom-[5%] left-[8%]"}
              image={"/Images/Banners/banner (2).webp"}
            />
          </div>
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
        <BookList title="New Releases" className="flex flex-col" books={newReleasesBooks} />
        <BookList title="Popular Books" isMoreInfo={true} content_classes="ms-6 mt-4" className="flex flex-row" books={booksOfTheMonth.slice(0, 2)} />
      </Layout>
    </>
  );
};

export default HomePage;
