import React from "react";
import "./login.css";
import googleLoogo from "./google_Logo.png";
const Login = () => {
  const handleGoogleLogin = () => {
    // Implement Google login functionality here
    // console.log("Google login clicked");
    window.open("http://localhost:4000/auth/google/callback", "_self");
  };

  const raindomLogin =()=>{
    window.open("http://localhost:3000/dashboard");
  }
  return (
    <div className="login-container"> 
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" onClick={ raindomLogin} >Login</button>
        </form>
        <button className="google-login" onClick={handleGoogleLogin}>
          <img src={googleLoogo} alt="Google logo" className="google-logo" />
          <p className="gTab">Login with Google</p>
        </button>
        <p className="lTab">Don't have Account ?<a href="/signup">Create Account</a></p>
      </div>
    </div>
  );
};

export default Login;
