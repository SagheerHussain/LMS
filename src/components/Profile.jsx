import { DarkThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { MdVerified } from "react-icons/md";
import BorrowedBooks from "./BorrowedBooks";
import { GoUnverified } from "react-icons/go";
import { ClipLoader } from "react-spinners";

const Profile = ({ student, loading, error }) => {
  const { darkMode } = useContext(DarkThemeContext);

  return (
    <>
      {loading && <div className="flex items-center justify-center"><ClipLoader color={"#fff"} /></div>}
      {student && (
        <section id="profile" className="py-20">
          <div className="container mx-auto">
            <div className="lg:flex justify-between">
              <div
                className={`profile_info mb-10 ${
                  darkMode ? "bg-secondary" : "bg-light_theme_hover_mode"
                }  p-10 rounded-[25px] w-full lg:w-[49%] h-full`}
              >
                <div className="profile_pic sm:flex ">
                  <img
                    src={student.profilePicture}
                    className="rounded-full object-center object-cover w-[200px] h-[200px]"
                    alt=""
                  />
                  <div className="profile_name sm:mt-0 mt-4 sm:ms-4">
                    <h3
                      className={`${
                        darkMode ? "text-light_text" : "text-dark_text"
                      } flex items-center`}
                    >
                      {student.isVerified ? (
                        <>
                          <MdVerified className="text-sky-700 me-1" />
                          Verified Student
                        </>
                      ) : (
                        <>
                          <GoUnverified className="text-sky-700 me-2" />
                          Not Verified Student
                        </>
                      )}
                    </h3>
                    <h2
                      className={`${
                        darkMode ? "text-light_text" : "text-dark_text"
                      } text-2xl font-bold py-3`}
                    >
                      {student.name}
                    </h2>
                    <p
                      className={`${
                        darkMode ? "text-light_text" : "text-dark_text"
                      } `}
                    >
                      {student.email}
                    </p>
                  </div>
                </div>
                <div className="profile_uni py-4">
                  <h4
                    className={`${
                      darkMode ? "text-zinc-400" : "text-dark_text"
                    }  text-xl font-medium`}
                  >
                    University:
                  </h4>
                  <h5
                    className={`${
                      darkMode ? "text-light_text" : "text-dark_text"
                    }  text-2xl font-semibold`}
                  >
                    {student.universityName}
                  </h5>
                </div>
                <div className="profile_uni py-4">
                  <h4
                    className={`${
                      darkMode ? "text-zinc-400" : "text-dark_text"
                    }  text-xl font-medium`}
                  >
                    Student ID Card:
                  </h4>
                  <div className="profile_uni_card pt-4">
                    <img
                      className="w-full"
                      src={student.universityIdCardImage}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="borrow-books lg:w-[49%]">
                <BorrowedBooks />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
