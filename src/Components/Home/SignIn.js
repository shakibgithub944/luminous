import React from 'react';
import logo from "../Assets/Group.png"
import mask from "../Assets/Mask group.png"
import face from "../Assets/Face_ID 1.png"

const SignIn = () => {
    return (
        <div className='h-screen overflow-hidden' style={{
            background: "linear-gradient(0deg, rgba(241,227,205,1) 10%, rgba(255,255,255,1) 90%)"
        }}>
            <div className='w-full flex items-center justify-center flex-col'>
                <img className='mt-11 mb-5' src={logo} alt='' />
                <div className='relative'>
                    <img src={mask} alt='' />
                    <div className='absolute top-[30%] right-16'>
                        <p className='font-bold text-4xl text-center'>On Demand <br /> Videography <br /> & Photography</p>
                        <p className='text-center text-lg my-5 text-gray-500'>Apply to be a <br /> Beige Producer Today!</p>
                    </div>
                </div>
            </div>

            <div className='my-14 flex-1 mx-4'>
                <input type='email'
                    className='w-full my-5 input border border-gray-500 rounded-xl p-2'
                    placeholder='Email adress' />
                <input type='password'
                    className='w-full input border border-gray-500 rounded-xl p-2'
                    placeholder='Password' />
                <i className='ml-4 text-gray-500'>Forgot password ?</i>

                <div className='flex-1 flex-col'>
                    <div className=' flex my-4'>
                        <button className='w-4/5 rounded-3xl bg-black text-white py-3 font-semibold'>Sign in</button>
                        <img className='bg-black rounded-xl p-1 ml-5' src={face} alt=''/>
                    </div>
                    <button className='w-full rounded-3xl bg-white text-[#CFA877] py-3 font-semibold'>Don’t have an account? Sign Up</button>
                </div>

            </div>

        </div>
    );
};

export default SignIn;