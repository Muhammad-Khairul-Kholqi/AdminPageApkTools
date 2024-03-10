import React from "react";
import { Link } from "react-router-dom";

import { TbArrowUpRight } from "react-icons/tb";
import { LuDot } from "react-icons/lu";

const CardAbout = () => {
    return(
        <div>
            <div className="flex flex-wrap justify-center gap-[30px] p-[30px]">
                <Link>
                    <div className="bg-white text-black border border-gray-600 w-[250px]  p-[10px] hover:shadow  rounded-[5px]">
                        <div className="flex justify-between items-center flex-wrap">
                            <div>
                                <p className="font-bold">About Us</p>
                                <p>GC Tools</p>
                            </div>
                            <div className="bg-gray-300 p-[5px] rounded-[50%]">
                                <TbArrowUpRight className="text-[25px]" />
                            </div>
                        </div>
                        <button className="bg-black py-[3px] px-[10px] text-white rounded-[3px] hover:bg-gray-700 mt-[20px]">
                            See More
                        </button>
                    </div>
                </Link>

                <Link>
                    <div className="bg-white text-black border border-gray-600 w-[250px] p-[10px] hover:shadow  rounded-[5px]">
                        <div className="flex justify-between items-center flex-wrap">
                            <div>
                                <p className="font-bold">Vision Mision</p>
                                <p>GC Tools</p>
                            </div>
                            <div className="bg-gray-300 p-[5px] rounded-[50%]">
                                <TbArrowUpRight className="text-[25px]" />
                            </div>
                        </div>
                        <button className="bg-black py-[3px] px-[10px] text-white rounded-[3px] hover:bg-gray-700 mt-[20px]">
                            See More
                        </button>
                    </div>
                </Link>

                <Link>
                    <div className="bg-white text-black border border-gray-600 w-[250px] p-[10px] hover:shadow  rounded-[5px]">
                        <div className="flex justify-between items-center flex-wrap">
                            <div>
                                <p className="font-bold">Contact</p>
                                <p>GC Tools</p>
                            </div>
                            <div className="bg-gray-300 p-[5px] rounded-[50%]">
                                <TbArrowUpRight className="text-[25px]" />
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



{/* <div className="flex flex-wrap justify-center gap-[30px]">
                <Link>
                    <div className="w-full sm:w-[260px] bg-[#E8E8E8] p-[10px] rounded-[10px] hover:scale-105 duration-500 hover:bg-black hover:text-white">
                        <div className="flex justify-between flex-wrap">
                            <p className="font-bold">About Us</p>
                            <div className="bg-gray-300 p-[5px] rounded-[50%]">
                                <TbArrowUpRight className="text-[20px]" />
                            </div>
                        </div>
                        <p className="text-[35px] font-bold">345</p>
                        <div className="flex items-center">
                            <p>Click</p>
                            <LuDot className="mt-[2px]" />
                            <p>See Details</p>
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className="w-full sm:w-[260px] bg-[#E8E8E8] p-[10px] rounded-[10px] hover:scale-105 duration-500 hover:bg-black hover:text-white">
                        <div className="flex justify-between flex-wrap">
                            <p className="font-bold">Vision Mision</p>
                            <div className="bg-gray-300 p-[5px] rounded-[50%]">
                                <TbArrowUpRight className="text-[20px]" />
                            </div>
                        </div>
                        <p className="text-[35px] font-bold">345</p>
                        <div className="flex items-center">
                            <p>Click</p>
                            <LuDot className="mt-[2px]" />
                            <p>See Details</p>
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className="w-full sm:w-[260px] bg-[#E8E8E8] p-[10px] rounded-[10px] hover:scale-105 duration-500 hover:bg-black hover:text-white">
                        <div className="flex justify-between flex-wrap">
                            <p className="font-bold">Contact</p>
                            <div className="bg-gray-300 p-[5px] rounded-[50%]">
                                <TbArrowUpRight className="text-[20px]" />
                            </div>
                        </div>
                        <p className="text-[35px] font-bold">345</p>
                        <div className="flex items-center">
                            <p>Click</p>
                            <LuDot className="mt-[2px]" />
                            <p>See Details</p>
                        </div>
                    </div>
                </Link>
            </div> */}