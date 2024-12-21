import React from "react";
import { Link } from "react-router-dom";

import loginImg from "../../../../assets/images/product/loginimg.png";
import flower1 from "../../../../assets/images/product/flower1.png";
import flower2 from "../../../../assets/images/product/flower2.png";
import flower3 from "../../../../assets/images/product/flower3.png";

import "./login.css";

const Login = () => {
  return (
    <div className="login_page">
      <div className="login_container">
        <div className="login_item">
          <img src={loginImg} alt="" />
        </div>
        <div className="login_item login_item_form">
          <h1>Welcome back</h1>
          <p>Login with appropriate details</p>
          <form action="" className="login_form">
            <div className="form_field">
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your Email Address"
                />
              </div>
            </div>
            <div className="form_field">
              <div>
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="other_actions">
              <div className="">
                <input type="checkbox" name="" id="" /> <span>Remember me</span>
              </div>
              <Link to="/forgot">Forgot password?</Link>
            </div>
            <button type="submit">Login</button>
          </form>
          <p className="no_account">
            Dont have an account? <Link to="/register">Sign-up</Link>
          </p>
        </div>
      </div>
      <img src={flower1} alt="" className="flower1" />
      <img src={flower2} alt="" className="flower2" />
      <img src={flower3} alt="" className="flower3" />
    </div>
  );
};

export default Login;
