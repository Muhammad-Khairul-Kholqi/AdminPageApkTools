import React from "react";
import BackImg from "./Assets/bg.png"

const Dashboard = () => {
    return(
        <div>
            <div className = "container bg-cover bg-center mt-[20px] rounded-[10px] px-[10%] py-[30px] text-center text-black"
                style = {{backgroundImage: `url(${BackImg})`}} 
                data-aos="flip-down" data-aos-duration="1300">
            <h1 className = "title-header text-[40px] leading-10 font-bold font-roboto-slab tracking-[2px]" > This is the <br /> Admin Page </h1>
            <p className="description mt-[20px] text-[18px] font-inter">
                Access all configurations and customize the app according to your preferences
            </p>
        </div>
        </div>
    )
}

export default Dashboard;