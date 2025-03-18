import React from "react";
import authImage from "/Images/auth-illustration.png";
import "./auth.css";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div
        className="auth_layout flex justify-between items-center"
        style={{ backgroundColor: "#070a13", minHeight: "100vh" }}
      >
        {/* Left: Auth Form */}
        <div className="auth_children p-8">
          {children}
        </div>

        {/* Right: Image Section */}
        <div className="auth_image fixed top-0 right-0 lg:w-[35vw] xl:w-1/2 h-screen">
          <img
            src={authImage}
            alt="Auth Illustration"
            className="w-full"
            style={{ height: "100vh" }}
          />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
