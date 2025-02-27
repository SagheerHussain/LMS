import React from "react";

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
        className={`banner relative rounded-[10px] ${className}`}
        style={{
          background: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={`banner_content ${bannerContent}`}>
          {isBannerSideTitle && (
            <h6 className="text-sm font-bold text-white">More Bang for Your Book</h6>
          )}
          {title?.map((word) => (
            <h1 className="text-4xl font-bold text-white font-serif">{word} </h1>
          ))}
          {isBtn && <button className={`${btnClasses} rounded-[5px]`}>{btnTitle}</button>}
        </div>
      </div>
    </>
  );
};

export default Banner;
