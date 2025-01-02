import React, { useState } from "react";

import melon from "../../../assets/images/melon.png";
import locationicon from "../../../assets/images/icons/locationicon3.png";
import lineimg from "../../../assets/images/icons/lineimg.png";
import prev from "../../../assets/images/icons/prev.png";
import next from "../../../assets/images/icons/next.png";
import orders from "../../../data/orders";


const Pickup = () => {
  const [currentPage, setCurrentPage] = useState(1); // State for the current page
  const itemsPerPage = 10; // Number of products per page

  // Calculate the products to display for the current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentOrders = orders.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Total pages
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  // Change page handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pickups">
      <div className="pickup_items">
        <div className="pickup_item">
          <img src={melon} alt="" />
          <div className="pickup_details">
            <div className="order_id">
              <h3>Order ID</h3>
              <h2>001</h2>
            </div>
            <div className="pickup_location">
              <div>
                <p>Pickup Location </p>
                <h2>Adisa Farms, Plot 20</h2>
              </div>
              <div className="pickup_imgs">
                <img src={locationicon} alt="" />
                <img src={lineimg} alt="" />
              </div>
              <div>
                <p>Destination</p>
                <h2>No 38 Gbadebo street</h2>
              </div>
            </div>
            <div className="item_details">
              <div>
                <p>Item</p>
                <h2>Watermelon</h2>
              </div>
              <div>
                <p>Quantity</p>
                <h2>30kg</h2>
              </div>
              <div>
                <p>Region</p>
                <h2>SouthWest Nigeria</h2>
              </div>
              <div>
                <p>Logistics Company</p>
                <h2>Express Logistics</h2>
              </div>
            </div>
            <button>Confirm Pickup</button>
          </div>
        </div>
        <div className="pickup_item">
          <img src={melon} alt="" />
          <div className="pickup_details">
            <div className="order_id">
              <h3>Order ID</h3>
              <h2>001</h2>
            </div>
            <div className="pickup_location">
              <div>
                <p>Pickup Location </p>
                <h2>Adisa Farms, Plot 20</h2>
              </div>
              <div className="pickup_imgs">
                <img src={locationicon} alt="" />
                <img src={lineimg} alt="" />
              </div>
              <div>
                <p>Destination</p>
                <h2>No 38 Gbadebo street</h2>
              </div>
            </div>
            <div className="item_details">
              <div>
                <p>Item</p>
                <h2>Watermelon</h2>
              </div>
              <div>
                <p>Quantity</p>
                <h2>30kg</h2>
              </div>
              <div>
                <p>Region</p>
                <h2>SouthWest Nigeria</h2>
              </div>
              <div>
                <p>Logistics Company</p>
                <h2>Express Logistics</h2>
              </div>
            </div>
            <button>Confirm Pickup</button>
          </div>
        </div>
      </div>

      <div className="recent_orders pickup_summaries">
        <h1>Pickup Summary</h1>

        <div className="order_items">
          {/* Header Section */}
          <div className="items_head">
            <ul>
              <li>Order ID</li>
              <li>Pickup Time</li>
              <li>Pickup Date</li>
              <li>Item</li>
              <li>Pickup Location</li>
              <li>Destination</li>
              <li>Status</li>
            </ul>
          </div>

          {/* Body Section */}
          <div className="items_body">
            {currentOrders.map((order, index) => (
              <div className="item" key={index}>
                <ul>
                  <li>{order.id}</li>
                  <li>{order.time}</li>
                  <li>{order.date}</li>
                  <li>{order.item}</li>
                  <li>{order.pickupLocation}</li>
                  <li>{order.destination}</li>
                  <li>{order.status}</li>
                </ul>
              </div>
            ))}
          </div>

          <div className="pagination">
            <div>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <img src={prev} alt="" />
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={currentPage === page ? "active" : ""}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <img src={next} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pickup;
