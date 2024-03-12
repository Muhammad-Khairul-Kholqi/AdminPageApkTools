import { React, useState } from "react";
import { Form, Link } from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const AddDataFaq = () => {
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

    return(
        <div>
            <div className = "bg-black mt-[20px] rounded-[10px] px-[10%] py-[40px] text-center text-white">
                <h1 className = "title-header text-[40px] leading-10 font-bold font-roboto-slab tracking-[2px]" >Add Data FAQ </h1> 
            </div>

            <div className="flex flex-wrap gap-[10px] items-center justify-center mt-[20px]">
                <Link to="/data-faq">
                <p className="hover:underline">Data FAQ</p>
                </Link>

                <MdOutlineKeyboardArrowRight className="mt-[3px]" />

                <p className="text-blue-600">Add Data FAQ</p>
            </div>

            <div className="bg-gray-100 p-[20px] rounded-[10px] mt-[20px]">
                <form>
                    <div>
                        <span for="title">Title:</span>
                        <br />
                        <input 
                            className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
                            type="text" 
                            id="title" 
                            autoComplete="off"
                        />
                    </div>

                    <div className="mt-[15px]">
                        <span for="source">Name Source Of:</span>
                        <br />
                        <input 
                            className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
                            type="text" 
                            id="source" 
                            autoComplete="off"
                        />
                    </div>

                    <div className="mt-[15px]">
                        <span for="sourceL">Link Source Of:</span>
                        <br />
                        <input 
                            className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
                            type="text" 
                            id="sourceL" 
                            autoComplete="off"
                        />
                    </div>

                    <div className="mt-[15px]">
                        <label htmlFor="desc">Description:</label>
                        <ReactQuill id="desc" className="mt-[15px] bg-white"
                            value={editorContent}
                            onChange={handleChange}
                            modules={modules}
                            formats={formats}
                        />
                    </div>

                    <button className="mt-[20px] rounded-[3px] w-full bg-black hover:bg-gray-800 text-white py-[5px]" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddDataFaq;