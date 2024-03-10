import { React, useState } from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const EditVisionMision = () => {
  const [editorContent, setEditorContent] = useState('');
  const handleChange = (content) => {
    setEditorContent(content);
  };

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{
        color: []
      }],
      [{
        list: 'ordered'
      }, {
        list: 'bullet'
      }],
      ['link'],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    'bold',
    'italic',
    'underline',
    'color',
    'list',
    'bullet',
    'link',
  ];

  return (
    <div>
      <div className="bg-black mt-[20px] rounded-[10px] px-[10%] py-[50px] text-center text-white"
        data-aos="flip-down" data-aos-duration="1300">
        <h1 className="title-header text-[40px] leading-10 font-bold font-roboto-slab tracking-[2px]"> Edit Data Visi Misi </h1>
      </div>
      <div className="flex flex-wrap gap-[10px] items-center justify-center mt-[20px]">
        <Link to="/data-visi-misi">
          <p className="hover:underline">Data Visi Misi</p>
        </Link>

        <MdOutlineKeyboardArrowRight className="mt-[3px]" />

        <p className="text-blue-600">Edit Data Visi Misi</p>
      </div>

      <div className="bg-gray-100 p-[20px] rounded-[10px] mt-[20px]">
        <h1 className="text-center font-bold text-[20px] mb-[20px]">Edit Data Visi Misi</h1>
        <form>
          <div className="mt-[15px]">
            <label htmlFor="desc">vision:</label>
            <ReactQuill id="desc" className="mt-[15px] bg-white"
              value={editorContent}
              onChange={handleChange}
              modules={modules}
              formats={formats}
            />
          </div>
          <div className="mt-[15px]">
            <label htmlFor="desc">Mission:</label>
            <ReactQuill id="desc" className="mt-[15px] bg-white"
              value={editorContent}
              onChange={handleChange}
              modules={modules}
              formats={formats}
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

export default EditVisionMision;
