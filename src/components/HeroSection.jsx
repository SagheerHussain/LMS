import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderOne from "/Images/Slider/slider (1).webp";
import sliderTwo from "/Images/Slider/slider (2).webp";
import sliderThree from "/Images/Slider/slider (3).webp";
import sliderFour from "/Images/Slider/slider (4).webp";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect style

const HeroSection = () => {
  return (
    <section id="hero_section" className="mt-6">
      <div className="container mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {[sliderOne, sliderTwo, sliderThree, sliderFour].map(
            (slide, index) => (
              <SwiperSlide>
                <img src={slide} className="w-full rounded-[10px]" alt="" />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
