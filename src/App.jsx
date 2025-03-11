import React from "react";
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

function App() {
  return (
    <>
      <Routes>
        <Route element={<Authentication />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-overview/:id" element={<BookOverviewPage />} />
          <Route path="/filtered-books/:attribute" element={<FilterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/resend-email" element={<ResendEmail />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
