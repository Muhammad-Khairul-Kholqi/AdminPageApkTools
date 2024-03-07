import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/StyleSidebar.css";

import Logo from "../Assets/logo.png";
import { RxDashboard } from "react-icons/rx";
import { IoIosStarOutline } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = () => {
    return(
        <div>
            <div className = "sidebar shadow shadow-gray-400 h-screen w-[60px] overflow-auto px-[15px] fixed" id="sidebar">
                <div className="mt-[40px]">
                    <Link>  
                        <img src={Logo} />
                    </Link>
                </div>

                <hr className="border-1 border-gray-400 mt-[20px]" />

                <div className="flex justify-center items-center ">
                    <ul className="flex flex-col items-center">
                        <Link>
                            <li 
                                className="dashboard p-[8px] hover:bg-blue-600 mt-[40px] hover:text-white rounded-[3px] ease-in duration-300">
                                <RxDashboard className="text-[20px]" />
                            </li>
                        </Link>

                        <Link>
                            <li 
                                className="about p-[8px] hover:bg-blue-600 mt-[20px] hover:text-white rounded-[3px] ease-in duration-300">
                                <IoIosStarOutline className="text-[20px]" />
                            </li>
                        </Link>

                        <Link>
                            <li 
                                className="blog p-[8px] hover:bg-blue-600 mt-[20px] hover:text-white rounded-[3px] ease-in duration-300">
                                <IoCameraOutline className="text-[20px]" />
                            </li>
                        </Link>

                        <Link>
                            <li 
                                className="tools p-[8px] hover:bg-blue-600 mt-[20px] hover:text-white rounded-[3px] ease-in duration-300">
                                <VscTools className="text-[20px]" />
                            </li>
                        </Link>

                        <Link>
                            <li 
                                className="framework p-[8px] hover:bg-blue-600 mt-[20px] hover:text-white rounded-[3px] ease-in duration-300">
                                <IoExtensionPuzzleOutline className="text-[20px]" />
                            </li>
                        </Link>
                    </ul>
                </div>

                <hr className="border-1 border-gray-400 mt-[20px]" />

                <Link>
                    <div 
                        className="logout flex flex-col items-center p-[8px] hover:bg-blue-600 mt-[30px] hover:text-white rounded-[3px] ease-in duration-300">
                        <TbLogout2 className="text-[20px]" />
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Sidebar;