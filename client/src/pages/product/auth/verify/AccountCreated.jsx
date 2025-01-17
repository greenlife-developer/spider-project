import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import back from "../../../../assets/images/icons/backarrow.png";
import forward from "../../../../assets/images/icons/frontarrow.png";
import fruits from "../../../../assets/images/product/fruits.png";
import checkedcircle from "../../../../assets/images/icons/checkedcircle.png";

const AccountCreated = () => {
  const navigate = useNavigate();
  const { type } = useParams();

  const handleSetUpProfile = () => {
    alert(`Setting up profile`);
    navigate(`/profile/${type}`);
  };

  const handleGoToDashboard = () => {
    alert("Going to dashboard");
    navigate(`/dashboard/${type}`);
  };

  return (
    <div className="verify_otp_page created">
      <div className="">
        <img className="checked" src={checkedcircle} alt="" />
        <h1>Account Successfully Created</h1>
        <p>
          Congratulations! Your SPIDA {type} account has been successfully
          created.
        </p>
        <div className="verify_actions">
          <div className="">
            <button onClick={handleGoToDashboard} className="back">
              <img src={back} alt="" />
              <span>Go to Dashboard</span>
            </button>
            <button onClick={handleSetUpProfile} className="verify">
              <span>Set Up Profile</span>
              <img src={forward} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="flower">
        <img src={fruits} alt="" className="fruits" />
      </div>
    </div>
  );
};

export default AccountCreated;
