import Footer from "@/components/Footer";
import { Header } from "@/components/index";
import React from "react";

const Layout = ({ children, className ="" }) => {
  return (
    <>
      <Header />
      <main id="main" className={`${className}`}>
        {children}
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
