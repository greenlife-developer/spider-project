import React from "react";
import { useNavigate } from "react-router-dom";

import WeatherCard from "../../../components/weatherCard/WeatherCard";
import weather1 from "../../../assets/images/weather1.png";
import weather2 from "../../../assets/images/weather2.png";
import weather3 from "../../../assets/images/weather3.png";
import weather4 from "../../../assets/images/weather4.png";
import weather5 from "../../../assets/images/weather5.png";
import weather6 from "../../../assets/images/weather6.png";
import tractor from "../../../assets/images/request_tractor.png";
import farming from "../../../assets/images/request_agriculture.png";
import money from "../../../assets/images/request_money.png";
import users from "../../../assets/images/icons/users.png";
import products from "../../../assets/images/icons/products.png";
import delivered from "../../../assets/images/icons/delivered.png";
import returned from "../../../assets/images/icons/returned.png";

import "./dashboard.css";
import Summary from "../../../components/summary/Summary";
import OrdersAnalytics from "../../../components/summary/OrdersAnalytics";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCompleteSetUp = () => {
    navigate("/profile");
  };

  const data = [
    {
      img: users,
      value: 500,
      title: "Total users",
      change: 10.2,
      percentage: 1.01,
    },
    {
      img: products,
      value: 300,
      title: "Total products",
      change: 3.1,
      percentage: 0.49,
    },
    {
      img: delivered,
      value: 150,
      title: "Delivered",
      change: -2.56,
      percentage: -0.91,
    },
    {
      img: returned,
      value: 20,
      title: "Returned",
      change: 7.2,
      percentage: 1.51,
    },
  ];

  const orders = [
    {
      id: "001",
      time: "4:00pm",
      date: "April 18, 2024",
      item: "Watermelon",
      pickupLocation: "Adisa Farms, Plot 20",
      destination: "Number 29, Gbad...",
      status: "Completed",
    },
    {
      id: "002",
      time: "5:00pm",
      date: "April 19, 2024",
      item: "Banana",
      pickupLocation: "Alaba Market",
      destination: "Number 15, Lekki...",
      status: "Pending",
    },
    {
      id: "003",
      time: "3:30pm",
      date: "April 17, 2024",
      item: "Pineapple",
      pickupLocation: "Odogunyan Market",
      destination: "Number 12, Yaba...",
      status: "In Progress",
    },
    {
      id: "004",
      time: "6:00pm",
      date: "April 20, 2024",
      item: "Apples",
      pickupLocation: "Magodo Farms",
      destination: "Number 22, VI...",
      status: "Completed",
    },
    {
      id: "005",
      time: "2:00pm",
      date: "April 15, 2024",
      item: "Coconut",
      pickupLocation: "Iyana Ipaja Market",
      destination: "Number 3, Ikeja...",
      status: "Cancelled",
    },
    {
      id: "006",
      time: "2:00pm",
      date: "April 15, 2024",
      item: "Coconut",
      pickupLocation: "Iyana Ipaja Market",
      destination: "Number 3, Ikeja...",
      status: "In Progress",
    },
    {
      id: "007",
      time: "2:00pm",
      date: "April 15, 2024",
      item: "Coconut",
      pickupLocation: "Iyana Ipaja Market",
      destination: "Number 3, Ikeja...",
      status: "Completed",
    },
  ];

  const weatherData = {
    location: "Lagos, Nigeria",
    currentTemp: 24,
    currentDesc: "Thunderstorm",
    currentImg: weather1,
    forecastData: [
      {
        time: "9AM",
        icon: weather2,
        temp: 18,
        description: "Cloudy",
      },
      {
        time: "10AM",
        icon: weather3,
        temp: 19,
        description: "Windy",
      },
      {
        time: "11AM",
        icon: weather4,
        temp: 24,
        description: "Partly Cloudy",
        active: true,
      },
      {
        time: "12PM",
        icon: weather5,
        temp: 25,
        description: "Sunny",
      },
      {
        time: "1PM",
        icon: weather6,
        temp: 26,
        description: "Rainy",
      },
    ],
  };

  return (
    <>
      <div className="dashboard_page">
        <h1>Welcome Back, Adisa</h1>
        <p>Here is the information about all your orders</p>

        <div className="complete_farm_setup">
          <div className="">
            <h3>Complete Your Farm Setup</h3>
            <p>
              To fully benefit from the platform's features and ensure seamless
              operations.
            </p>
          </div>
          <button onClick={handleCompleteSetUp}>Complete Farm Setup</button>
        </div>

        <div className="weather_info">
          <WeatherCard
            location={weatherData.location}
            currentTemp={weatherData.currentTemp}
            currentImg={weatherData.currentImg}
            currentDesc={weatherData.currentDesc}
            forecastData={weatherData.forecastData}
          />
        </div>
      </div>
      <div className="request_section">
        <div className="request_items">
          <div className="request_item">
            <div className="">
              <div className="">
                <h3>Request Tractor</h3>
                <p>Boost your farm's productivity—request a tractor today</p>
                <button>Explore Now</button>
              </div>
              <img src={tractor} alt="" />
            </div>
          </div>
          <div className="request_item center">
            <div className="">
              <div className="">
                <h3>Request Regenerative Agriculture & Extension Support</h3>
                <p>
                  Empower Your Farm, Embrace Regeneration—Request Agriculture &
                  Extension Support Today
                </p>
                <button>Explore Now</button>
              </div>
              <img src={farming} alt="" />
            </div>
          </div>
          <div className="request_item">
            <div className="">
              <div className="">
                <h3>Request Input Loan</h3>
                <p>
                  Boost Your Harvest Today—Request an Input Loan for a Brighter
                  Tomorrow
                </p>
                <button>Explore Now</button>
              </div>
              <img src={money} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="business_summary">
        <Summary data={data} />
      </div>

      <div className="orders_analytics">
        <OrdersAnalytics />
      </div>

      <div className="recent_orders">
        <h1>Recent Orders</h1>

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
            {orders.map((order, index) => (
              <div className="item" key={index}>
                <ul>
                  <li>{order.id}</li>
                  <li>{order.time}</li>
                  <li>{order.date}</li>
                  <li>{order.item}</li>
                  <li>{order.pickupLocation}</li>
                  <li>{order.destination}</li>
                  <li className={`status ${order.status.toLowerCase().replace(/\s+/g, '-')}`}>
                  {order.status}
                </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
