import React from 'react';
import './signup.css';

const SignUp = () => {
    const handleChanged = () => {
        // Implement Google login functionality here
        // console.log("Google login clicked");
        window.open('http://localhost:3000/login')
    };
    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form>
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
                    <button type="submit" onClick = {handleChanged}>Sign Up</button>
                    <p  className='lTab'>Already Have Account? <a href="/login">Click for login</a></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;