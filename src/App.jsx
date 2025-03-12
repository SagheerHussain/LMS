import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookOverviewPage from "./pages/BookOverviewPage";
import FilterPage from "./pages/FilterPage";
import ProfilePage from "./pages/ProfilePage";
import SignIn from "../app/(auth)/SignIn";
import SignUp from "../app/(auth)/SignUp";
import ResendEmail from "../app/(auth)/ResendEmail";
import ResetPassword from "../app/(auth)/ResetPassword";
import Authentication from "./components/Authentication";
import AnalyticsPage from "./admin/page/AnalyticsPage";
import { AddBook, AddCategory, ViewBooks, ViewCategory, AddAuthor, ViewAuthor } from "./admin/components/index";
import AddStudent from "./admin/components/students/AddStudent";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Authentication />}>
          {/* Student Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/book-overview/:id" element={<BookOverviewPage />} />
          <Route path="/filtered-books/:attribute" element={<FilterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/resend-email" element={<ResendEmail />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
        {/* Auth Routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Admin Routes */}
        <Route path="/dashboard" element={<AnalyticsPage />} />
        <Route path="/dashboard/add-book" element={<AddBook />} />
        <Route path="/dashboard/view-books" element={<ViewBooks />} />
        <Route path="/dashboard/add-category" element={<AddCategory />} />
        <Route path="/dashboard/view-category" element={<ViewCategory />} />
        <Route path="/dashboard/add-author" element={<AddAuthor />} />
        <Route path="/dashboard/view-authors" element={<ViewAuthor />} />
        <Route path="/dashboard/add-student" element={<AddStudent />} />
      </Routes>
    </>
  );
}

export default App;
