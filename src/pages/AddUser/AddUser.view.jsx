import React, { useState } from 'react';
import './static/static.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconList } from '../../Components/FontAwesome/FontAwesome';
import tick from "../../assets/svgs/tick.png"
import { pagetitle } from '../../helper/CommonFunction';
import { Link, useNavigate } from 'react-router-dom';
import { useAddUser } from './AddUser.presenter';
import InputField from '../../Components/InputFeild/InputFeild.view';
import Spinner from '../../Components/Spinner/Spinner.view';
import { path } from '../../routes/path';

const AddUserForm = (props) => {
  const navigate=useNavigate();
  // title is too important for onpage seo
  pagetitle(props.pageTitle);
  // logic separation -> separation of concern principle
  // Press f12/fn+f12 on useLogin to see its implementation
  const {AddUserFormik,AddUserLoader,success,values} = useAddUser()
  
  return (
    <div className='main-container'>
      <div className='c-container'>
      <button onClick={()=>navigate(-1)} className="back-button">
        <FontAwesomeIcon className='icon' icon={iconList.left}/>
         Back
      </button>
      {success?(
          <div className="success-message-container">
          <div className="success-content">
            <div className="success-icon">
              <img className='img' src={tick}/>
            </div>
            <p className="success-title">New User Created</p>
            <p className="user-name">{values.userName}</p>
            <button onClick={()=>navigate(path.dashboard+"?tab=Teams")} className="view-button">
              <Link to={path.dashboard+"?tab=Teams"}>View</Link>
            </button>
          </div>
        </div>
      ):(
        <div className="add-user-form-container">
        <h1 className="form-title">Add User</h1>
        <form onSubmit={AddUserFormik.handleSubmit} className="add-user-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="userName">User Name*</label>
              {/* <input type="text" id="userName" placeholder="Type name" /> */}
              <InputField
                placeHolder={'Type name'}
                textType="text"
                inputName="userName"
                asterisk={true}
                whiteSpace={false}
                onBlur={AddUserFormik.handleBlur}
                value={AddUserFormik.values.userName}
                onchangeCallback={AddUserFormik.handleChange}
                inputClassName={AddUserFormik.touched.userName && AddUserFormik.errors.userName ? " is-invalid" : ""}
                requiredMessage={AddUserFormik.touched.userName && AddUserFormik.errors.userName}
                requiredMessageLabel={AddUserFormik.touched.userName || AddUserFormik.isSubmitting ? AddUserFormik.errors.userName : ""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="userId">User ID*</label>
              {/* <input type="text" id="userId" placeholder="ID here" /> */}
              <InputField
                placeHolder={"Type here"}
                textType="text"
                inputName="userId"
                asterisk={true}
                whiteSpace={false}
                onBlur={AddUserFormik.handleBlur}
                value={AddUserFormik.values.userId}
                onchangeCallback={AddUserFormik.handleChange}
                inputClassName={AddUserFormik.touched.userId && AddUserFormik.errors.userId ? " is-invalid" : ""}
                requiredMessage={AddUserFormik.touched.userId && AddUserFormik.errors.userId}
                requiredMessageLabel={AddUserFormik.touched.userId || AddUserFormik.isSubmitting ? AddUserFormik.errors.userId : ""}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              {/* <input type="email" id="email" placeholder="Type Here" /> */}
              <InputField
                placeHolder={'Type Here'}
                textType="email"
                inputName="email"
                asterisk={true}
                whiteSpace={false}
                onBlur={AddUserFormik.handleBlur}
                value={AddUserFormik.values.email}
                onchangeCallback={AddUserFormik.handleChange}
                inputClassName={AddUserFormik.touched.email && AddUserFormik.errors.email ? " is-invalid" : ""}
                requiredMessage={AddUserFormik.touched.email && AddUserFormik.errors.email}
                requiredMessageLabel={AddUserFormik.touched.email || AddUserFormik.isSubmitting ? AddUserFormik.errors.email : ""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactNo">Contact No*</label>
              {/* <input type="text" id="contactNo" placeholder="Local" /> */}
              <InputField
                placeHolder={'Local'}
                textType="text"
                inputName="contact"
                asterisk={true}
                whiteSpace={false}
                onBlur={AddUserFormik.handleBlur}
                value={AddUserFormik.values.contact}
                onchangeCallback={AddUserFormik.handleChange}
                inputClassName={AddUserFormik.touched.contact && AddUserFormik.errors.contact ? " is-invalid" : ""}
                requiredMessage={AddUserFormik.touched.contact && AddUserFormik.errors.contact}
                requiredMessageLabel={AddUserFormik.touched.contact || AddUserFormik.isSubmitting ? AddUserFormik.errors.contact : ""}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password*</label>
              {/* <input type="password" id="password" placeholder="Type here" /> */}
              <InputField
                placeHolder={"Type here"}
                textType="password"
                inputName="password"
                asterisk={true}
                icons={[iconList.eyeClose,iconList.eyeOpen]}
                whiteSpace={false}
                onBlur={AddUserFormik.handleBlur}
                value={AddUserFormik.values.password}
                onchangeCallback={AddUserFormik.handleChange}
                inputClassName={AddUserFormik.touched.password && AddUserFormik.errors.password ? " is-invalid" : ""}
                requiredMessage={AddUserFormik.touched.password && AddUserFormik.errors.password}
                requiredMessageLabel={AddUserFormik.touched.password || AddUserFormik.isSubmitting ? AddUserFormik.errors.password : ""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password*</label>
              {/* <input type="password" id="confirmPassword" placeholder="Type here" /> */}
              <InputField
                placeHolder={"Type here"}
                textType="password"
                inputName="confirmPassword"
                asterisk={true}
                icons={[iconList.eyeClose,iconList.eyeOpen]}
                whiteSpace={false}
                onBlur={AddUserFormik.handleBlur}
                value={AddUserFormik.values.confirmPassword}
                onchangeCallback={AddUserFormik.handleChange}
                inputClassName={AddUserFormik.touched.confirmPassword && AddUserFormik.errors.confirmPassword ? " is-invalid" : ""}
                requiredMessage={AddUserFormik.touched.confirmPassword && AddUserFormik.errors.confirmPassword}
                requiredMessageLabel={AddUserFormik.touched.confirmPassword || AddUserFormik.isSubmitting ? AddUserFormik.errors.confirmPassword : ""}
              />
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
              
              <InputField
                placeHolder={"Type here"}
                textType="text"
                inputName="company"
                asterisk={true}
                whiteSpace={false}
                onBlur={AddUserFormik.handleBlur}
                value={AddUserFormik.values.company}
                onchangeCallback={AddUserFormik.handleChange}
                inputClassName={AddUserFormik.touched.company && AddUserFormik.errors.company ? " is-invalid" : ""}
                requiredMessage={AddUserFormik.touched.company && AddUserFormik.errors.company}
                requiredMessageLabel={AddUserFormik.touched.company || AddUserFormik.isSubmitting ? AddUserFormik.errors.company : ""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="defaultAddress">Default Company Address*</label>
              
              <InputField
                placeHolder={"Type here"}
                textType="text"
                inputName="companyAddress"
                asterisk={true}
                whiteSpace={false}
                onBlur={AddUserFormik.handleBlur}
                value={AddUserFormik.values.companyAddress}
                onchangeCallback={AddUserFormik.handleChange}
                inputClassName={AddUserFormik.touched.companyAddress && AddUserFormik.errors.companyAddress ? " is-invalid" : ""}
                requiredMessage={AddUserFormik.touched.companyAddress && AddUserFormik.errors.companyAddress}
                requiredMessageLabel={AddUserFormik.touched.companyAddress || AddUserFormik.isSubmitting ? AddUserFormik.errors.companyAddress : ""}
              />
            </div>
          </div>
          <button disabled={AddUserLoader} type="submit" className="create-user-button">
            <Spinner isLoading={AddUserLoader}/>
            Create User
          </button>
        </form>
      </div>
      )}
      
      
    </div>
    </div>
  );
};

export default AddUserForm;
