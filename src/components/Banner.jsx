import React from "react";
import { Button } from ".";

const Banner = ({
  className = " ",
  isBtn = true,
  btnTitle = "View More",
  isBannerSideTitle = false,
  bannerContent = "",
  title = [],
  image = "",
  btnClasses,
}) => {
  return (
    <>
      <div
        className={`banner relative rounded-[25px] ${className}`}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)) , url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={`banner_content ${bannerContent}`}>
          {isBannerSideTitle && (
            <h6 className="text-sm font-bold text-light_text">
              More Bang for Your Book
            </h6>
          )}
          {title?.map((word) => (
            <h1 className="text-4xl font-bold text-white font-serif">
              {word}{" "}
            </h1>
          ))}
          {isBtn && <Button label={btnTitle}></Button>}
        </div>
      </div>
    </>
  );
};

export default Banner;
