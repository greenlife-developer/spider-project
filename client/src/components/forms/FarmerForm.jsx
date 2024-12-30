import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uploadicon from "../../assets/images/product/uploadicon.png";

const initialFormState = {
  fullName: "",
  dateOfBirth: "",
  email: "",
  phoneNumber: "",
  addressVerification: "govermentIssued",
  verificationNumber: "",
  location: "",
  homeAddress: "",
  utilityBill: "",
  farmName: "",
  farmLocation: "",
  farmLocalGovernment: "",
  farmAddress: "",
  farmOwnershipProof: "",
  password: "",
  confirmPassword: "",
  termsAgreed: false,
};

const FarmerForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]?.name || ""
          : value,
    }));
  };

  const locations = ["Lagos", "Abuja", "Port Harcourt", "Kano", "Enugu"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    navigate("/verify/12");
    // Add form submission logic here
  };

  return (
    <div>
      <form className="form farmer_form" onSubmit={handleSubmit}>
        <h1>Personal Information</h1>
        <div className="form_field">
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              name="fullName"
              type="text"
              placeholder="Enter your Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              name="dateOfBirth"
              type="text"
              placeholder="Enter your Date of Birth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form_field">
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              name="phoneNumber"
              type="text"
              placeholder="Enter your Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form_field">
          <div>
            <label htmlFor="addressVerification">Address Verification</label>
            <select
              name="addressVerification"
              value={formData.addressVerification}
              onChange={handleChange}
            >
              <option value="govermentIssued">Government Issued ID</option>
            </select>
          </div>
          <div>
            <label htmlFor="verificationNumber">
              Identity Verification Number
            </label>
            <input
              name="verificationNumber"
              type="text"
              placeholder="Enter your Identity Verification Number"
              value={formData.verificationNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form_field">
          <div>
            <label htmlFor="location">Location</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
            >
              <option value="">Select your Location</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="homeAddress">Home Address</label>
            <input
              name="homeAddress"
              type="text"
              placeholder="Enter your Home Address"
              value={formData.homeAddress}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form_field">
          <div className="custom_file_input">
            <input name="utilityBill" type="file" onChange={handleChange} />
            <div>
              <h2>
                <img src={uploadicon} alt="" />
                <span>
                  {formData.utilityBill || "Upload your Utility Bill"}
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="farm_info">
          <h1>Farm Information</h1>
          <div className="form_field">
            <div>
              <label htmlFor="farmName">Farm Name</label>
              <input
                name="farmName"
                type="text"
                placeholder="Enter Farm Name"
                value={formData.farmName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="farmLocation">Farm Location</label>
              <input
                name="farmLocation"
                type="text"
                placeholder="Enter Farm Location"
                value={formData.farmLocation}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form_field">
            <div>
              <label htmlFor="farmLocalGovernment">
                Farm Local Government Area
              </label>
              <input
                name="farmLocalGovernment"
                type="text"
                placeholder="Enter Farm Local Government Area"
                value={formData.farmLocalGovernment}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="farmAddress">Farm Address</label>
              <input
                name="farmAddress"
                type="text"
                placeholder="Enter Farm Address"
                value={formData.farmAddress}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form_field">
            <div className="custom_file_input">
              <input
                name="farmOwnershipProof"
                type="file"
                onChange={handleChange}
              />
              <div>
                <h2>
                  <img src={uploadicon} alt="" />
                  <span>
                    {formData.farmOwnershipProof ||
                      "Upload Farm Ownership Proof"}
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="form_field">
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Re-enter Password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Re-enter Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="agreement">
          <input
            type="checkbox"
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={handleChange}
          />
          <span>
            I have read and agree to the{" "}
            <Link to="/terms-of-service">Terms of Service</Link> and{" "}
            <Link to="/privacy-policy">Privacy Policy</Link>.
          </span>
        </div>
        <button type="submit">Create Account</button>
      </form>
      <p className="no_account">
        Don't have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default FarmerForm;
