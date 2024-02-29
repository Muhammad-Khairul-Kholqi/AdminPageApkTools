import React from "react";
import  { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Style/StyleHeader.css';
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className = "container flex justify-between flex-wrap gap-[20px] px-[3%] items-center " >
            <div className = "teks-header" >
                Welcome back, <br />
                <span className="name-admin text-[20px] font-bold">Khairul Kholqi</span>
            </div>
            <div className="relative">
                <div className="flex gap-[5px] items-center cursor-pointer" onClick={toggleDropdown}>
                    <FaUser className="icon-admin" />
                    <IoMdArrowDropdown className={`transition-transform transform ${isDropdownOpen ? 'rotate-180' : ''}`}/>
                </div>

                {isDropdownOpen && (
                    <div className="account-logout absolute top-full right-0 mt-[10px] bg-white shadow rounded-md p-[15px] text-[15px] z-10">
                        <ul>
                            <li>
                                <Link to="/">
                                    <div className = "py-[5px]" >
                                        <p>Account</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to = "/" >
                                    <div className = "py-[5px]" >
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