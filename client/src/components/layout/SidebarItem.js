import React from "react";
import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => (isActive ? "active-link" : "link");

const SidebarItem = ({ item }) => {
  return (
    <NavLink to={item.path} className={activeLink}>
      <div className="sidebar_item">
        <div className="sidebar_title">
          <div>
            <span>
              {item.icon && <div className="icon">{item.icon}</div>}
              <div className="title">{item.title}</div>
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default SidebarItem;
