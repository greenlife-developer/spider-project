import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import uploadicon from "../../assets/images/product/uploadicon.png";

const initialFormState = {
  businessName: "",
  businessPhone: "",
  businessEmail: "",
  businessLocation: "",
  businessRegNumber: "",
  idNumber: "",
  password: "",
  confirmPassword: "",
  fullAddress: "",
  contactName: "",
  contactTitle: "",
  contactEmail: "",
  contactPhone: "",
  agreement: false,
};

const BuyerBusinessForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const navigate = useNavigate();

  const validateInput = (name, value) => {
    if (
      (name === "businessPhone" || name === "contactPhone") &&
      !/^[0-9]*$/.test(value)
    ) {
      return false; // Validate numeric input for phone numbers
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      if (!validateInput(name, value)) return;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate formData before submission
    if (!formData.agreement) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    console.log("Submitted Data:", formData);
    navigate("/plans");
    // Add API call or further processing here
  };

  return (
    <div>
      <form className="form farmer_form" onSubmit={handleSubmit}>
        <h1>Business Information</h1>

        <div className="form_field">
          <div>
            <label htmlFor="businessName">Business Name</label>
            <input
              name="businessName"
              type="text"
              placeholder="Enter Business Name"
              onChange={handleChange}
              value={formData.businessName}
            />
          </div>
          <div>
            <label htmlFor="businessPhone">Business Phone Number</label>
            <input
              name="businessPhone"
              type="text"
              placeholder="Enter your Business Phone Number"
              onChange={handleChange}
              value={formData.businessPhone}
            />
          </div>
        </div>

        <div className="form_field">
          <div>
            <label htmlFor="businessEmail">Business Email Address</label>
            <input
              name="businessEmail"
              type="email"
              placeholder="Enter your Business Email Address"
              onChange={handleChange}
              value={formData.businessEmail}
            />
          </div>
          <div>
            <label htmlFor="businessLocation">Business Location</label>
            <select
              name="businessLocation"
              onChange={handleChange}
              value={formData.businessLocation}
            >
              <option value="">Select Your Location (City)</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Port Harcourt">Port Harcourt</option>
            </select>
          </div>
        </div>

        <div className="form_field">
          <div>
            <label htmlFor="businessRegNumber">
              Business Registration Number
            </label>
            <input
              name="businessRegNumber"
              type="text"
              placeholder="Enter your Business Registration Number"
              onChange={handleChange}
              value={formData.businessRegNumber}
            />
          </div>
          <div>
            <label htmlFor="idNumber">Identity Verification Number</label>
            <input
              name="idNumber"
              type="text"
              placeholder="Enter your Identity Verification Number"
              onChange={handleChange}
              value={formData.idNumber}
            />
          </div>
        </div>

        <div className="form_field">
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Re-enter Password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Re-enter Password"
              onChange={handleChange}
              value={formData.confirmPassword}
            />
          </div>
        </div>

        <div className="form_field">
          <div>
            <label htmlFor="fullAddress">Full Address (with landmarks)</label>
            <textarea
              name="fullAddress"
              rows="4"
              placeholder="Enter your Full Address with landmarks"
              onChange={handleChange}
              value={formData.fullAddress}
            />
          </div>
        </div>

        <div className="authorized_person">
          <h1>Contact Person Information</h1>
          <div className="form_field">
            <div>
              <label htmlFor="contactName">Full Name</label>
              <input
                name="contactName"
                type="text"
                placeholder="Enter Full Name"
                onChange={handleChange}
                value={formData.contactName}
              />
            </div>
            <div>
              <label htmlFor="contactTitle">Title</label>
              <input
                name="contactTitle"
                type="text"
                placeholder="Enter Title"
                onChange={handleChange}
                value={formData.contactTitle}
              />
            </div>
          </div>
          <div className="form_field">
            <div>
              <label htmlFor="contactEmail">Corporate Email Address</label>
              <input
                name="contactEmail"
                type="email"
                placeholder="Enter your Corporate Email Address"
                onChange={handleChange}
                value={formData.contactEmail}
              />
            </div>
            <div>
              <label htmlFor="contactPhone">Official Phone Number</label>
              <input
                name="contactPhone"
                type="text"
                placeholder="Enter your Official Phone Number"
                onChange={handleChange}
                value={formData.contactPhone}
              />
            </div>
          </div>
        </div>

        <div className="agreement">
          <input
            type="checkbox"
            name="agreement"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                agreement: e.target.checked,
              }))
            }
            checked={formData.agreement}
          />
          <span>
            I have read and agree to the{" "}
            <Link to="/terms-of-service">Terms of Service</Link> and{" "}
            <Link to="/privacy-policy">Privacy Policy.</Link>
          </span>
        </div>

        <button type="submit">Create Account</button>
      </form>
      <p className="no_account">
        Dont have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default BuyerBusinessForm;
