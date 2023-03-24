import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar.view';

const CommonLayout = () => {
    return (
        <div>
            {/* layout working */}
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default CommonLayout;