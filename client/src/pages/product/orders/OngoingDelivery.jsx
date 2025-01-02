import React, { useState } from "react";

import orders from "../../../data/orders";

import deliveryvan from "../../../assets/images/deliveryvan.png";
import map from "../../../assets/images/map.png";
import dprogress from "../../../assets/images/icons/dprogress.png";
import dest from "../../../assets/images/icons/dest.png";
import message from "../../../assets/images/icons/message.png";
import ownerImg from "../../../assets/images/icons/ownerImg.png";
import prev from "../../../assets/images/icons/prev.png";
import next from "../../../assets/images/icons/next.png";

const OngoingDelivery = () => {
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
    <div className="ongoing_delivery_page">
      <h1>Ongoing Delivery</h1>
      <div className="delivery_items">
        <div className="delivery_item">
          <div className="shipment_info">
            <div className="">
              <h4>Shipment number</h4>
              <h1>SPIDA-00123</h1>
              <p>Farm Produce</p>
            </div>
            <img src={deliveryvan} alt="" />
          </div>
          <div className="locations">
            <div className="">
              <img src={dprogress} alt="" />
              <div className="">
                <h3>Adisa Farms</h3>
                <p>Acre 50 Ogundele Street</p>
              </div>
            </div>
            <div className="">
              <img src={dest} alt="" />
              <div className="">
                <h3>8502 Preston</h3>
                <p>No 20 House 10, beside Landmark</p>
              </div>
            </div>
          </div>
          <div className="owner">
            <div className="">
              <img src={ownerImg} alt="" />
              <div className="">
                <h3>Business Owner</h3>
                <h1>Mary Magdalene</h1>
                <p>Marina, LTD</p>
              </div>
            </div>
            <img src={message} alt="" />
          </div>
        </div>
        <div className="delivery_item">
          <div className="shipment_info">
            <div className="">
              <h4>Shipment number</h4>
              <h1>SPIDA-00123</h1>
              <p>Farm Produce</p>
            </div>
            <img src={deliveryvan} alt="" />
          </div>
          <div className="locations">
            <div className="">
              <img src={dprogress} alt="" />
              <div className="">
                <h3>Adisa Farms</h3>
                <p>Acre 50 Ogundele Street</p>
              </div>
            </div>
            <div className="">
              <img src={dest} alt="" />
              <div className="">
                <h3>8502 Preston</h3>
                <p>No 20 House 10, beside Landmark</p>
              </div>
            </div>
          </div>
          <div className="owner">
            <div className="">
              <img src={ownerImg} alt="" />
              <div className="">
                <h3>Business Owner</h3>
                <h1>Mary Magdalene</h1>
                <p>Marina, LTD</p>
              </div>
            </div>
            <img src={message} alt="" />
          </div>
        </div>
        <div className="delivery_item">
          <div className="shipment_info">
            <div className="">
              <h4>Shipment number</h4>
              <h1>SPIDA-00123</h1>
              <p>Farm Produce</p>
            </div>
            <img src={deliveryvan} alt="" />
          </div>
          <div className="locations">
            <div className="">
              <img src={dprogress} alt="" />
              <div className="">
                <h3>Adisa Farms</h3>
                <p>Acre 50 Ogundele Street</p>
              </div>
            </div>
            <div className="">
              <img src={dest} alt="" />
              <div className="">
                <h3>8502 Preston</h3>
                <p>No 20 House 10, beside Landmark</p>
              </div>
            </div>
          </div>
          <div className="owner">
            <div className="">
              <img src={ownerImg} alt="" />
              <div className="">
                <h3>Business Owner</h3>
                <h1>Mary Magdalene</h1>
                <p>Marina, LTD</p>
              </div>
            </div>
            <img src={message} alt="" />
          </div>
        </div>
        {/* <div className="delivery_item">
          <div className="shipment_info">
            <div className="">
              <h4>Shipment number</h4>
              <h1>SPIDA-00123</h1>
              <p>Farm Produce</p>
            </div>
            <img src={deliveryvan} alt="" />
          </div>
          <div className="locations">
            <div className="">
              <img src={dprogress} alt="" />
              <div className="">
                <h3>Adisa Farms</h3>
                <p>Acre 50 Ogundele Street</p>
              </div>
            </div>
            <div className="">
              <img src={dest} alt="" />
              <div className="">
                <h3>8502 Preston</h3>
                <p>No 20 House 10, beside Landmark</p>
              </div>
            </div>
          </div>
          <div className="owner">
            <div className="">
              <img src={ownerImg} alt="" />
              <div className="">
                <h3>Business Owner</h3>
                <h1>Mary Magdalene</h1>
                <p>Marina, LTD</p>
              </div>
            </div>
            <img src={message} alt="" />
          </div>
        </div> */}
      </div>

      <div className="map">
        {/* <img src={map} alt="" /> */}
        <iframe
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?q=akure&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>

      <div className="recent_orders pickup_summaries">
        <div className="all_orders_page_header">
          <h1>Deliveries</h1>
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
              <li>Delivery Time</li>
              <li>Delivery Date</li>
              <li>Item</li>
              <li>Pickup Location</li>
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

export default OngoingDelivery;
