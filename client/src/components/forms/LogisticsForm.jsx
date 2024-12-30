import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uploadicon from "../../assets/images/product/uploadicon.png";

const initialFormState = {
  companyName: "",
  registrationNumber: "",
  taxIdentificationNumber: "",
  specialization: "",
  email: "",
  location: "",
  fullAddress: "",
  businessLicense: "",
  vehicleType: "",
  vehicleRegistrationNumber: "",
  vehicleCapacity: "",
  vehicleMakeModel: "",
  authorizedSignatoryName: "",
  authorizedSignatoryPosition: "",
  authorizedSignatoryPhone: "",
  authorizedSignatoryId: "",
  password: "",
  confirmPassword: "",
  termsAgreed: false,
};

const LogisticsForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const navigate = useNavigate()

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    navigate("/plans")
    // Add form submission logic here
  };

  return (
    <div>
      <form className="form logistics_form" onSubmit={handleSubmit}>
        <h1>Company Information</h1>
        <div className="form_field">
          <div>
            <label htmlFor="companyName">Registered Company Name</label>
            <input
              name="companyName"
              type="text"
              placeholder="Enter Company Name"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="registrationNumber">
              Business Registration Number
            </label>
            <input
              name="registrationNumber"
              type="text"
              placeholder="Enter Business Registration Number"
              value={formData.registrationNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form_field">
          <div>
            <label htmlFor="taxIdentificationNumber">
              Tax Identification Number (TIN)
            </label>
            <input
              name="taxIdentificationNumber"
              type="text"
              placeholder="Enter Tax Identification Number (TIN)"
              value={formData.taxIdentificationNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="specialization">Nature of Logistics Services</label>
            <input
              name="specialization"
              type="text"
              placeholder="Enter Area of specialization"
              value={formData.specialization}
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
            <label htmlFor="fullAddress">Full Address (with landmarks)</label>
            <textarea
              name="fullAddress"
              rows="4"
              placeholder="Enter your Full Address with landmarks"
              value={formData.fullAddress}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form_field">
          <div className="custom_file_input">
            <input name="businessLicense" type="file" onChange={handleChange} />
            <div>
              <h2>
                <img src={uploadicon} alt="" />
                <span>
                  {formData.businessLicense || "Upload your Business License"}
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="vehicle_info">
          <h1>Vehicle Information</h1>
          <div className="form_field">
            <div>
              <label htmlFor="vehicleType">Type of Vehicle</label>
              <input
                name="vehicleType"
                type="text"
                placeholder="Enter Type of Vehicle (Truck, Van, etc)"
                value={formData.vehicleType}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="vehicleRegistrationNumber">
                Vehicle Registration Number
              </label>
              <input
                name="vehicleRegistrationNumber"
                type="text"
                placeholder="Enter Vehicle Registration Number"
                value={formData.vehicleRegistrationNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form_field">
            <div>
              <label htmlFor="vehicleCapacity">Capacity of Vehicle</label>
              <input
                name="vehicleCapacity"
                type="text"
                placeholder="Enter capacity in Kilograms, tonnes or bags"
                value={formData.vehicleCapacity}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="vehicleMakeModel">Vehicle Make and Model</label>
              <input
                name="vehicleMakeModel"
                type="text"
                placeholder="Enter Vehicle Make and Model"
                value={formData.vehicleMakeModel}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="authorized_person">
          <h1>Authorized Signatory Details</h1>
          <div className="form_field">
            <div>
              <label htmlFor="authorizedSignatoryName">Full Name</label>
              <input
                name="authorizedSignatoryName"
                type="text"
                placeholder="Enter Full Name"
                value={formData.authorizedSignatoryName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="authorizedSignatoryPosition">Position Held</label>
              <input
                name="authorizedSignatoryPosition"
                type="text"
                placeholder="Enter Position Held in the Company"
                value={formData.authorizedSignatoryPosition}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form_field">
            <div>
              <label htmlFor="authorizedSignatoryPhone">Phone Number</label>
              <input
                name="authorizedSignatoryPhone"
                type="text"
                placeholder="Enter Phone Number"
                value={formData.authorizedSignatoryPhone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="authorizedSignatoryId">
                Identification Card Number
              </label>
              <input
                name="authorizedSignatoryId"
                type="text"
                placeholder="Enter Identification Card Number"
                value={formData.authorizedSignatoryId}
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

export default LogisticsForm;
