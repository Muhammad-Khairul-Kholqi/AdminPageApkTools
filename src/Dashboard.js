import React from "react";
import './Style/StyleDashboard.css'

import BackImg from "./Assets/background.png";
import LogoWhite from "./Assets/logo-white.png";

const Dashboard = () => {
    return(
        <div>
            <div>
                <div className="header-about-category flex justify-center gap-[20px] py-[20px]">
                    <div className="text-center bg-cover py-[50px] px-[20px] max-w-[700px] w-full rounded-[10px] text-white shadow-md" 
                    style = {
                        {
                            backgroundImage: `url(${BackImg})`
                        }
                    } >
                        <h1 className="title-left text-[30px] font-bold">Welcome to Admin Page</h1>
                        <p className="desc-left mt-[10px] text-[18px]">Access all data and settings in this module</p>
                    </div>

                    <div className="title-logo text-center bg-cover py-[50px] px-[20px] max-w-[350px] w-full rounded-[10px] text-white shadow-md" 
                    style = {
                        {
                            backgroundImage: `url(${BackImg})`
                        }
                    } >
                        <div className="flex justify-center">
                            <img className="logo-white max-w-[80px] w-full" src={LogoWhite} draggable="false" />
                        </div>
                        <p className="title-right text-center mt-[10px] text-white text-[20px] font-bold tracking-[2px]">GC Tools</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;