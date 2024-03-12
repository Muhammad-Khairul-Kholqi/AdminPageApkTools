import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";

const CardCategoryTools = () => {
    return (
        <div>
            <div className="flex justify-center flex-wrap gap-[30px]">
                <Link>
                    <div className="flex justify-between items-center w-[250px] px-[10px] py-[10px] border border-black rounded-[5px] hover:scale-95 duration-500">
                        <div>
                            <p className="font-bold">Button</p>
                            <p>GC Tools</p>
                        </div>
                        <div className="bg-black p-[5px] rounded-[50%]">
                            <RxArrowTopRight className="text-white" />
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className="flex justify-between items-center w-[250px] px-[10px] py-[10px] border border-black rounded-[5px] hover:scale-95 duration-500">
                        <div>
                            <p className="font-bold">Form</p>
                            <p>GC Tools</p>
                        </div>
                        <div className="bg-black p-[5px] rounded-[50%]">
                            <RxArrowTopRight className="text-white" />
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className="flex justify-between items-center w-[250px] px-[10px] py-[10px] border border-black rounded-[5px] hover:scale-95 duration-500">
                        <div>
                            <p className="font-bold">Navbar</p>
                            <p>GC Tools</p>
                        </div>
                        <div className="bg-black p-[5px] rounded-[50%]">
                            <RxArrowTopRight className="text-white" />
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className="flex justify-between items-center w-[250px] px-[10px] py-[10px] border border-black rounded-[5px] hover:scale-95 duration-500">
                        <div>
                            <p className="font-bold">Card</p>
                            <p>GC Tools</p>
                        </div>
                        <div className="bg-black p-[5px] rounded-[50%]">
                            <RxArrowTopRight className="text-white" />
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className="flex justify-between items-center w-[250px] px-[10px] py-[10px] border border-black rounded-[5px] hover:scale-95 duration-500">
                        <div>
                            <p className="font-bold">Dark Mode</p>
                            <p>GC Tools</p>
                        </div>
                        <div className="bg-black p-[5px] rounded-[50%]">
                            <RxArrowTopRight className="text-white" />
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className="flex justify-between items-center w-[250px] px-[10px] py-[10px] border border-black rounded-[5px] hover:scale-95 duration-500">
                        <div>
                            <p className="font-bold">Form Login</p>
                            <p>GC Tools</p>
                        </div>
                        <div className="bg-black p-[5px] rounded-[50%]">
                            <RxArrowTopRight className="text-white" />
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className="flex justify-between items-center w-[250px] px-[10px] py-[10px] border border-black rounded-[5px] hover:scale-95 duration-500">
                        <div>
                            <p className="font-bold">Input</p>
                            <p>GC Tools</p>
                        </div>
                        <div className="bg-black p-[5px] rounded-[50%]">
                            <RxArrowTopRight className="text-white" />
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className="flex justify-between items-center w-[250px] px-[10px] py-[10px] border border-black rounded-[5px] hover:scale-95 duration-500">
                        <div>
                            <p className="font-bold">Loaders</p>
                            <p>GC Tools</p>
                        </div>
                        <div className="bg-black p-[5px] rounded-[50%]">
                            <RxArrowTopRight className="text-white" />
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className="flex justify-between items-center w-[250px] px-[10px] py-[10px] border border-black rounded-[5px] hover:scale-95 duration-500">
                        <div>
                            <p className="font-bold">DOM Js</p>
                            <p>GC Tools</p>
                        </div>
                        <div className="bg-black p-[5px] rounded-[50%]">
                            <RxArrowTopRight className="text-white" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CardCategoryTools;
