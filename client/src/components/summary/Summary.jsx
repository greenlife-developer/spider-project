import React from "react";

import arrowUp from "../../assets/images/icons/arrowUp.png";
import arrowDown from "../../assets/images/icons/arrowDown.png";

import "./summary.css"; // Import CSS for styling

const Summary = ({ data }) => {
  return (
    <div className="summary_cards">
      {data.map((item, index) => (
        <div key={index} className="card">
          <div className="card-header">
            <div className="">
              <h2>{item.value}</h2>
              <p>{item.title}</p>
            </div>
            {/* <div className="icon">{item.icon}</div> */}
            <img src={item.img} alt="" />
          </div>

          <div className="card-footer">
            <span className="trends">
              <img src={item.change > 0 ? arrowUp : arrowDown} />
              {Math.abs(item.change).toFixed(2)}
            </span>
            <span className="percentage">
              {item.percentage > 0 ? "+" : ""}
              {item.percentage.toFixed(2)}% this week
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Summary;
