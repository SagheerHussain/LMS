import { DarkThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { MdVerified } from "react-icons/md";
import BorrowedBooks from "./BorrowedBooks";

const Profile = () => {
  const { darkMode } = useContext(DarkThemeContext);

  return (
    <>
      <section id="profile" className="py-20">
        <div className="container mx-auto">
          <div className="lg:flex justify-between">
            <div
              className={`profile_info mb-10 ${
                darkMode ? "bg-secondary" : "bg-light_theme_hover_mode"
              }  p-10 rounded-[25px] w-full lg:w-[49%] h-full`}
            >
              <div className="profile_pic flex">
                <img
                  src="https://play-lh.googleusercontent.com/2zorpA9peRFcwZM5SLSAx80gLCA3YrknRXQwPW-Hz2AJyBcvBJiO9vuP6DvlX3FRZXMv=w526-h296-rw"
                  className="w-full rounded-full max-w-[150px]"
                  alt=""
                />
                <div className="profile_name ms-4">
                  <h3
                    className={`${
                      darkMode ? "text-light_text" : "text-dark_text"
                    } flex items-center`}
                  >
                    <MdVerified className="text-sky-700 me-1" />
                    Verified Student
                  </h3>
                  <h2
                    className={`${
                      darkMode ? "text-light_text" : "text-dark_text"
                    } text-2xl font-bold py-3`}
                  >
                    Md. Imran Hossain
                  </h2>
                  <p
                    className={`${
                      darkMode ? "text-light_text" : "text-dark_text"
                    } `}
                  >
                    contact@skynetsilicon.com
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
                  Karachi University
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
                    src="https://marketplace.canva.com/EAFUng97dLs/1/0/1600w/canva-dark-grey-and-aqua-blue-modern-highschool-id-card-LKhfPa_o2gI.jpg"
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
    </>
  );
};

export default Profile;
