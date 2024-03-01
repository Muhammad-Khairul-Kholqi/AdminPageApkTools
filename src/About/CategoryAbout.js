import React from "react";

import CardAboutVm from "./CardAboutVm";

const CategoryAbout = () => {
    return(
        <div>
            <div className="py-[20px]">
                <div className = "bg-[#141D38] w-full p-[20px] rounded-[10px] text-center flex justify-center text-white font-bold text-[30px]" >
                    <p className="w-[400px]">Select the category you want to organize</p>
                </div>
                <div>
                    <CardAboutVm />
                </div>
            </div>
        </div>
    )
}

export default CategoryAbout;