// LoginForm.jsx
import React, { useState } from "react";
import "./static/LoginForm.scss";
import FontAwesome, { iconList } from "../FontAwesome/FontAwesome";
import { Link } from "react-router-dom";
import { path } from "../../routes/path";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="login-form">
      <div className="brand">
        <h1>
          <span className="brand-bold">NEXT</span> SOURCING
        </h1>
        <p>Sign in to start your session</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FontAwesome icon={iconList.Envelope}/>
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <FontAwesome icon={iconList.lock}/>
        </div>

        <div className="options">
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <span className="remember">Remember Me</span>
          </label>
          <button type="submit" className="signin-btn">
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
