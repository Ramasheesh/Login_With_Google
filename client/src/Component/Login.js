import React from 'react';
import './login.css';

const Login = () => {
    const handleGoogleLogin = () => {
        // Implement Google login functionality here
        // console.log("Google login clicked");
        window.open('http://localhost:4000/auth/google/callback','_self')
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"  required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"  required />
                    </div>
                    <button type="submit">Login</button>
                </form>
                    <button className="google-login" onClick={handleGoogleLogin}>
                        <img src="./logo192.png" alt="Google logo" className="google-logo" />
                        Login with Google
                    </button>
            </div>
        </div>
    );
};

export default Login;
