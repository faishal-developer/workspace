import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import CustomNavbar from '../Components/navbar/navbar.view';

const CommonLayout = () => {
    return (
        <div className='container-custom'>
            {/* containing navbar  */}
            <CustomNavbar/>
            <Outlet/>
            {/* <Footer/> */}
        </div>
    );
};

export default CommonLayout;