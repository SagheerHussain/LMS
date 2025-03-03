import { Logo } from "@/components/index";
import React from "react";
import LoginForm from "./Login";

const AuthLayout = ({ children }) => {
  return (
    <>
      <main className="auth-container">
        <section className="auth-form h-screen w-screen bg-primary">
          <LoginForm />
        </section>
      </main>
    </>
  );
};

export default AuthLayout;
