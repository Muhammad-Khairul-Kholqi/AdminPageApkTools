import React from "react";
import { Link } from "react-router-dom";

import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegSquarePlus } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";

const DataFaq = () => {
    return(
        <div>
            <div className = "bg-black mt-[20px] rounded-[10px] px-[10%] py-[50px] text-center text-white">
                <h1 className = "title-header text-[50px] leading-10 font-bold font-roboto-slab tracking-[2px]" > FAQ </h1> 
            </div>

            <div className="bg-gray-100 p-[20px] mt-[20px] rounded-[10px]">
                <div className="flex flex-wrap gap-[10px] justify-between">
                    <p className="text-[30px] font-bold">FAQ</p>
                    <Link to="/add-data-faq">
                        <button className="flex gap-[5px] items-center bg-black text-white px-[10px] py-[5px] rounded-[3px] hover:bg-gray-900">
                            <FaRegSquarePlus />
                            <p>Add Data</p>
                        </button>
                    </Link>
                </div>
                <div className = "relative mt-[20px] overflow-x-auto border-solid border-[1px] border-black" >
                    <table className = "w-full text-sm text-left rtl:text-right" >
                        <thead className = "text-[15px] bg-blue-100 border-b-[1px] border-black" >
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name Source Of
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Link Source Of
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                                <th scope="col" className="px-6 py-3">
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr className="text-[13px]">
                                <td className="px-6 py-4">
                                    1
                                </td>
                                <td className="px-6 py-4">
                                    HAHA
                                </td>
                                <td className="px-6 py-4">
                                    HAHA
                                </td>
                                <td className="px-6 py-4">
                                    HAHA
                                </td>
                                <td className="px-6 py-4">
                                    HAHA
                                </td>
                                <td className="px-6 py-4 flex gap-[10px]">
                                    <Link to="/edit-data-faq">
                                        <div className="icon-text text-[15px] flex gap-[5px] items-center text-blue-600 hover:underline">
                                            <FaRegPenToSquare />
                                            <p className="text-link">Edit</p>
                                        </div>
                                    </Link>
                                    <p>|</p>
                                    <button
                                        className="flex gap-[5px] items-center text-red-600 hover:underline">
                                            <IoTrashOutline />
                                            <p>Delete</p>
                                    </button>
                                </td>
                                <td className="px-6 py-4">
                                    <input
                                        type="checkbox"
                                        className="cursor-pointer"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DataFaq;