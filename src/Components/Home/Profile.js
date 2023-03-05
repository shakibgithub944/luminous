import React from 'react';
import hamburg from '../Assets/balckham.png'
import logo from '../Assets/Group.png'
import arrow from '../Assets/arrowIcon.png'

const Profile = () => {
    return (
        <div>
            <div className='flex items-center justify-around my-8'>
                <img className='' src={hamburg} alt='' />
                <img className='' src={logo} alt='' />
                <div></div>
            </div>
            <div className='flex items-center justify-around my-10'>
                <img className='' src={arrow} alt='' />
                <div><button className='border-4 px-3 py-1 rounded-lg font-semibold'>My Profile</button></div>
                <div className='w-8 h-8 rounded-[50%] bg-black text-white text-center flex items-center justify-center'><p className='font-bold'>?</p></div>
            </div>


            <div className='flex items-center justify-around mt-8'>
                <div className='h-[2px] w-20 bg-slate-500'></div>
                <p className='font-bold mx-2 text-2xl'>Vania bardon</p>
                <div className='h-[2px] w-20 bg-slate-500'></div>
            </div>
            <p className='text-center text-gray-500'>Los Angeles, CA</p>

        </div>
    );
};

export default Profile;