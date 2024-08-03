import React, { useState } from "react";
import axios from "axios";

import "./signup.css";

const SignUp = () => {
  const [setUserdata] = useState({}); //[userdata, setUserdata]

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await axios.post('http://localhost:4000/signup/success', { name, email, password });
    //   console.log('Response data:', response.data);
      setUserdata(response.data.user);
      window.open("http://localhost:3000/login", "_self");
    } catch (error) {
      console.error('Error during signup:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">
            Sign Up
          </button>
          <p className="lTab">
            Already Have Account? <a href="/login">Click for login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
