import React, { useState } from "react";

import heart from "../../assets/images/icons/heart.png";
import heart_fill from "../../assets/images/icons/heart_fill.png";

import "./productItem.css";

const ProductItem = ({ product, isSelected, onSelect }) => {
  const handleSelectProduct = () => {
    onSelect(product.id);
  };

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <div
      onClick={handleSelectProduct}
      className={isSelected ? "product_item selected" : "product_item"}
    >
      <div className="product_img">
        <img className="img" src={product.photo} alt="" />
        <img
          onClick={toggleLike}
          className="heart"
          src={isLiked ? heart_fill : heart}
          alt=""
        />
      </div>
      <div className="product_details">
        <h3>Region: {product.region}</h3>
        <p>
          {product.farmAddress} <span>Harvest Date: {product.harvestDate}</span>
        </p>
        <h1>{product.name}</h1>
        <div className="stars_ratings">
          <img src={product.star} alt="" />
          <span>{product.verfiedRatings} (verified Ratings)</span>
        </div>
        <h1>
          #{product.price} per {product.unit}{" "}
          <span>
            ({product.available} {product.unit} available)
          </span>
        </h1>
        <h4>
          MOQ {product.moq} {product.unit}
        </h4>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
