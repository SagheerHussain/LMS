import Layout from "../../app/(root)/Layout";
import Profile from "../components/Profile";
import React, { useEffect, useState } from "react";
import { getStudentDetails } from "../../services/studentService";

const ProfilePage = () => {
  
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));
  
  const [student, setStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchingStudentDetails = async () => {
    setIsLoading(true);
    try {
      const studentData = await getStudentDetails(user._id, token);
      setStudent(studentData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchingStudentDetails();
  }, []); 

  return (
    <Layout>
      <Profile student={student} loading={isLoading} error={error} />
    </Layout>
  );
};

export default ProfilePage;
