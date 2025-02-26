import React from "react";
import logoSrc from "/Images/logo.png";

const Logo = () => {
  return (
    <>
      <img
        src={logoSrc}
        className="max-w-[150px]"
        style={{
          filter:
            "invert(14%) sepia(91%) saturate(3178%) hue-rotate(336deg) brightness(114%) contrast(122%)",
        }}
        alt=""
      />
    </>
  );
};

export default Logo;
