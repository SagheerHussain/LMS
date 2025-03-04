import React from "react";
import authImage from "/Images/auth-illustration.png";
import "./auth.css";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div
        className="auth_layout grid grid-cols-2 justify-between items-center"
        style={{ backgroundColor: "#070a13", maxHeight: "100vh" }}
      >
        {/* Left: Auth Form */}
        <div className="auth_children p-8" style={{ margin: "0 auto" }}>
          {children}
        </div>

        {/* Right: Image Section */}
        <div className="auth_image">
          <img
            src={authImage}
            alt="Auth Illustration"
            className="w-full"
            style={{ maxHeight: "100vh" }}
          />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
