import React, { useState } from 'react';
import './static/static.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconList } from '../../Components/FontAwesome/FontAwesome';
import tick from "../../assets/svgs/tick.png"
import { pagetitle } from '../../helper/CommonFunction';

const AddUserForm = (props) => {
  const [isSuccess,setIsSuccess]=useState(false);
  // title is too important for onpage seo
  pagetitle(props.pageTitle);
  
  return (
    <div className='c-container'>
      <button className="back-button">
        <FontAwesomeIcon className='icon' icon={iconList.left}/>
         Back
      </button>
      {isSuccess?(
          <div className="success-message-container">
          <div className="success-content">
            <div className="success-icon">
              <img className='img' src={tick}/>
            </div>
            <p className="success-title">New User Created</p>
            <p className="user-name">Mr. Jhon Doe</p>
            <button className="view-button">View</button>
          </div>
        </div>
      ):(
        <div className="add-user-form-container">
        <h1 className="form-title">Add User</h1>
        <form className="add-user-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="userName">User Name*</label>
              <input type="text" id="userName" placeholder="Type name" />
            </div>
            <div className="form-group">
              <label htmlFor="userId">User ID*</label>
              <input type="text" id="userId" placeholder="ID here" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" placeholder="Type Here" />
            </div>
            <div className="form-group">
              <label htmlFor="contactNo">Contact No*</label>
              <input type="text" id="contactNo" placeholder="Local" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password*</label>
              <input type="password" id="password" placeholder="Type here" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password*</label>
              <input type="password" id="confirmPassword" placeholder="Type here" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Select Access</label>
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" /> Postman Access
                </label>
                <label>
                  <input type="checkbox" /> Manager Access
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="assignTeam">Assign Team</label>
              <select id="assignTeam">
                <option value="">Select Team</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="defaultCompany">Your Default Company*</label>
              <input
                type="text"
                id="defaultCompany"
                placeholder="Next Sourcing Bangladesh"
              />
            </div>
            <div className="form-group">
              <label htmlFor="defaultAddress">Default Company Address*</label>
              <input
                type="text"
                id="defaultAddress"
                placeholder="House #217 Road #02(New)/10(Old), Dohs Mirpur, 1216"
              />
            </div>
          </div>
          <button type="submit" className="create-user-button">
            Create User
          </button>
        </form>
      </div>
      )}
      
      
    </div>
  );
};

export default AddUserForm;
