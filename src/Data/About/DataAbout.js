import React from "react";
import { Link } from "react-router-dom";
import CardAbout from "../../Card/CardAbout";

const DataAbout = () => {
    return(
        <div>
            <div className = "container bg-black mt-[20px] rounded-[10px] px-[10%] py-[30px] text-center text-white" 
                    data-aos="flip-down" data-aos-duration="1300">
                <h1 className = "title-header text-[40px] leading-10 font-bold font-roboto-slab tracking-[2px]" > About Us </h1>
                <p className="description mt-[20px] text-[18px] font-inter">
                    Access and settings about us vision mission and contact
                </p>
            </div>

            <div className="mt-[30px]">
                <CardAbout />
            </div>

            

        </div>
    )
}

export default DataAbout;