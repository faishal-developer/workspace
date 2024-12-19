// UserProfile.jsx
import React from 'react';
import './static/UserProfile.scss';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src="profile-pic-url" alt="Profile" className="profile-pic" />
        <div className="designation">
          <h2>Nina Mcintire</h2>
          <p>ID: 123</p>
        </div>
      </div>
      <div className="profile-details">
        <div className="detail">
          <label>User Name*</label>
          <p>Nina Mcintire</p>
        </div>
        <div className="detail">
          <label>User ID*</label>
          <p>123</p>
        </div>
        <div className="detail">
          <label>Email*</label>
          <p>Email@email.com</p>
        </div>
        <div className="detail">
          <label>Contact No*</label>
          <p>0102 02585 08847</p>
        </div>
        <div className="detail">
          <label>Your Default Company*</label>
          <p>Next Sourcing Bangladesh</p>
        </div>
        <div className="detail">
          <label>Default Company Address*</label>
          <p>House # 217 Road # 02(New)/10(old), Dohs Mirpur, 1216</p>
        </div>
      </div>
      <div className="profile-actions">
        <button className="edit-profile">Edit Profile</button>
        <button className="change-password">Change Password</button>
      </div>
    </div>
  );
};

export default UserProfile;
