import React from "react";

import CardAboutVm from "./CardAboutVm";
import BackImg from "../Assets/background.png";

const CategoryAbout = () => {
    return(
        <div>
            <div className="py-[20px]">
                <div className="text-center bg-cover py-[50px] px-[20px] w-full rounded-[10px] text-white shadow-md" 
                    style = {
                        {
                            backgroundImage: `url(${BackImg})`
                        }
                    } >
                        <h1 className="title-left text-[30px] font-bold">Select the category you want to organize</h1>
                    </div>
                <div>
                    <CardAboutVm />
                </div>
            </div>
        </div>
    )
}

export default CategoryAbout;