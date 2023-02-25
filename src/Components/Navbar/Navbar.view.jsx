import React from 'react';
import Logobar from './Logobar/Logobar.view';
import Topbar from './Topbar/Topbar.view';
import "./static/Navbar.scss"

const Navbar = () => {
    return (
        <div className='Navbar'>
            <Topbar/>
            <Logobar/>
        </div>
    );
};

export default Navbar;