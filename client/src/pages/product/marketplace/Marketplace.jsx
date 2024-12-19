import React, { useState } from "react";
import { Link } from "react-router-dom";

import Nav from "../../../components/Header/Nav";
import ReadyToConnect from "../../../components/ready_to_connect/ReadyToConnect";
import ProductItem from "../../../components/productItem/ProductItem";
import productItems from "../../../data/productList";
import posts from "../../../data/posts";
import marketplacebanner from "../../../assets/images/marketplacebanner.png";
import bannerfruit from "../../../assets/images/banner_fruit.png";
import arrowRight from "../../../assets/images/icons/arrow-right.png";
import bulkImg from "../../../assets/images/bulkImg.png";
import star1 from "../../../assets/images/icons/1star.png";
import star2 from "../../../assets/images/icons/2star.png";
import star3 from "../../../assets/images/icons/3star.png";
import star4 from "../../../assets/images/icons/4star.png";
import vector from "../../../assets/images/hero_vector.png";

import "./marketplace.css";
import Footer from "../../../components/Footer/Footer";

const Marketplace = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const categories = [
    "Grains",
    "Pulses",
    "Tuber Crops",
    "Fruits",
    "Vegetables",
    "Oil Crops",
    "Cash Crops",
    "Fibre Crops",
    "Spices",
    "Beverage Crops",
    "Livestock Feeds",
    "Medicinal Plants",
  ];

  const quantities = [
    "1 - 10Kg",
    "11 - 20Kg",
    "21 - 50Kg",
    "50Kg and above",
    "1 bag - 10 bags",
    "11 bags - 20 bags",
    "21 bags - 30 bags",
    "31 bags - 40 bags",
    "41 bags - 50 bags",
    "50 bags and above",
  ];

  const prices = [
    "#5,000 - #50,000",
    "#51,000 - #100,000",
    "#101,000 and above",
  ];

  const qualities = [
    "Premium Quality",
    "Grade A",
    "Grade B",
    "Grade C",
    "Fair Trade Quality",
    "Organic Quality",
    "Processing Quality",
    "Local Market Quality",
    "Utility Grade",
    "Non-Standard",
  ];

  const ratings = [star4, star3, star2, star1];

  const recentlyViewedProducts = productItems.slice(0, 8);

  const handleSelectProduct = (id) => {
    setSelectedProductId(id === selectedProductId ? null : id);
  };

  return (
    <div>
      <Nav />
      <section className="marketplace">
        <div className="banner">
          <img
            className="banner_img"
            src={marketplacebanner}
            alt="Marketplace banner"
          />
          <img className="float_fruit" src={bannerfruit} alt="Floating fruit" />
        </div>
      </section>

      <section className="products_list_container">
        <div className="sort_parameters">
          <div className="parameters">
            {/* Categories */}
            <div>
              <h3>Category</h3>
              <ul>
                {categories.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
              </ul>
            </div>

            {/* Quantities */}
            <div>
              <h3>Quantity</h3>
              <ul>
                {quantities.map((quantity, index) => (
                  <li key={index}>
                    <label className="container">
                      {quantity}
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prices */}
            <div>
              <h3>Price</h3>
              <ul>
                {prices.map((price, index) => (
                  <li key={index}>
                    <label className="container">
                      {price}
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qualities */}
            <div>
              <h3>Product Quality</h3>
              <ul>
                {qualities.map((quality, index) => (
                  <li key={index}>
                    <label className="container">
                      {quality}
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ratings */}
            <div>
              <h3>Product Rating</h3>
              <ul>
                {ratings.map((rating, index) => (
                  <li key={index}>
                    <label className="container">
                      <img src={rating} alt={`Rating ${index + 1}`} />
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="products_list">
          <div className="list_head">
            <h3>
              GRAINS <span>(290 Products found)</span>
            </h3>
            <h4>
              Sort By:{" "}
              <span>
                <select name="" id="">
                  <option value="egion">Region</option>
                </select>
              </span>
            </h4>
          </div>
          <div className="product_items">
            {productItems.map((item, index) => {
              return (
                <ProductItem
                  product={item}
                  isSelected={selectedProductId === item.id}
                  onSelect={handleSelectProduct}
                />
              );
            })}
          </div>
          <div className="spider_helps">
            <div className="help_item text">
              <h2>SPIDA helps you get your orders in Bulk</h2>
              <p>
                SPIDA simplifies your shopping experience by connecting you with
                trusted bulk sellers and ensuring seamless order processing, all
                in one place.
              </p>
              <Link to="/">
                <button>Get Bulk</button>
              </Link>
            </div>
            <div className="help_item">
              <img src={bulkImg} alt="" />
            </div>
          </div>
          <div className="recently_viewed">
            <div className="recently_viewed_header">
              <h1>RECENTLY VIEWED</h1>
            </div>

            <div className="product_items">
              {recentlyViewedProducts.map((item, index) => {
                return (
                  <ProductItem
                    product={item}
                    isSelected={selectedProductId === item.id}
                    onSelect={handleSelectProduct}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="ready_section">
        <ReadyToConnect />
      </section>

      <section className="news_blog_marketplace">
        <div className="marketplace_news_blog_header">
          <h1>News Blog</h1>
          <img src={vector} alt="" />
        </div>
        <div className="related_content_items">
          {posts.map((post) => {
            const paragraphs = post.body
              .split("\n")
              .filter((paragraph) => paragraph.trim() !== "");

            return (
              <div className="related_item" key={post.id}>
                <div className="item_img">
                  <img src={post.imgSrc} alt="" />
                  <h3 className="post_label">{post.label}</h3>
                </div>
                <div className="item_content">
                  <p>{post.date}</p>
                  <h2>{post.title}</h2>
                  {paragraphs.slice(0, 2).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  <Link to={"/news/"+post.id}>
                    Read more <img className="arrow" src={arrowRight} alt="" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="footer_section">
        <Footer />
      </section>
    </div>
  );
};

export default Marketplace;
