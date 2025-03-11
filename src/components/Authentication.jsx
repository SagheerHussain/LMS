import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Authentication = () => {
  const isAuthenticated = localStorage.getItem("token");

  return <>{isAuthenticated ? <Outlet /> : <Navigate to={`/signin`} />}</>;
};

export default Authentication;
