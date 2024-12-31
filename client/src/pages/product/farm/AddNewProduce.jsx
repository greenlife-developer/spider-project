import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import uploadicon from "../../../assets/images/product/uploadicon.png";

const initialFormState = {
  category: "fruits",
  produceName: "",
  quantityMOQ: "",
  pricePerUnit: "",
  productQuality: "gradeA",
  productCertification: "organic",
  farmingPractice: "organic",
  harvestDate: "",
  region: "",
  pickupLocation: "",
  productImage: "",
  certificateProof: "",
};

const AddNewProduce = () => {
  const [formData, setFormData] = useState(initialFormState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? URL.createObjectURL(files[0]) || "" : value,
    }));
  };

  const handleAddNewProduce = () => {
    console.log("Form data submitted:", formData);
    alert("Adding new produce");
    // navigate("/my-farm/farms");
  };

  const handleCancelProduceAddition = () => {
    const confirmCancel = window.confirm("Are you sure you want to cancel?");
    if (confirmCancel) navigate("/my-farm/");
  };

  return (
    <div className="profile_page setup_farm">
      <div className="profile_details">
        <div>
          <h1>Upload Farm Produce</h1>
          <div className="form_field">
            <div>
              <label htmlFor="category">Category</label>
              <select
                name="category"
                onChange={handleChange}
                value={formData.category}
              >
                <option value="fruits">Fruits</option>
              </select>
            </div>
            <div>
              <label htmlFor="produceName">Produce Name</label>
              <input
                type="text"
                name="produceName"
                onChange={handleChange}
                value={formData.produceName}
              />
            </div>
          </div>
          <div className="form_field">
            <div>
              <label htmlFor="quantityMOQ">
                Quantity & Minimum Order Quantity (MOQ)
              </label>
              <input
                name="quantityMOQ"
                onChange={handleChange}
                value={formData.quantityMOQ}
                type="text"
              />
            </div>
            <div>
              <label htmlFor="pricePerUnit">Price per Unit</label>
              <input
                name="pricePerUnit"
                type="text"
                onChange={handleChange}
                value={formData.pricePerUnit}
              />
            </div>
          </div>
          <div className="form_field">
            <div>
              <label htmlFor="productQuality">Product Quality</label>
              <select
                name="productQuality"
                onChange={handleChange}
                value={formData.productQuality}
              >
                <option value="gradeA">Grade A</option>
              </select>
            </div>
            <div>
              <label htmlFor="productCertification">Product Certification</label>
              <select
                name="productCertification"
                onChange={handleChange}
                value={formData.productCertification}
              >
                <option value="organic">Organic Certification</option>
              </select>
            </div>
          </div>
          <div className="form_field">
            <div>
              <label htmlFor="farmingPractice">Farming Practice</label>
              <select
                name="farmingPractice"
                onChange={handleChange}
                value={formData.farmingPractice}
              >
                <option value="organic">Organic</option>
              </select>
            </div>
            <div>
              <label htmlFor="harvestDate">Harvest Date</label>
              <input
                name="harvestDate"
                type="text"
                onChange={handleChange}
                value={formData.harvestDate}
              />
            </div>
          </div>
          <div className="form_field">
            <div>
              <label htmlFor="region">Region</label>
              <input
                name="region"
                type="text"
                onChange={handleChange}
                value={formData.region}
              />
            </div>
            <div>
              <label htmlFor="pickupLocation">Pickup Location</label>
              <input
                name="pickupLocation"
                type="text"
                onChange={handleChange}
                value={formData.pickupLocation}
              />
            </div>
          </div>
          <div className="form_field">
            <div className="custom_file_input">
              <input name="productImage" type="file" onChange={handleChange} />
              <div>
                <h2>
                  <img src={uploadicon} alt="" />
                  <span>
                    {formData.productImage || "Upload image of product"}
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="form_field">
            <div className="custom_file_input">
              <input
                name="certificateProof"
                type="file"
                onChange={handleChange}
              />
              <div>
                <h2>
                  <img src={uploadicon} alt="" />
                  <span>
                    {formData.certificateProof ||
                      "Upload proof of certification"}
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button onClick={handleAddNewProduce}>Upload</button>
        </div>
        <div className="cancel">
          <button onClick={handleCancelProduceAddition}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduce;
