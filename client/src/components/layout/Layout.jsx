import React from "react";
import menu from "../../data/sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";

import SidebarItem from "./SidebarItem";
import logouticon from "../../assets/images/icons/logouticon.png";
import notificationicon from "../../assets/images/icons/notificationicon.png";
import userimg from "../../assets/images/icons/userimg.png";
import searchIcon from "../../assets/images/icons/search-icon.png";
import logo from "../../assets/images/logo.png";
import prev from "../../assets/images/icons/prev.png";
import next from "../../assets/images/icons/next.png";

import "./layout.css";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("location", location.pathname);

  const logout = () => {
    alert("logging out");
  };

  const handleNotifications = () => {
    navigate("/notifications");
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  const userType = "logistics";

  const filteredMenu = menu.filter((item) =>
    item.accountTypes?.includes(userType)
  );

  return (
    // layout
    <div className="layout">
      <div className="top_nav">
        <div onClick={handleNavigateHome} className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="top_nav_items">
          {location.pathname === "/notifications" && (
            <div className="note_page">
              <div className="icons">
                <img src={prev} alt="" />
                <img src={next} alt="" />
              </div>
              <h1>Notifications</h1>
            </div>
          )}
          <div className="search">
            <input placeholder="Search" type="search" name="" id="" />
            <img src={searchIcon} alt="" className="search_icon" />
          </div>
          <div onClick={handleNotifications} className="notifications">
            <img src={notificationicon} alt="" /> <span>99+</span>
          </div>
          <div className="user_info">
            <img src={userimg} alt="" />
            <div className="">
              <h3>Adisa Jaro Yusuf</h3>
              <p>Farmer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main_content">
        <div className="sidebar">
          <div className="sidebar_content">
            {filteredMenu.map((item, index) => {
              return <SidebarItem key={index} item={item} />;
            })}

            <div className="logout_box">
              <Link onClick={logout}>
                <div className="sidebar_item s-parent">
                  <div className="sidebar_title">
                    <span>
                      <div className="icon">
                        <img src={logouticon} alt="logout" />
                      </div>
                      <div className="title">LogOut</div>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <main
          style={{
            transition: "all .5s",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
