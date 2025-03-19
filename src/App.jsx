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
import {
  AddBook,
  AddCategory,
  ViewBooks,
  ViewCategory,
  AddAuthor,
  ViewAuthor,
  EditAuthor,
  AccountRequests,
  ReviewRequest,
  AddStudent,
  ViewStudents,
  BorrowedRequests,
  EditBook,
  EditCategory,
  EditStudent,
} from "./admin/components/index";
import AdminForm from "../app/(auth)/AdminForm";
import AdmiNprotectedRoute from "./AdmiNprotectedRoute";

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
        </Route>
        {/* Auth Routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resend-email" element={<ResendEmail />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/admin" element={<AdminForm />} />
        {/* Admin Routes */}
        <Route element={<AdmiNprotectedRoute />}>
          <Route path="/dashboard" element={<AnalyticsPage />} />
          <Route path="/dashboard/add-book" element={<AddBook />} />
          <Route path="/dashboard/view-books" element={<ViewBooks />} />
          <Route path="/dashboard/edit-book/:id" element={<EditBook />} />
          <Route path="/dashboard/add-category" element={<AddCategory />} />
          <Route path="/dashboard/view-category" element={<ViewCategory />} />
          <Route
            path="/dashboard/edit-category/:id"
            element={<EditCategory />}
          />
          <Route path="/dashboard/add-author" element={<AddAuthor />} />
          <Route path="/dashboard/view-authors" element={<ViewAuthor />} />
          <Route path="/dashboard/edit-author/:id" element={<EditAuthor />} />
          <Route path="/dashboard/add-student" element={<AddStudent />} />
          <Route path="/dashboard/view-students" element={<ViewStudents />} />
          <Route path="/dashboard/edit-student/:id" element={<EditStudent />} />
          <Route
            path="/dashboard/account-requests"
            element={<AccountRequests />}
          />
          <Route
            path="/dashboard/borrowed-requests"
            element={<BorrowedRequests />}
          />
          <Route
            path="/dashboard/review-requests"
            element={<ReviewRequest />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
