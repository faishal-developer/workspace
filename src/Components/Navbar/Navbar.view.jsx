import React from 'react';
import Logobar from './Logobar/Logobar.view';
import Topbar from './Topbar/Topbar.view';

const Navbar = () => {
    return (
        <div>
            <Topbar/>
            <Logobar/>
        </div>
    );
};

export default Navbar;