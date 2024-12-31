import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import productImage from "../../../assets/images/productImage.jpeg";
import prev from "../../../assets/images/icons/prev.png";
import next from "../../../assets/images/icons/next.png";
import productItems from "../../../data/productList";

import "./myFarm.css";

const MyFarm = () => {
    const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1); // State for the current page
  const itemsPerPage = 10; // Number of products per page

  // Calculate the products to display for the current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = productItems.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Total pages
  const totalPages = Math.ceil(productItems.length / itemsPerPage);

  // Change page handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNewProduce = () => {
    navigate("/my-farm/new-produce")
  }

  return (
    <div className="my_farm_page">
      <h1>Farm List</h1>

      <div className="my_farm_products">
        {currentProducts.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.photo} alt={product.name} />
            <div className="my_product_details">
              <label htmlFor="organic-cert">Organic Certification</label>
              <div>
                <h2>{product.name}</h2>
                <p>Harvest Date: {product.harvestDate}</p>
              </div>
              <div>
                <h2>
                  #{product.price} per {product.unit}
                </h2>
                <p>
                  Available Quantity: {product.available} {product.unit}s | MOQ:{" "}
                  {product.moq} {product.unit}s
                </p>
              </div>
              <div>
                <h2>{product.region}</h2>
                <p>Pickup: {product.farmAddress}</p>
              </div>
              <button>REMOVE FROM LIST</button>
            </div>
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

      <div className="new_produce">
        <button onClick={handleNewProduce}>ADD NEW FARM PRODUCE</button>
      </div>
    </div>
  );
};

export default MyFarm;
