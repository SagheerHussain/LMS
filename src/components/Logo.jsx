import React from "react";
import logoSrc from "/Images/logo.webp";
import { Link } from "react-router-dom";

const Logo = ({ className = "" }) => {
  return (
    <>
      <Link to={`/`}>
        <img src={logoSrc} className={`${className} max-w-[200px]`} alt="" />
      </Link>
    </>
  );
};

export default Logo;
