import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect style

import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { sampleBooks } from "@/constants/data";
import { BookOverview } from "./index";

const HeroSection = () => {

  const [newReleaseBooks, setNewReleaseBooks] = useState([]);

  useEffect(() => {
    // 2025 wale books ko filter karna
    const filteredBooks = sampleBooks.filter(book => book.publishedYear === 2025);
  
    // State update karna
    setNewReleaseBooks(filteredBooks);
  }, []);

  return (
    <section id="hero_section" className="my-10 relative">
      <div className="container mx-auto max-w-[1800px] px-10 py-6 bg-[#ff29544e] rounded-[15px]">
        <div className="book_details ">
          <Swiper
            spaceBetween={30}
            // autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            modules={[Autoplay, Pagination, EffectFade]}
            className="mySwiper w-full h-full"
          >
            {newReleaseBooks?.map((book) => (
              <SwiperSlide className="overflow-hidden">
                <BookOverview book={book} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
