import React from 'react';
import logo from "../../Assets/Group.png"
import arrow from "../../Assets/arrowIcon.png"

const SignUp = () => {
    return (
        <div className='h-screen overflow-hidden' style={{
            background: "linear-gradient(0deg, rgba(241,227,205,1) 10%, rgba(255,255,255,1) 90%)"
        }}>
            <div className='w-full flex items-center justify-center'>
                <img className='mt-11 mb-5' src={logo} alt='' />
            </div>
            <div>
                <img className='ml-10 my-10' src={arrow} alt='' />
            </div>
            <div className='my-32 text-center'>
                <p className='text-4xl font-bold text-[#CFA877]'>Create Account</p>
                <p className=' text-lg text-gray-500 my-4'>Book Your First Shoot Now</p>
            </div>

            <div className='mx-4 '>
                <input type='text'
                    className='w-full my-5 input border border-gray-500 rounded-xl p-2'
                    placeholder='First Name' />
                <input type='text'
                    className='w-full input border border-gray-500 rounded-xl p-2'
                    placeholder='Last Name' />
                <input type='email'
                    className='w-full my-5 input border border-gray-500 rounded-xl p-2'
                    placeholder='Email adress' />
                <input type='password'
                    className='w-full input border border-gray-500 rounded-xl p-2'
                    placeholder='Password' />
                <input type='password'
                    className='w-full my-5 input border border-gray-500 rounded-xl p-2'
                    placeholder='Re-enter Password' />

            </div>
            <div className='felx-1 flex-col mx-4'>
                <button className='w-full rounded-3xl bg-white text-[#CFA877] py-3 font-semibold'>Sign Up</button>
            </div>


        </div>
    );
};

export default SignUp;