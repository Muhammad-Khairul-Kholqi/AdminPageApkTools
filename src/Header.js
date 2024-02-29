import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [greeting, setGreeting] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const getGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        return "Good morning";
      } else if (currentHour >= 12 && currentHour < 18) {
        return "Good afternoon";
      } else {
        return "Good night";
      }
    };
    setGreeting(getGreeting());
  }, []);

  return (
    <div className="container flex justify-between flex-wrap gap-[20px] px-[3%] items-center">
      <div className="teks-header">
        {greeting}, <br />
        <span className="name-admin text-[18px] font-bold">Khairul Kholqi</span>
      </div>
      <div className="relative">
        <div className="flex gap-[5px] items-center cursor-pointer" onClick={toggleDropdown}>
          <FaUser className="icon-admin text-[13px]" />
          <IoMdArrowDropdown className={`transition-transform transform ${isDropdownOpen ? "rotate-180" : ""}`} />
        </div>

        {isDropdownOpen && (
          <div className="account-logout absolute top-full right-0 mt-[10px] bg-white shadow rounded-md p-[15px] text-[15px] z-10">
            <ul>
              <li>
                <Link to="/">
                  <div className="py-[5px] hover:text-blue-600 hover:underline">
                    <p>Account</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="py-[5px] hover:text-blue-600 hover:underline">
                    <p>Logout</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
