import { useQuery } from "@tanstack/react-query";
import Layout from "../../app/(root)/Layout";
import Profile from "../components/Profile";
import React, { useEffect } from "react";
import { getStudentDetails } from "../../services/studentService";

const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const fetchingStudentDetails = async () => {
  try {
    const student = await getStudentDetails(user._id, token);
    return student;
  } catch (error) {
    console.log(error);
  }
};

const ProfilePage = () => {
  const {
    isLoading,
    error,
    data: student,
  } = useQuery({
    queryKey: ["studentDetails", user?._id], // Unique key based on user
    queryFn: fetchingStudentDetails,
    enabled: !!user, // Prevent execution if user is null
    staleTime: 10000,
  });

  useEffect(() => {
    if (student) {
      console.log("student", student)
      localStorage.setItem("user", JSON.stringify(student));
    }
  }, [isLoading])

  return (
    <>
      <Layout>
        <Profile student={student} loading={isLoading} error={error} />
      </Layout>
    </>
  );
};

export default ProfilePage;
