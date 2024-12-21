import React, { useState } from "react";

import flower1 from "../../../../assets/images/product/flower1.png";
import bannerfruit from "../../../../assets/images/banner_fruit.png";
import flower2 from "../../../../assets/images/product/flower2.png";

import "./register.css";
import FarmerForm from "../../../../components/forms/FarmerForm";

const Register = () => {
  const [activeTab, setActiveTab] = useState("farmer");
  const [buyerType, setBuyerType] = useState("individual");

  const handleChangeActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const handleChangeBuyerType = (tab) => {
    setBuyerType(tab);
  };

  return (
    <div className="register_page">
      <img src={flower1} alt="" className="flower1" />
      <img src={flower2} alt="" className="flower2" />
      <div className="join_spider_as">
        <div className="join_container_1">
          <div className="join_item">
            <h1>
              Join SPIDA <span>as</span>
            </h1>
            <div className="item_tabs">
              <div
                className={
                  activeTab === "farmer" ? "item_tab active" : "item_tab"
                }
                onClick={() => handleChangeActiveTab("farmer")}
              >
                <h2>Farmer</h2>
                <div className="line"></div>
              </div>
              <div
                className={
                  activeTab === "logistics" ? "item_tab active" : "item_tab"
                }
                onClick={() => handleChangeActiveTab("logistics")}
              >
                <h2>Logistics</h2>
                <div className="line"></div>
              </div>
              <div
                className={
                  activeTab === "buyer" ? "item_tab active" : "item_tab"
                }
                onClick={() => handleChangeActiveTab("buyer")}
              >
                <h2>Buyer</h2>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="join_item">
            <img src={bannerfruit} alt="" />
          </div>
        </div>
        {activeTab === "buyer" && (
          <div>
            <div className="buyers_tabs">
              <div
                className={
                  buyerType === "individual"
                    ? "buyers_tab active"
                    : "buyers_tab"
                }
                onClick={() => handleChangeBuyerType("individual")}
              >
                <h3>Individual</h3>
              </div>
              <div
                className={
                  buyerType === "business" ? "buyers_tab active" : "buyers_tab"
                }
                onClick={() => handleChangeBuyerType("business")}
              >
                <h3>Business</h3>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="signup_forms">
        <FarmerForm />
      </div>
    </div>
  );
};

export default Register;
