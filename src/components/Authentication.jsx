import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Authentication = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  return <>{isAuthenticated && user.role !== "Admin" ? <Outlet /> : <Navigate to={`/signin`} />}</>;
};

export default Authentication;
