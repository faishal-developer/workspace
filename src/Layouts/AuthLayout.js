import React from 'react';
import { Outlet } from 'react-router-dom';
import './static/static.scss'


const AuthLayout = () => {
    return (
        <div className='center'>
            {/* layout working */}
            <Outlet/>
        </div>
    );
};

export default AuthLayout;