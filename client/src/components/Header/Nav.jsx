import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./nav.css";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav_items">
          <ul>
            <li>
              <NavLink to="/marketplace">Marketplace</NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/faqs">Faqs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
            <li>
              <NavLink to="/news">News blog</NavLink>
            </li>
          </ul>
          <div className="user_account">
            {isLoggedIn ? (
              <div></div>
            ) : (
              <div className="login_buttons">
                <Link to="/login">
                  <button className="login">Login</button>
                </Link>
                <Link to="/register">
                  <button className="register">Sign up</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
