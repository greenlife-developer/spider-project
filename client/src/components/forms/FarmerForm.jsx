const FarmerForm = () => {
  return (
    <div>
      <form className="form">
        <h1>Personal information</h1>
        <div className="form_field">
          <div>
            <label htmlFor="password">Full Name</label>
            <input name="name" type="text" placeholder="Enter your Full Name" />
          </div>
          <div>
            <label htmlFor="password">Date of birth</label>
            <input
              name="dob"
              type="text"
              placeholder="Enter your Date of birth"
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
            />
          </div>
          <div>
            <label htmlFor="password">Date Phone number</label>
            <input
              name="phone"
              type="text"
              placeholder="Enter your Date Phone number"
            />
          </div>
        </div>
        <div className="form_field">
          <div>
            <label htmlFor="email">Address verification</label>
            {/* <input name="email" type="email" placeholder="Enter your Email Address" /> */}
            <select name="" id="">
              <option value="govermentIssued">Government Issued ID</option>
            </select>
          </div>
          <div>
            <label htmlFor="password">Identity Verification Number</label>
            <input
              name="verification"
              type="text"
              placeholder="Enter your Identity Verification Number"
            />
          </div>
        </div>
        <div className="form_field">
          <div>
            <label htmlFor="email">Location</label>
            {/* <input name="email" type="email" placeholder="Enter your Email Address" /> */}
            <select name="" id="">
              <option value="govermentIssued">Select your Location</option>
            </select>
          </div>
          <div>
            <label htmlFor="password">Home Address</label>
            <input
              name="address"
              type="text"
              placeholder="Enter your Home Address"
            />
          </div>
        </div>
        <div className="form_field">
          <div>
            <input name="email" type="file"/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FarmerForm;
