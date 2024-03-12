import React from "react";
import { Link } from "react-router-dom";

import { TbArrowUpRight } from "react-icons/tb";

const CardAbout = () => {
    return(
        <div>
            <div className="flex flex-wrap justify-center gap-[30px] p-[30px]">
                <Link to="/data-about">
                    <div className="bg-white text-black border border-gray-600 w-[250px]  p-[10px] hover:shadow  rounded-[5px]">
                        <div className="flex justify-between items-center flex-wrap">
                            <div>
                                <p className="font-bold">About Us</p>
                                <p>GC Tools</p>
                            </div>
                            <div className="bg-gray-300 p-[5px] rounded-[50%]">
                                <TbArrowUpRight className="text-[20px]" />
                            </div>
                        </div>
                        <button className="bg-black py-[3px] px-[10px] text-white rounded-[3px] hover:bg-gray-700 mt-[20px]">
                            See More
                        </button>
                    </div>
                </Link>

                <Link to="/data-visi-misi">
                    <div className="bg-white text-black border border-gray-600 w-[250px] p-[10px] hover:shadow  rounded-[5px]">
                        <div className="flex justify-between items-center flex-wrap">
                            <div>
                                <p className="font-bold">Vision Mision</p>
                                <p>GC Tools</p>
                            </div>
                            <div className="bg-gray-300 p-[5px] rounded-[50%]">
                                <TbArrowUpRight className="text-[20px]" />
                            </div>
                        </div>
                        <button className="bg-black py-[3px] px-[10px] text-white rounded-[3px] hover:bg-gray-700 mt-[20px]">
                            See More
                        </button>
                    </div>
                </Link>

                <Link to="/data-contact">
                    <div className="bg-white text-black border border-gray-600 w-[250px] p-[10px] hover:shadow  rounded-[5px]">
                        <div className="flex justify-between items-center flex-wrap">
                            <div>
                                <p className="font-bold">Contact</p>
                                <p>GC Tools</p>
                            </div>
                            <div className="bg-gray-300 p-[5px] rounded-[50%]">
                                <TbArrowUpRight className="text-[20px]" />
                            </div>
                        </div>
                        <button className="bg-black py-[3px] px-[10px] text-white rounded-[3px] hover:bg-gray-700 mt-[20px]">
                            See More
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CardAbout;



