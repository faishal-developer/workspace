import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar.view';
import CartIcon from '../Components/cartIcon/cartIcon.view';

const CommonLayout = () => {
    return (
        <div>
            {/* layout working */}
            <Navbar/>
            <div className='fixed-cart'>
              <CartIcon productNum={30} />  
            </div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default CommonLayout;