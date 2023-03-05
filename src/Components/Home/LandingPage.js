import React from 'react';
import logo from "../Assets/Vector.png"
import name from "../Assets/Group.png"

const LandingPage = () => {
    return (
        <div className='h-screen'style={{
            background: "linear-gradient(0deg, rgba(241,227,205,1) 10%, rgba(255,255,255,1) 90%)"
        }}>
            <div className='h-screen flex items-center justify-center flex-col gap-5'>
                <img src={logo} alt=''/>
                <img src={name} alt=''/>
            </div>
        </div>
    );
};

export default LandingPage;