import React from 'react';
import logo from "../../Assets/Group.png"
import mask from "../../Assets/Mask group.png"

const Step1 = () => {
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


            <div className='border-4 border-gray-200 rounded-3xl px-7 py-10 h-fit mx-8  bg-[#F7F7F7] absolute top-1/4 z-20'>
                <div className='border h-2 rounded-3xl w-full bg-white my-2'></div>
                <p className='font-bold text-xl'>Step 1</p>
                <h1 className='font-bold text-2xl'>Who are you ?</h1>
                <input type='text'
                    className='w-full my-5 input border rounded-xl p-2'
                    placeholder='Name' />
                <input type='email'
                    className='w-full mb-5 input border rounded-xl p-2'
                    placeholder='email' />
                <input type='text'
                    className='w-full input border rounded-xl p-2'
                    placeholder='Location' />
                    <button className='w-full rounded-lg bg-black text-white py-7 my-5 font-semibold'>Next</button>
            </div>
        </div>
    );
};

export default Step1;