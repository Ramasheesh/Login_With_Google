// import React from "react";
import "./login.css";
import googleLoogo from "./google_Logo.png";
import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const handleGoogleLogin = () => {
    // Implement Google login functionality here
    window.open("http://localhost:4000/auth/google/callback", "_self");
  };

  const [setLoginData] = useState({}); // [loginData, setLoginData]
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      if (response) {
        window.open("http://localhost:3000/dashboard", "_self");
        setLoginData(response.data.user);
      }
    } catch (error) {
      console.error(
        "Error during login:",
        error.response ? error.response.data : error.message
      );
      setErrorMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <button className="google-login" onClick={handleGoogleLogin}>
          <img src={googleLoogo} alt="Google logo" className="google-logo" />
          <p className="gTab">Login with Google</p>
        </button>
        <p className="lTab">
          Don't have Account ?<a href="/signup">Create Account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
