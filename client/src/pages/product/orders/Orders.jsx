import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Pickup from "./Pickup";
import "./orders.css";
import AllOrders from "./AllOrders";
import OngoingDelivery from "./OngoingDelivery";

const Orders = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") || "pickup";

  const [activeTab, setActiveTab] = useState(initialTab);

  const handleChangeActiveTab = (tab) => {
    setActiveTab(tab);
    navigate(`?tab=${tab}`, { replace: true });
  };

  useEffect(() => {
    if (activeTab !== initialTab) {
      navigate(`?tab=${activeTab}`, { replace: true });
    }
  }, [activeTab, initialTab, navigate]);

  return (
    <div className="orders_page">
      <div className="join_spider_as ordersTabs">
        <div className="join_container_1">
          <div className="join_item">
            <div className="item_tabs">
              <div
                className={
                  activeTab === "pickup" ? "item_tab active" : "item_tab"
                }
                onClick={() => handleChangeActiveTab("pickup")}
              >
                <h2>Pickup</h2>
                <div className="line"></div>
              </div>
              <div
                className={
                  activeTab === "orders" ? "item_tab active" : "item_tab"
                }
                onClick={() => handleChangeActiveTab("orders")}
              >
                <h2>Orders</h2>
                <div className="line"></div>
              </div>
              <div
                className={
                  activeTab === "deliveries" ? "item_tab active" : "item_tab"
                }
                onClick={() => handleChangeActiveTab("deliveries")}
              >
                <h2>Deliveries</h2>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeTab === "pickup" && <Pickup />}
      {activeTab === "orders" && <AllOrders />}
      {activeTab === "deliveries" && <OngoingDelivery />}
    </div>
  );
};

export default Orders;
