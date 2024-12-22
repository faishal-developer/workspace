import React from 'react';
import './static/UserProfile.scss';
import myProfile from "../../assets/myProfile.png"
import { path } from '../../routes/path';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  // view user profile 
  return (
    <div className="user-profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-image">
            <img 
              src={myProfile}
              alt="User" 
            />
          </div>
          <div className="profile-info">
            <p className="designation">Designation</p>
            <h2 className="user-name">Nina Mcintire</h2>
            <p className="user-id">ID: 123</p>
          </div>
          <div className="profile-actions">
            <Link to={path.edit_profile}><button className="edit-button">Edit Profile</button></Link>
            <Link to={"/change-password"}><button className="password-button">Change Password</button></Link>
          </div>
        </div>
        <div className="profile-details">
          <div className="details-row">
            <div className="details-item">
              <label>User Name*</label>
              <p>Nina Mcintire</p>
            </div>
            <div className="details-item">
              <label>User ID*</label>
              <p>123</p>
            </div>
          </div>
          <div className="details-row">
            <div className="details-item">
              <label>Email*</label>
              <p>Email@email.com</p>
            </div>
            <div className="details-item">
              <label>Contact No*</label>
              <p>0102 02585 08847</p>
            </div>
          </div>
          <div className="details-row">
            <div className="details-item">
              <label>Your Default Company*</label>
              <p>Next Sourcing Bangladesh</p>
            </div>
            <div className="details-item">
              <label>Default Company Address*</label>
              <p>House # 217 Road # 02(New)/10(old), Dohs Mirpur, 1216</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
