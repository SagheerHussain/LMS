import React, { useEffect, useState } from "react";
// import { BreadCrumb } from '../../../components/index'
import { AnalyticsCard } from "../index";
import { FaBook } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { RiMapPinUserFill } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";

const Analytics = () => {
  return (
    <>
      <section id="analytics" className="h-[88vh]">
        <div className="container-fluid p-10">
          {/* <BreadCrumb page={"Dashboard"} color='text-white' category={""} /> */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            <AnalyticsCard number={150} title="Total Books" icon={<FaBook color={"#fa0032"} size={48} />} />
            <AnalyticsCard number={63} title="Total Students" icon={<PiStudentBold color={"#ffa828"} size={48} />} />
            <AnalyticsCard number={22} title="Account Requests" icon={<RiMapPinUserFill color={"#2c8a6b"} size={48} />} />
            <AnalyticsCard number={41} title="Borrowed Request" icon={<IoBookOutline color={"#0363a6"} size={48} />} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Analytics;
