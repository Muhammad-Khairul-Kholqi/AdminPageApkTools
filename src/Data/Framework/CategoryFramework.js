import React from "react";

import CardFramework from "../../Card/CardFramework";

const CategoryFramework = () => {
    return(
        <div>
            <div className = "bg-black mt-[20px] rounded-[10px] px-[10%] py-[30px] text-center text-white">
                <h1 className = "title-header text-[40px] leading-10 font-bold font-roboto-slab tracking-[2px]" > Framework </h1>
                <p className="description mt-[20px] text-[18px] font-inter">
                    Access and settings all Framework
                </p>
            </div>
            <div className="mt-[20px]">
                <CardFramework />
            </div>
        </div>
    )
}

export default CategoryFramework;