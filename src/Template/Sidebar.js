import React from "react";
import { Link } from "react-router-dom";

import Logo from '../Assets/logo.png'
import { IoNewspaperOutline } from "react-icons/io5";
import { GoCommentDiscussion } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { LiaToolsSolid } from "react-icons/lia";
import { IoExtensionPuzzleOutline } from "react-icons/io5";

const Sidebar = () => {
    return(
        <div>
            <div className = "bg-white shadow-lg shadow-gray-400 h-screen w-[50px] overflow-auto px-[5px] fixed" >
                <div className="flex justify-center mt-[20px]">
                    <Link>
                        <img className="w-[25px]" src={Logo} draggable="false" />
                    </Link>
                </div>

                <div>
                    <Link>
                        <div className = "flex justify-center py-[8px] rounded-[3px] mt-[30px] hover:bg-blue-600 hover:text-white" title="Dashboard">
                            <RxDashboard className="text-[20px]" />
                        </div>
                    </Link>

                    <Link>
                        <div div className = "flex justify-center py-[8px] rounded-[3px] mt-[10px] hover:bg-blue-600 hover:text-white" title="About Us">
                            <GoCommentDiscussion  className="text-[20px]"/>
                        </div>
                    </Link>

                    <Link>
                        <div div className = "flex justify-center py-[8px] rounded-[3px] mt-[10px] hover:bg-blue-600 hover:text-white" title="Blogs">
                            <IoNewspaperOutline  className="text-[20px]"/>
                        </div>
                    </Link>

                    <Link>
                        <div className = "flex justify-center py-[8px] rounded-[3px] mt-[10px] hover:bg-blue-600 hover:text-white" title="Tools">
                            <LiaToolsSolid className="text-[20px]" />
                        </div>
                    </Link>

                    <Link>
                        <div className = "flex justify-center py-[8px] rounded-[3px] mt-[10px] hover:bg-blue-600 hover:text-white" title="Framework">
                            <IoExtensionPuzzleOutline className="text-[20px]" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;