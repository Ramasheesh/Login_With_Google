import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
// import logo from "./logo192.png";
import axios from "axios";

const Header = () => {
  const [userdata, setUserdata] = useState({});
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:4000/login/success", {
        withCredentials: true,
      });
      // Set userdata to the response data
      let data = response.data.user;
      setUserdata(data);
    } catch (error) {
      console.error("Error fetching userdata:", error);
    }
  };

  const logout = ()=>{
    window.open('http://localhost:4000/logout' , "_self")
  }
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="left">Portfolio</div>
          <div className="right">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {Object?.keys(userdata)?.length > 0 ? (
                <>
                  <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                  <li onClick ={logout}>Logout</li>
                  <li >{userdata?.id.name}</li>
                  <li>
                    <NavLink>
                      <img src={userdata?.id.image} alt="Logo" className="logo" />
                    </NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to="/signup">Sign Up</NavLink>
                  </li>,
                  <li>
                  <NavLink to="/login">Login</NavLink>
              </li>
                  
              )}
              
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
