import './static/navbar.scss'
import React, { useEffect, useState } from 'react';
import './static/navbar.scss';
import profile from "../../assets/profile.png"
import { Link, useLocation } from 'react-router-dom';
import { path } from '../../routes/path';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome';
import CustomOffcanvas from '../Offcanvas/Offcanvas.view';

const CustomNavbar = () => {
  const [showProfile,setShowProfile]=useState(false);
  const location = useLocation();
  const [show,setShow]=useState(false);

  
  return (
    <div className='nav-container'>
      <div className="navbar-container">
        <div className="navbar-left">
          <h1 className="navbar-title">
            NEXT <span>SOURCING</span>
          </h1>
          <ul className="navbar-links">
            <li className={(location.pathname.includes(path.dashboard)?"active ":"")+" navbar-link "}>
              <Link to={path.dashboard}>Dashboard</Link>
            </li>
            <li className={(location.pathname.includes(path.add_user)?"active ":"")+" navbar-link "}>
              <Link to={path.add_user}>Add User</Link>
            </li>
            <li className="navbar-link">Report</li>
            <li className="navbar-link">Settings</li>
          </ul>
        </div>
        <div className="navbar-right relative">
          <div className="navbar-profile" onClick={()=>setShowProfile(!showProfile)}>
            <img
              src={profile}
              alt="Profile"
              className="navbar-profile-image"
            />
            <span className="navbar-profile-name">
              Profile ▼
            </span>
            <div className={showProfile?"profile-tooltip":"hidden"}>
              <div><Link to={path.my_profile}>My Profile</Link></div>
              <div><Link to={path.edit_profile}>Edit Profile</Link></div>
              <div onClick={()=>localStorage.removeItem('user')}><Link to={path.login}>Log out</Link></div>
            </div>
          </div>
        </div>
        <div onClick={()=>setShow(!show)} className='menu-icon'>
          <FontAwesome icon={iconList.menu}/>
        </div>
      </div>
      <CustomOffcanvas
        show={show}
        handleClose={()=>setShow(false)}
      >
        <ul className="navbar-links-mini">
            <li className={(location.pathname.includes(path.dashboard)?"active ":"")+" navbar-link "}>
              <Link to={path.dashboard}>Dashboard</Link>
            </li>
            <li className={(location.pathname.includes(path.add_user)?"active ":"")+" navbar-link "}>
              <Link to={path.add_user}>Add User</Link>
            </li>
            <li className="navbar-link">Report</li>
            <li className="navbar-link">Settings</li>
          </ul>
          <div className="navbar-profile-mini" onClick={()=>setShowProfile(!showProfile)}>
            <img
              src={profile}
              alt="Profile"
              className="navbar-profile-image"
            />
            <span className="navbar-profile-name">
              Profile ▼
            </span>
            <div className={showProfile?"profile-tooltip":"hidden"}>
              <div><Link to={path.my_profile}>My Profile</Link></div>
              <div><Link to={path.edit_profile}>Edit Profile</Link></div>
              <div onClick={()=>localStorage.removeItem('user')}><Link to={path.login}>Log out</Link></div>
            </div>
          </div>
      </CustomOffcanvas>
    </div>
  );
};

export default CustomNavbar;
