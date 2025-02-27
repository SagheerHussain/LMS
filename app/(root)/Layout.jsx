import Footer from "@/components/Footer";
import { Header } from "@/components/index";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main id="main">
        {children}
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
