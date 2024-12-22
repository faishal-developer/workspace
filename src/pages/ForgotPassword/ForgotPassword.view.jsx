import React from 'react';
import './static/static.scss';
import { pagetitle } from '../../helper/CommonFunction';
import { useOtp } from './ForgotPassword.presenter';
import InputField from '../../Components/InputFeild/InputFeild.view';
import Spinner from '../../Components/Spinner/Spinner.view';

const OtpForm = (props) => {
  // title is too important for onpage seo
  pagetitle(props.pageTitle);
  // logic separation -> separation of concern principle
  // Press f12/fn+f12 on useLogin to see its implementation  
  const {OtpFormik,OtpLoader}=useOtp();
  
  return (
    <div className="otp-form-container">
      <div className="otp-form-card">
        <h1 className="otp-form-title">
          NEXT <span>SOURCING</span>
        </h1>
        <p className="otp-form-description">
          Please enter your registered email or username<br/> to receive a secure code.
        </p>
        <form className='left' onSubmit={OtpFormik.handleSubmit}>
          {/* <input
            type="text"OtpFormik
            
            placeholder="Email/Username"
          /> */}
          <InputField
              placeHolder={'Email/Username'}
              textType="text"
              inputName="email"
              asterisk={true}
              whiteSpace={false}
              onBlur={OtpFormik.handleBlur}
              value={OtpFormik.values.email}
              onchangeCallback={OtpFormik.handleChange}
              inputClassName={OtpFormik.touched.email && OtpFormik.errors.email ? " is-invalid otp-form-input" : "otp-form-input"}
              requiredMessage={OtpFormik.touched.email && OtpFormik.errors.email}
              requiredMessageLabel={OtpFormik.touched.email || OtpFormik.isSubmitting ? OtpFormik.errors.email : ""}
          />
          <button className="otp-form-button">
            <Spinner isLoading={OtpLoader}/>
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpForm;
