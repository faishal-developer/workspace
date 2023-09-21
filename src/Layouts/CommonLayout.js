import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar.view';
import CartIcon from '../Components/cartIcon/cartIcon.view';
import { useSelector } from 'react-redux';

const CommonLayout = () => {
    const {products:cart} = useSelector(state=>state.sampleCartSlice);
    return (
        <div>
            {/* layout working */}
            <Navbar/>
            <div className='fixed-cart'>
              <CartIcon productNum={cart?.length || 0} />  
            </div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default CommonLayout;