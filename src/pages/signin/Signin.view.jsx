import React, { useState } from "react";
import "./static/SignInForm.scss";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Data Submitted:", formData);
    // Add sign-in logic here (e.g., API call)
  };

  return (
    <section className="sign-in">
      <h2>Sign In</h2>
      <form className="sign-in__form" onSubmit={handleSubmit}>
        <div className="sign-in__field">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="sign-in__field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="sign-in__button">
          Sign In
        </button>
        <p className="sign-in__register">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </form>
    </section>
  );
};

export default SignInForm;
