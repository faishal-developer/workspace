// ProfileForm.jsx
import React, { useState } from "react";
import "./static/static.scss";
import myProfile from "../../assets/myProfile.png"

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    userName: "Nina Mcintire",
    userId: "123",
    email: "Email@email.com",
    contactNo: "0102 02585 08847",
    role: "",
    defaultCompany: "Next Sourcing Bangladesh",
    companyAddress: "House # 217 Road # 02(New)/10(old), Dohs Mirpur, 1216",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="custom-container">
      <div className="profile-form">
      <div className="profile-header">
        <div className="profile-photo">
          <img
            src={myProfile}
            alt="profile"
            className="photo"
          />
        </div>
        <button className="upload-btn">Upload Photo</button>
      </div>

      <form>
        <div className="flex">
          <div className="form-row">
            <label>User Name*</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>User ID*</label>
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex">
          <div className="form-row">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Contact No*</label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="select">
          <label>Your Role*</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Designation</option>
            <option value="Manager">Manager</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
          </select>
        </div>

        <div className="flex">
          <div className="form-row">
            <label>Your Default Company*</label>
            <input
              type="text"
              name="defaultCompany"
              value={formData.defaultCompany}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Default Company Address*</label>
            <input
              type="text"
              name="companyAddress"
              value={formData.companyAddress}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="save-btn" type="submit">
          Save Profile
        </button>
      </form>
    </div>
    </div>
  );
};

export default ProfileForm;
