import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "./logo192.png";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="left">RamAshish</div>
          <div className="right">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <img src={logo} alt="Logo" className="logo" />
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
