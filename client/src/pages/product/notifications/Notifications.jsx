import React from "react";

import notedot from "../../../assets/images/icons/notedot.png";

import "./notifications.css";

const Notifications = () => {
  return (
    <div className="notifications_page">
      <div className="note_header">
        <h1>Notifications</h1>
        <h6>Mark all as read</h6>
      </div>

      <div className="notifications_content">
        <div className="note_content_header">
          <h4>
            <span>Alert</span> <span className="label">15</span>
          </h4>
        </div>

        <div className="notification_items">
          <div className="notification_item">
            <div>
              <h3>Order Placement</h3>
              <h1>
                New Order: 50kg Tomatoes, ₦25,000. Delivery: Nov 25. Prepare for
                pickup!
              </h1>
              <p>2 mins ago</p>
            </div>
            <img src={notedot} alt="" />
          </div>
          <div className="notification_item">
            <div>
              <h3>Order Placement</h3>
              <h1>
                New Order: 50kg Tomatoes, ₦25,000. Delivery: Nov 25. Prepare for
                pickup!
              </h1>
              <p>2 mins ago</p>
            </div>
            <img src={notedot} alt="" />
          </div>
          <div className="notification_item">
            <div>
              <h3>Order Placement</h3>
              <h1>
                New Order: 50kg Tomatoes, ₦25,000. Delivery: Nov 25. Prepare for
                pickup!
              </h1>
              <p>2 mins ago</p>
            </div>
            <img src={notedot} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
