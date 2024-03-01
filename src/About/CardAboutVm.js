import React from "react";

import ImgAbout from '../Assets/for-about.jpg';
import ImgVisiMisi from '../Assets/for-visi-misi.jpg'
import { Link } from "react-router-dom";

const CardAboutVm = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-center gap-[30px] py-[20px]">
                <Link>
                    <div className = "bg-white p-[10px] text-center border-solid border-[1px] border-black rounded-[5px]" >
                        <div>
                            <img className="max-w-[200px] w-full hover:scale-105 duration-700 rounded-t-[3px]" src={ImgAbout} />
                        </div>
                        <div className = "mt-[10px]" >
                            <h1>Data About Us</h1>
                        </div>
                        <div className="mt-[10px]">
                        <Link>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white py-[5px] w-full rounded-[3px]">
                                <p>See More</p>
                            </button>
                        </Link>
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className = "bg-white p-[10px] text-center border-solid border-[1px] border-black rounded-[5px]" >
                        <div>
                            <img className="max-w-[200px] w-full hover:scale-105 duration-700 rounded-t-[3px]" src={ImgVisiMisi} />
                        </div>
                        <div className = "mt-[10px]" >
                            <h1>Data Vision & Mision</h1>
                        </div>
                        <div className="mt-[10px]">
                        <Link>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white py-[5px] w-full rounded-[3px]">
                                <p>See More</p>
                            </button>
                        </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CardAboutVm;