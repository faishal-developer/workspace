import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar.view';

const CommonLayout = () => {
    return (
        <div>
            {/* layout working */}
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default CommonLayout;