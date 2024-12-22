// LoginForm.jsx
import React, { useState } from "react";
import "./static/LoginForm.scss";
import FontAwesome, { iconList } from "../FontAwesome/FontAwesome";
import { Link } from "react-router-dom";
import { path } from "../../routes/path";
import InputField from "../InputFeild/InputFeild.view";
import { useLogin } from "../../pages/Login/Login.logic";
import Spinner from "../Spinner/Spinner.view";

const LoginForm = () => {
  // logic separation -> separation of concern principle
  // Press f12/fn+f12 on useLogin to see its implementation
  const {loginFormik,loginLoader} = useLogin();

  return (
    <div className="login-form">
      <div className="brand">
        <h1>
          <span className="brand-bold">NEXT</span> SOURCING
        </h1>
        <p>Sign in to start your session</p>
      </div>
      <form onSubmit={loginFormik.handleSubmit}>
        <div className="input-group">
          <InputField
              placeHolder={'Email'}
              textType="email"
              inputName="email"
              asterisk={true}
              icon={<FontAwesome icon={iconList.Envelope}/>}
              whiteSpace={false}
              onBlur={loginFormik.handleBlur}
              value={loginFormik.values.email}
              onchangeCallback={loginFormik.handleChange}
              inputClassName={loginFormik.touched.email && loginFormik.errors.email ? " is-invalid" : ""}
              requiredMessage={loginFormik.touched.email && loginFormik.errors.email}
              requiredMessageLabel={loginFormik.touched.email || loginFormik.isSubmitting ? loginFormik.errors.email : ""}
          />
        </div>

        <div className="input-group">
          <InputField
              placeHolder={"Password"}
              textType="password"
              inputName="password"
              asterisk={true}
              whiteSpace={false}
              onBlur={loginFormik.handleBlur}
              value={loginFormik.values.password}
              onchangeCallback={loginFormik.handleChange}
              inputClassName={loginFormik.touched.password && loginFormik.errors.password ? " is-invalid" : ""}
              requiredMessage={loginFormik.touched.password && loginFormik.errors.password}
              requiredMessageLabel={loginFormik.touched.password || loginFormik.isSubmitting ? loginFormik.errors.password : ""}
          />
        </div>

        <div className="options">
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              // checked={formData.rememberMe}
              // onChange={handleChange}
            />
            <span className="remember">Remember Me</span>
          </label>
          <button disabled={loginLoader} type="submit" className="signin-btn">
            <Spinner isLoading={loginLoader}/>
            Sign In
          </button>
        </div>
      </form>
      <Link to={path.forget_password} className="forgot-password">
        I forgot my password
      </Link>
        <span className="hr"></span>

    </div>
  );
};

export default LoginForm;
