// ProfileForm.jsx
import React, { useEffect, useState } from "react";
import "./static/static.scss";
import myProfile from "../../assets/myProfile.png"
import { useEditUser } from "../../pages/EditProfile/EditProfile.presenter";
import Spinner from "../Spinner/Spinner.view";
import InputField from "../InputFeild/InputFeild.view";
import { ReactComponent as InfoCircle } from "../../assets/svgs/InfoCircle.svg";


const ProfileForm = () => {
  // logic separation -> separation of concern principle
  // Press f12/fn+f12 on useLogin to see its implementation
  const {EditUserFormik,EditUserLoader,handleImageUpload,image,imageError} = useEditUser()

  return (
    <div className="custom-container">
      <div className="profile-form">
        {/* profile header  */}
      <div className="profile-header">
        <div className="profile-photo">
          <img
            src={image ?? myProfile}
            alt="profile"
            className="photo"
          />
        </div>
        <label className="upload-btn" htmlFor="photo">Upload Photo</label>
        <input onChange={handleImageUpload} id="photo" className="d-none" type={'file'}/>
      </div>
      {/* if any unwanted image uploads the error will be shown */}
      {imageError?(
        <span className="input-error error-message">
          <InfoCircle fill="" /> {imageError}
        </span>
      ):''}

      {/* edit user form  */}
      <form onSubmit={EditUserFormik.handleSubmit}>
        <div className="flex">
          <div className="form-row">
            <label>User Name*</label>
            <InputField
              placeHolder={'Type here'}
              textType="text"
              inputName="userName"
              asterisk={true}
              whiteSpace={false}
              onBlur={EditUserFormik.handleBlur}
              value={EditUserFormik.values.userName}
              onchangeCallback={EditUserFormik.handleChange}
              inputClassName={EditUserFormik.touched.userName && EditUserFormik.errors.userName ? " is-invalid" : ""}
              requiredMessage={EditUserFormik.touched.userName && EditUserFormik.errors.userName}
              requiredMessageLabel={EditUserFormik.touched.userName || EditUserFormik.isSubmitting ? EditUserFormik.errors.userName : ""}
            />
        
          </div>

          <div className="form-row">
            <label>User ID*</label>
            <InputField
              placeHolder={'Type here'}
              textType="text"
              inputName="userId"
              asterisk={true}
              whiteSpace={false}
              onBlur={EditUserFormik.handleBlur}
              value={EditUserFormik.values.userId}
              onchangeCallback={EditUserFormik.handleChange}
              inputClassName={EditUserFormik.touched.userId && EditUserFormik.errors.userId ? " is-invalid" : ""}
              requiredMessage={EditUserFormik.touched.userId && EditUserFormik.errors.userId}
              requiredMessageLabel={EditUserFormik.touched.userId || EditUserFormik.isSubmitting ? EditUserFormik.errors.userId : ""}
            />
          </div>
        </div>

        <div className="flex">
          <div className="form-row">
            <label>Email*</label>
            <InputField
              placeHolder={'Type here'}
              textType="email"
              inputName="email"
              asterisk={true}
              whiteSpace={false}
              onBlur={EditUserFormik.handleBlur}
              value={EditUserFormik.values.email}
              onchangeCallback={EditUserFormik.handleChange}
              inputClassName={EditUserFormik.touched.email && EditUserFormik.errors.email ? " is-invalid" : ""}
              requiredMessage={EditUserFormik.touched.email && EditUserFormik.errors.email}
              requiredMessageLabel={EditUserFormik.touched.email || EditUserFormik.isSubmitting ? EditUserFormik.errors.email : ""}
            />
          </div>

          <div className="form-row">
            <label>Contact No*</label>
            <InputField
              placeHolder={'Type here'}
              textType="text"
              inputName="contact"
              asterisk={true}
              whiteSpace={false}
              onBlur={EditUserFormik.handleBlur}
              value={EditUserFormik.values.contact}
              onchangeCallback={EditUserFormik.handleChange}
              inputClassName={EditUserFormik.touched.contact && EditUserFormik.errors.contact ? " is-invalid" : ""}
              requiredMessage={EditUserFormik.touched.contact && EditUserFormik.errors.contact}
              requiredMessageLabel={EditUserFormik.touched.contact || EditUserFormik.isSubmitting ? EditUserFormik.errors.contact : ""}
            />
          </div>
        </div>

        <div className="select">
          <label>Your Role*</label>
          <select name="role" >
            {/* <option value="">Designation</option> */}
            <option value="Developer">Developer</option>
            <option value="Manager">Manager</option>
            <option value="Designer">Designer</option>
          </select>
        </div>

        <div className="flex">
          <div className="form-row">
            <label>Your Default Company*</label>
            <InputField
              placeHolder={'Type here'}
              textType="text"
              inputName="company"
              asterisk={true}
              whiteSpace={false}
              onBlur={EditUserFormik.handleBlur}
              value={EditUserFormik.values.company}
              onchangeCallback={EditUserFormik.handleChange}
              inputClassName={EditUserFormik.touched.company && EditUserFormik.errors.company ? " is-invalid" : ""}
              requiredMessage={EditUserFormik.touched.company && EditUserFormik.errors.company}
              requiredMessageLabel={EditUserFormik.touched.company || EditUserFormik.isSubmitting ? EditUserFormik.errors.company : ""}
            />
          </div>

          <div className="form-row">
            <label>Default Company Address*</label>
            <InputField
              placeHolder={'Type here'}
              textType="text"
              inputName="companyAddress"
              asterisk={true}
              whiteSpace={false}
              onBlur={EditUserFormik.handleBlur}
              value={EditUserFormik.values.companyAddress}
              onchangeCallback={EditUserFormik.handleChange}
              inputClassName={EditUserFormik.touched.companyAddress && EditUserFormik.errors.companyAddress ? " is-invalid" : ""}
              requiredMessage={EditUserFormik.touched.companyAddress && EditUserFormik.errors.companyAddress}
              requiredMessageLabel={EditUserFormik.touched.companyAddress || EditUserFormik.isSubmitting ? EditUserFormik.errors.companyAddress : ""}
            />
          </div>
        </div>

        <button disabled={EditUserLoader} className="save-btn" type="submit">
          <Spinner isLoading={EditUserLoader}/>
          Save Profile
        </button>
      </form>
    </div>
    </div>
  );
};

export default ProfileForm;
