import React from "react";
import { Link } from "react-router-dom";

const CardFramework = () => {
    return(
        <div>
            <div className="flex flex-wrap justify-center gap-[15px]">
                <Link>
                    <div className="w-[200px] py-[20px] bg-black text-white rounded-[5px] hover:bg-white hover:text-black hover:shadow-md duration-500">
                        <p className=" text-center font-bold text-[20px]">React Js</p>
                    </div>  
                </Link>

                <Link>
                    <div className="w-[200px] py-[20px] bg-black text-white rounded-[5px] hover:bg-white hover:text-black hover:shadow-md duration-500">
                        <p className=" text-center font-bold text-[20px]">Vue Js</p>
                    </div>  
                </Link>

                <Link>
                    <div className="w-[200px] py-[20px] bg-black text-white rounded-[5px] hover:bg-white hover:text-black hover:shadow-md duration-500">
                        <p className=" text-center font-bold text-[20px]">Tailwid</p>
                    </div>  
                </Link>

                <Link>
                    <div className="w-[200px] py-[20px] bg-black text-white rounded-[5px] hover:bg-white hover:text-black hover:shadow-md duration-500">
                        <p className=" text-center font-bold text-[20px]">Bootstrap</p>
                    </div>  
                </Link>
            </div>
        </div>
    )
}

export default CardFramework;