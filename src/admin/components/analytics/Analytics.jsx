import React, { useEffect, useState } from "react";
// import { BreadCrumb } from '../../../components/index'
import { AnalyticsCard } from "../index";
import { FaBook } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { RiMapPinUserFill } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { getBooksLength } from "../../../../services/bookService";
import { getStudentsLength, getUnverifiedStudentsLength } from "../../../../services/studentService";
import { getBorrowedRequestsLength } from "../../../../services/borrowedService";

const Analytics = () => {

  const [totalBooks, setTotalBooks] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [accountRequests, setAccountRequests] = useState(0);
  const [borrowedRequests, setBorrowedRequests] = useState(0);

  const fetchingData = async () => {
    try {
      const books = await getBooksLength();
      const students = await getStudentsLength();
      const unverifiedStudents = await getUnverifiedStudentsLength();
      const borrowedRequests = await getBorrowedRequestsLength();
      setTotalBooks(books.totalBooks);
      setTotalStudents(students.totalStudents);
      setAccountRequests(unverifiedStudents.totalUnverifiedStudents);
      setBorrowedRequests(borrowedRequests.totalBorrowedRequests);
      console.log(books, students, unverifiedStudents, borrowedRequests);
    } catch (error) {
      console.error("Error fetching books length:", error);
    }
  }

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <section id="analytics" className="min-h-[90vh]">
        <div className="container-fluid p-10">
          {/* <BreadCrumb page={"Dashboard"} color='text-white' category={""} /> */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            <AnalyticsCard number={totalBooks} title="Total Books" icon={<FaBook color={"#fa0032"} size={48} />} />
            <AnalyticsCard number={totalStudents} title="Total Students" icon={<PiStudentBold color={"#ffa828"} size={48} />} />
            <AnalyticsCard number={accountRequests} title="Account Requests" icon={<RiMapPinUserFill color={"#2c8a6b"} size={48} />} />
            <AnalyticsCard number={borrowedRequests} title="Borrowed Request" icon={<IoBookOutline color={"#0363a6"} size={48} />} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Analytics;
