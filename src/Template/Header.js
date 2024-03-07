import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../Style/StyleHeader.css';
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
// import Swal from 'sweetalert2';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className="container flex justify-between flex-wrap gap-[50px] px-[5%] items-center">
            <div className="teks-header">
                Welcome back, <br />
                <span className="name-admin text-[25px] font-bold">Khairul Kholqi</span>
            </div>
            <div className="relative">
                <div className="flex gap-[5px] items-center cursor-pointer" onClick={toggleDropdown}>
                    <FaUser className="icon-admin" />
                    <p className="admin">Administrator</p>
                    <IoMdArrowDropdown className={`transition-transform transform ${isDropdownOpen ? 'rotate-180' : ''}`}/>
                </div>

                {isDropdownOpen && (
                    <div className="account-logout absolute top-full right-0 bg-white shadow-md rounded-md p-5 text-[15px] z-10">
                        <ul>
                            <li>
                                <Link to="/data-admin">
                                    <div className="flex items-center gap-[5px] hover:bg-blue-500 p-[5px] rounded-[5px] hover:text-white">
                                        <RiAdminLine  className="icon-log-acc text-[17px]" />
                                        <p>Data</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/account-admin">
                                    <div className="flex items-center gap-[5px] hover:bg-[#1A9FA3] p-[5px] rounded-[5px] hover:text-white">
                                        <MdOutlineAccountCircle className="icon-log-acc text-[17px]" />
                                        <p>Account</p>
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
