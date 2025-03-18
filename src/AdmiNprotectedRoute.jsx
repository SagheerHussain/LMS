import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AdmiNprotectedRoute = () => {

    const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {
        user && user.role === "Admin" ? <Outlet /> : <Navigate to="/" />
      }
    </>
  )
}

export default AdmiNprotectedRoute
