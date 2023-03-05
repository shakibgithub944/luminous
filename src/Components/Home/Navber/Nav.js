import React, { useState } from 'react';
import hamburg from '../../Assets/hambarg.png'
import Step1 from '../SignUp/Step1';


const Nav = () => {
    const [SidebarOpen, setSirdberOpen] = useState(false);

    return (
        <div className={`h-screen w-full overflow-hidden relative ${SidebarOpen ? 'bg-black' : 'bg-white'}`}>
            {/* <img className='absolute' src={mask} alt=''/> */}
            <img onClick={() => setSirdberOpen(!SidebarOpen)} className='m-10' src={hamburg} alt='' />
            <Step1/>

        </div>
    );
};

export default Nav;