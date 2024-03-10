import React from "react";

import CardDashboard from "./Card/CardDashboard";

const Dashboard = () => {
    return(
        <div>
            <div className = "bg-black mt-[20px] rounded-[10px] px-[10%] py-[30px] text-center text-white" 
                    data-aos="flip-down" data-aos-duration="1300">
                <h1 className = "title-header text-[40px] leading-10 font-bold font-roboto-slab tracking-[2px]" > This is the <br /> Admin Page </h1>
                <p className="description mt-[20px] text-[18px] font-inter">
                    Access all configurations and customize the app according to your preferences
                </p>
            </div>

            <div className="mt-[20px]">
                <p className="text-[30px] font-bold">Dashboard</p>
            </div>

            <div className="mt-[20px]">
                <CardDashboard />
            </div>

        </div>
    )
}

export default Dashboard;