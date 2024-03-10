import React from "react";
import { Link } from "react-router-dom";

import { FaRegPenToSquare } from "react-icons/fa6";

const DataVisiMisi = () => {
    return(
        <div>
            <div className = "bg-black mt-[20px] rounded-[10px] px-[10%] py-[50px] text-center text-white" 
                    data-aos="flip-down" data-aos-duration="1300">
                <h1 className = "title-header text-[50px] leading-10 font-bold font-roboto-slab tracking-[2px]" > Vision Mision </h1>
            </div>

            <div className="bg-gray-100 p-[20px] mt-[20px] rounded-[10px]">
                <p className="text-[30px] font-bold">Vision Mision</p>
                <div className = "relative mt-[20px] overflow-x-auto border-solid border-[1px] border-black" >
                    <table className = "w-full text-sm text-left rtl:text-right" >
                        <thead className = "text-[15px] bg-blue-100 border-b-[1px] border-black" >
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Vision
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Mision
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr className="text-[13px]">
                                <td className="px-6 py-4">
                                    HAHA
                                </td>
                                <td className="px-6 py-4">
                                    HAHA
                                </td>
                                <td className="px-6 py-4 flex gap-[10px]">
                                    <Link to = "/edit-data-visi-misi">
                                        <div className="icon-text text-[15px] flex gap-[5px] items-center text-blue-600 hover:underline">
                                            <FaRegPenToSquare />
                                            <p className="text-link">Edit</p>
                                        </div>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DataVisiMisi;