import React from 'react';
import logo from "../../Assets/Group.png"
import mask from "../../Assets/Mask group.png"
import file from "../../Assets/fileUpload.png"

const Step6 = () => {
    return (
        <div className='h-screen w-full overflow-hidden relative' style={{
            background: "linear-gradient(0deg, rgba(241,227,205,1) 10%, rgba(255,255,255,1) 90%)"
        }}>
            <div className='w-full flex items-center justify-center'>
                <img className='mt-11 mb-5' src={logo} alt='' />
            </div>
            <div className='absolute top-0 left-[-50%]'>
                <img className="" src={mask} alt='' />
            </div>


            <div className='border-4 border-gray-200 rounded-3xl px-7 py-10 h-fit w-[356px] mx-8  bg-[#F7F7F7] absolute top-1/4 z-20'>
                <div className='border h-2 rounded-3xl w-full bg-white my-2'>
                    <div className='h-full rounded-3xl w-[80%] bg-[#CFA877]'></div>
                </div>
                <p className='font-bold text-xl'>Step 6</p>
                <h1 className='font-bold text-xl'>Upload your profile picture</h1>
                <div className='my-5'>
                    <label for="file-upload"
                        className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        {/* <svg
                            className="w-5 h-5 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5 4a3 3 0 013-3h4a3 3 0 013 3v2h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8c0-1.1.9-2 2-2h2V4zm8 6h-2V7h2v3zm-3 0H7V7h3v3z" clip-rule="evenodd" />
                        </svg> */}
                        <img className='mx-auto py-16' src={file} alt=''/>
                        {/* <span className='h-48'>Choose a file</span> */}
                    </label>
                    <input id="file-upload" type="file" className="sr-only" />
                </div>
                <button className='w-full rounded-lg bg-black text-white py-7 my-5 font-semibold'>Next</button>
            </div>
        </div>
    );
};

export default Step6;