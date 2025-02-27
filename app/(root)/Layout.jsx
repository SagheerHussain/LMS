import { Header } from "@/components/index";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main id="main">
        {children}
      </main>
    </>
  );
};

export default Layout;
