import React from 'react';
import './static/static.scss';
import { pagetitle } from '../../helper/CommonFunction';

const OtpForm = (props) => {
  // title is too important for onpage seo
  pagetitle(props.pageTitle);
  
  return (
    <div className="otp-form-container">
      <div className="otp-form-card">
        <h1 className="otp-form-title">
          NEXT <span>SOURCING</span>
        </h1>
        <p className="otp-form-description">
          Please enter your registered email or username<br/> to receive a secure code.
        </p>
        <input
          type="text"
          className="otp-form-input"
          placeholder="Email/Username"
        />
        <button className="otp-form-button">Send OTP</button>
      </div>
    </div>
  );
};

export default OtpForm;
