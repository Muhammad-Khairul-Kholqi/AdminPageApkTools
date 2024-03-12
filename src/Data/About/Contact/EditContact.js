import { React, useState } from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const EditContact = () => {
  return (
    <div>
      <div className="bg-black mt-[20px] rounded-[10px] px-[10%] py-[50px] text-center text-white"
        data-aos="flip-down" data-aos-duration="1300">
        <h1 className="title-header text-[40px] leading-10 font-bold font-roboto-slab tracking-[2px]"> Edit Data Contact </h1>
      </div>
      <div className="flex flex-wrap gap-[10px] items-center justify-center mt-[20px]">
        <Link to="/data-contact">
          <p className="hover:underline">Data Contact</p>
        </Link>

        <MdOutlineKeyboardArrowRight className="mt-[3px]" />

        <p className="text-blue-600">Edit Data Contact</p>
      </div>

      <div className="bg-gray-100 p-[20px] rounded-[10px] mt-[20px]">
        <h1 className="text-center font-bold text-[20px] mb-[20px]">Edit Data Contact</h1>
        <form>
          <div>
            <span for="ig">Link Ig:</span>
            <br />
            <input 
              className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
              type="text" 
              id="ig" 
              autoComplete="off"
            />
          </div>

          <div className="mt-[15px]">
            <span for="gmail">Link Gmail:</span>
            <br />
            <input 
              className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
              type="text" 
              id="gmail" 
              autoComplete="off"
            />
          </div>

          <div className="mt-[15px]">
            <span for="fb">Link Fb:</span>
            <br />
            <input 
              className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
              type="text" 
              id="fb" 
              autoComplete="off"
            />
          </div>

          <div className="mt-[15px]">
            <span for="tt">Link TikTok:</span>
            <br />
            <input 
              className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
              type="text" 
              id="tt" 
              autoComplete="off"
            />
          </div>
          <button className="mt-[20px] rounded-[3px] w-full bg-black hover:bg-gray-800 text-white py-[5px]" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditContact;
