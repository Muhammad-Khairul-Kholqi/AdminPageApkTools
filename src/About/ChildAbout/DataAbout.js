import React from "react";

import BackImg from "../../Assets/background.png";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

const DataAbout = () => {
    return(
        <div>
            <div className="py-[20px]">
                <div className="text-center bg-cover py-[50px] px-[20px] w-full rounded-[10px] text-white shadow-md" 
                style = {
                    {
                        backgroundImage: `url(${BackImg})`
                    }
                } >
                    <h1 className="title-left text-[30px] font-bold">Data About</h1>
                </div>

                <div className="bg-white w-full p-[10px] rounded-[10px] mt-[20px]">
                    <div className="flex justify-end mb-[20px] mt-[10px]">
                        <Link to="/add-data-teams">
                            <div className = "flex justify-center gap-[5px] py-[5px] px-[10px] items-center bg-blue-600 text-white hover:bg-blue-700 rounded-[3px]" >
                                <FaRegEdit />
                                <div>Edit Data</div>
                            </div>
                        </Link>
                    </div>

                    <div className = "relative overflow-x-auto border-solid border-[1px] border-black rounded-[5px]" >
                            <table className = "w-full text-sm text-left rtl:text-right" >
                                <thead className = "text-[15px] bg-blue-100 border-b-[1px] border-black" >
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-[13px]">
                                        <td className="px-6 py-4">
                                            What is GC Tools ?
                                        </td>
                                        <td className = "px-6 py-4 w-[600px]" >
                                            GC Tools is a Website that provides Free Tools that can make it easier
                                            for a Frontend Person to build a Website, in Indonesian GC means Fast Movement the Intention is to make the Website more Developer Friendly and Efficient.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default DataAbout;