    import React from "react";
    import CardCategoryTools from "../../Card/CardCategoryTools";

    const CategoryTools = () => {
        return(
            <div>
                <div className = "bg-black mt-[20px] rounded-[10px] px-[10%] py-[30px] text-center text-white" 
                        data-aos="flip-down" data-aos-duration="1300">
                    <h1 className = "title-header text-[40px] leading-10 font-bold font-roboto-slab tracking-[2px]" > Tools </h1>
                    <p className="description mt-[20px] text-[18px] font-inter">
                        Access and settings category tools
                    </p>
                </div>

                <div className="mt-[20px]">
                    <CardCategoryTools />
                </div>
            </div>
        )
    }

    export default CategoryTools;