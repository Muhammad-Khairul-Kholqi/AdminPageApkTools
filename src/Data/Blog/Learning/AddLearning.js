import { React, useState } from "react";
import { Form, Link } from "react-router-dom";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const AddDataLearning = () => {
    return(
        <div>
            <div className = "bg-black mt-[20px] rounded-[10px] px-[10%] py-[40px] text-center text-white">
                <h1 className = "title-header text-[40px] leading-10 font-bold font-roboto-slab tracking-[2px]" >Add Data Learning </h1> 
            </div>

            <div className="flex flex-wrap gap-[10px] items-center justify-center mt-[20px]">
                <Link to="/data-learning">
                <p className="hover:underline">Data Learning</p>
                </Link>

                <MdOutlineKeyboardArrowRight className="mt-[3px]" />

                <p className="text-blue-600">Add Data Learning</p>
            </div>

            <div className="bg-gray-100 p-[20px] rounded-[10px] mt-[20px]">
                <form>
                    <div>
                        <span for="nameC">Name Channel:</span>
                        <br />
                        <input 
                            className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
                            type="text" 
                            id="nameC" 
                            autoComplete="off"
                        />
                    </div>

                    <div className="mt-[15px]">
                        <span for="linkC">Link Channel:</span>
                        <br />
                        <input 
                            className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
                            type="text" 
                            id="linkC" 
                            autoComplete="off"
                        />
                    </div>

                    <button className="mt-[20px] rounded-[3px] w-full bg-black hover:bg-gray-800 text-white py-[5px]" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddDataLearning;