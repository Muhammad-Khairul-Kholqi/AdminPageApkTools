import React from "react";
import { Link } from "react-router-dom";

const CategoryBlog = () => {
    return(
        <div>
            <div className = "bg-black mt-[20px] rounded-[10px] px-[10%] py-[30px] text-center text-white" 
                    data-aos="flip-down" data-aos-duration="1300">
                <h1 className = "title-header text-[40px] leading-10 font-bold font-roboto-slab tracking-[2px]" > Blogs </h1>
                <p className="description mt-[20px] text-[18px] font-inter">
                    Access and settings FAQ and learning resources
                </p>
            </div>

            <div className="mt-[20px]">
                <div className="w-full rounded-[5px] border border-black p-[10px]">
                    <div className="flex justify-between items-center gap-[10px] flex-wrap">
                        <div className="flex items-center gap-[10px] font-bold">
                            <p>FAQ</p>
                            <p>3</p>
                        </div>
                        <Link>
                            <button className="bg-black hover:bg-gray-900 text-white px-[10px] py-[5px] rounded-[3px]">See Details</button>
                        </Link>
                    </div>
                </div>

                <div className="w-full rounded-[5px] border border-black p-[10px] mt-[15px]">
                    <div className="flex justify-between items-center gap-[10px] flex-wrap">
                        <div className="flex items-center gap-[10px] font-bold">
                            <p>Learning</p>
                            <p>10</p>
                        </div>
                        <Link>
                            <button className="bg-black hover:bg-gray-900 text-white px-[10px] py-[5px] rounded-[3px]">See Details</button>
                        </Link>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default CategoryBlog;