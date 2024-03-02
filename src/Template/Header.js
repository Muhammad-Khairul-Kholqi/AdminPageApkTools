import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <div className="bg-black w-full p-[20px]">
          <div className="text-white flex justify-center">
            <div div className = "text-start w-[700px]" >
              <p className="text-[17px]">Welcome back,</p>
              <h1 className="text-[25px] font-bold">Khairul Kholqi</h1>
              <p className="mt-[10px]">Admin Control Center - Monitor, Manage, and Optimize Your System Performance</p>
              <div className="flex gap-[10px] flex-wrap mt-[30px]">
                <Link>
                  <button className="bg-white text-black py-[3px] px-[10px] rounded-[3px]">About Us</button>
                </Link>

                <Link>
                  <button className="border-solid border-[2px] border-white black py-[1px] px-[10px] rounded-[3px] hover:bg-white hover:text-black">Get Started</button>
                </Link>
              </div>
            </div>
          </div>

        </div>
    </div>
  );
};

export default Header;
