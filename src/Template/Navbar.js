import React, { useState } from "react";
import { Link } from "react-router-dom";
import "..//Style/StyleNavbar.css";

import LogoWhite from "../Assets/logo-white.png";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    return(
        <div>
            <div className="navbar flex justify-between py-[20px] px-[5%] bg-black text-white border-b-[1px] border-white items-center">
                <div className="navbar-log-admin flex flex-wrap gap-[30px] items-center">
                    <div>
                        <img src={LogoWhite} className="logo w-[30px]" />
                    </div>
                    <div className= 'navbar-nav-link flex flex-wrap gap-[15px] text-[15px]' >
                        <Link>
                            <div>
                                <p>Home</p>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <p>About</p>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <p>Blog</p>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <p>Tools</p>
                            </div>
                        </Link>

                        <Link>
                            <div>
                                <p>Framework</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="admin-log flex gap-[15px] items-center">
                    <Link>
                        <div className = "border-solid border-[1px] border-white p-[6px] rounded-[50%] hover:bg-white hover:text-black" >
                            <FaRegUser className="admin-log text-[15px]" />
                        </div>
                    </Link>

                    <Link>
                        <div className = "border-solid border-[1px] border-white p-[6px] rounded-[50%] hover:bg-white hover:text-black" >
                            <BiLogOut className="admin-log text-[15px]" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;