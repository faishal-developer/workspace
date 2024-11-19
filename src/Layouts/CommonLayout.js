import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const CommonLayout = () => {
    return (
        <div>
            {/* layout working */}
            {/* <Navbar/> */}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default CommonLayout;