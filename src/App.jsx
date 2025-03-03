import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookOverviewPage from "./pages/BookOverviewPage";
import ProfilePage from "./pages/ProfilePage";
import AuthLayout from "../app/(auth)/authLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-overview/:id" element={<BookOverviewPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signin" element={<AuthLayout />} />
      </Routes>
    </>
  );
}

export default App;
