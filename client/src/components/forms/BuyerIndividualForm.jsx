import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uploadicon from "../../assets/images/product/uploadicon.png";

const initialFormState = {
  fullName: "",
  phoneNumber: "",
  email: "",
  location: "",
  identityType: "governmentId",
  idNumber: "",
  password: "",
  confirmPassword: "",
  address: "",
  agreement: false,
};

const BuyerIndividualForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    navigate("/plans");
    // You can handle the form submission logic here, such as sending data to an API
  };

  return (
    <div>
      <form className="form farmer_form" onSubmit={handleSubmit}>
        <div className="form_field">
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              name="fullName"
              type="text"
              placeholder="Enter Full Name"
              value={formData.fullName}
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
            <label htmlFor="email">Email Address</label>
            <input
              name="email"
              type="text"
              placeholder="Enter your Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input
              name="location"
              type="text"
              placeholder="Enter your Location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form_field">
          <div>
            <label htmlFor="identityType">Identity Verification</label>
            <select
              name="identityType"
              value={formData.identityType}
              onChange={handleChange}
            >
              <option value="governmentId">Government Issued ID</option>
            </select>
          </div>
          <div>
            <label htmlFor="idNumber">Identity Verification Number</label>
            <input
              name="idNumber"
              type="text"
              placeholder="Enter your Identity Verification Number"
              value={formData.idNumber}
              onChange={handleChange}
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

        <div className="form_field">
          <div>
            <label htmlFor="address">Full Address (with landmarks)</label>
            <textarea
              name="address"
              rows="4"
              placeholder="Enter your Full Address with landmarks"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="agreement">
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
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
        Don't have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default BuyerIndividualForm;
