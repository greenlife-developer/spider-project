import React, { useState } from 'react';

import prev from "../../../assets/images/icons/prev.png";
import next from "../../../assets/images/icons/next.png";
import orders from '../../../data/orders';

const AllOrders = () => {
  const [currentPage, setCurrentPage] = useState(1); // State for the current page
  const itemsPerPage = 10; // Number of products per page

  // Calculate the products to display for the current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstProduct, indexOfLastProduct);

  // Total pages
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  // Change page handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="recent_orders pickup_summaries all_orders_page">
      <div className="all_orders_page_header">
        <h1>Order Details</h1>
        <h3>
          Sort by:{" "}
          <select name="sortBy" id="">
            <option value="completed">Completed</option>
          </select>
        </h3>
      </div>

      <div className="order_items">
        {/* Header Section */}
        <div className="items_head">
          <ul>
            <li>Order ID</li>
            <li>Pickup Time</li>
            <li>Pickup Date</li>
            <li>Item</li>
            <li>Pickup Location</li>
            <li>Ratings</li>
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
                <li><img src={order.star} alt="" /></li>
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
  );
};

export default AllOrders;
