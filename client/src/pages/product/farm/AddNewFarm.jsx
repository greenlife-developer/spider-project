import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import uploadicon from "../../../assets/images/product/uploadicon.png";

const initialFormState = {
  fullName: "Adisa Jairo Yusuf",
  dateOfBirth: "2024-12-11", // Updated to date format
  email: "adisajairo@gmail.com",
  phoneNumber: "08065109764",
  idType: "Drivers Licence",
  idNumber: "1122334455667",
  location: "Lagos",
  address: "38 Adeleye Street, Ikeja",
  accountName: "Adisa Jairo Yusuf",
  bank: "Access Bank",
  accountNumber: "2017192345",
  bvn: "11223344343445",
  farmName: "Adisa Farms",
  farmLocation: "Ogun State",
  farmLGA: "Ogun Central",
  farmAddress: "Adisa Farms acre 50 Ogundele street",
  farmLandmarks: "Brainy Technical School",
  farmSize: "20 Acres",
  productionScale: "Large Scale",
  staffSize: "50 Staffs",
  typeOfFarming: "Vegetable Farming",
  cropType: "Bell Pepper, Spring Onions",
  farmImages: "",
  titleDocuments: "",
  //   profileImage: profileImg,
};

const AddNewFarm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? URL.createObjectURL(files[0]) || "" : value,
    }));
  };

  const handleSetUpFarm = () => {
    alert("Setting Up farm");
    navigate("/my-farm/farms");
  };

  return (
    <div className="profile_page setup_farm">
      {/* Profile Details Section */}
      <div className="profile_details">
        {/* Farm Details Section */}
        <div className="">
          <h1>Setup Farm</h1>
          <div className="form_field">
            <div>
              <label htmlFor="farmName">Farm Name</label>
              <input
                name="farmName"
                type="text"
                onChange={handleChange}
                value={formData.farmName}
              />
            </div>
            <div>
              <label htmlFor="farmLocation">Farm Location</label>
              <select
                name="farmLocation"
                onChange={handleChange}
                value={formData.farmLocation}
              >
                <option value="Ogun State">Ogun State</option>
                <option value="Lagos State">Lagos State</option>
              </select>
            </div>
          </div>
          <div className="form_field">
            <div>
              <label htmlFor="farmLGA">Farm Local Government Area</label>
              <select
                name="farmLGA"
                onChange={handleChange}
                value={formData.farmLGA}
              >
                <option value="Ogun Central">Ogun Central</option>
                <option value="Ogun East">Ogun East</option>
              </select>
            </div>
            <div>
              <label htmlFor="farmAddress">Farm Address</label>
              <input
                name="farmAddress"
                type="text"
                onChange={handleChange}
                value={formData.farmAddress}
              />
            </div>
          </div>
          <div className="form_field">
            <div>
              <label htmlFor="farmLandmarks">Landmarks to Farm</label>
              <input
                name="farmLandmarks"
                type="text"
                onChange={handleChange}
                value={formData.farmLandmarks}
              />
            </div>
            <div>
              <label htmlFor="farmSize">Farm Size (in acres or hectares)</label>
              <input
                name="farmSize"
                type="text"
                onChange={handleChange}
                value={formData.farmSize}
              />
            </div>
          </div>
          <div className="form_field">
            <div>
              <label htmlFor="productionScale">Scale of Production</label>
              <select
                name="productionScale"
                onChange={handleChange}
                value={formData.productionScale}
              >
                <option value="Large Scale">Large Scale</option>
                <option value="Small Scale">Small Scale</option>
              </select>
            </div>
            <div>
              <label htmlFor="staffSize">Number of Staff</label>
              <input
                name="staffSize"
                type="text"
                onChange={handleChange}
                value={formData.staffSize}
              />
            </div>
          </div>
          <div className="form_field">
            <div>
              <label htmlFor="typeOfFarming">Type of Farming</label>
              <input
                name="typeOfFarming"
                type="text"
                onChange={handleChange}
                value={formData.typeOfFarming}
              />
            </div>
            <div>
              <label htmlFor="cropType">Crops Grown</label>
              <input
                name="cropType"
                type="text"
                onChange={handleChange}
                value={formData.cropType}
              />
            </div>
          </div>
          <div className="form_field">
            <div className="custom_file_input">
              <input name="farmImages" type="file" onChange={handleChange} />
              <div>
                <h2>
                  <img src={uploadicon} alt="" />
                  <span>
                    {formData.farmImages || "Upload images of your farm"}
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="form_field">
            <div className="custom_file_input">
              <input
                name="titleDocuments"
                type="file"
                onChange={handleChange}
              />
              <div>
                <h2>
                  <img src={uploadicon} alt="" />
                  <span>
                    {formData.titleDocuments || "Upload Land Title Documents"}
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <button onClick={handleSetUpFarm}>Set up farm</button>
        </div>
      </div>
    </div>
  );
};

export default AddNewFarm;
