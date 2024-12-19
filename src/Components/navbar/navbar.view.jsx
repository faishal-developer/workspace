import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { path } from '../../routes/path';
import useNavbar from './navbar.logic';
import './static/navbar.scss'
import React from 'react';
import './static/navbar.scss';

const CustomNavbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <h1 className="navbar-title">
          NEXT <span>SOURCING</span>
        </h1>
        <ul className="navbar-links">
          <li className="navbar-link active">Dashboard</li>
          <li className="navbar-link">Sample Management</li>
          <li className="navbar-link">Report</li>
          <li className="navbar-link">Settings</li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="navbar-profile">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="navbar-profile-image"
          />
          <span className="navbar-profile-name">Profile ▼</span>
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
