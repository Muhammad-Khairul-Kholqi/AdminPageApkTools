import React from "react";

import { TbArrowUpRight } from "react-icons/tb";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router-dom";

const CardDashboard = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-center gap-[30px]">
                <Link>
                    <div className="w-full sm:w-[250px] bg-[#E8E8E8] p-[10px] rounded-[10px] hover:scale-105 duration-500 hover:bg-black hover:text-white">
                        <div className="flex justify-between flex-wrap">
                            <p className="font-bold">Blog</p>
                            <div className="bg-[#D9D9D9] p-[5px] rounded-[50%]">
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
                    <div className="w-full sm:w-[250px] bg-[#E8E8E8] p-[10px] rounded-[10px] hover:scale-105 duration-500 hover:bg-black hover:text-white">
                        <div className="flex justify-between flex-wrap">
                            <p className="font-bold">Blog</p>
                            <div className="bg-[#D9D9D9] p-[5px] rounded-[50%]">
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
                    <div className="w-full sm:w-[250px] bg-[#E8E8E8] p-[10px] rounded-[10px] hover:scale-105 duration-500 hover:bg-black hover:text-white">
                        <div className="flex justify-between flex-wrap">
                            <p className="font-bold">Blog</p>
                            <div className="bg-[#D9D9D9] p-[5px] rounded-[50%]">
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
                    <div className="w-full sm:w-[250px] bg-[#E8E8E8] p-[10px] rounded-[10px] hover:scale-105 duration-500 hover:bg-black hover:text-white">
                        <div className="flex justify-between flex-wrap">
                            <p className="font-bold">Blog</p>
                            <div className="bg-[#D9D9D9] p-[5px] rounded-[50%]">
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
            </div>
        </div>
    )
}

export default CardDashboard;