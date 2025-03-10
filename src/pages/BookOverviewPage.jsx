import { BookOverview } from "..//components/index";
import { sampleBooks } from "../constants/data";
import Layout from "../../app/(root)/Layout";
import React, { useContext } from "react";
import { DarkThemeContext } from "../context/ThemeContext";
import { useParams } from "react-router-dom";

const BookOverviewPage = () => {
  const { darkMode } = useContext(DarkThemeContext);

  const { id } = useParams();

  return (
    <>
      <Layout>
        <BookOverview id={id} darkMode={darkMode} />
      </Layout>
    </>
  );
};

export default BookOverviewPage;
