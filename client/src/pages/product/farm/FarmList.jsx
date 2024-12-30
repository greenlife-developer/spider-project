import React from "react";
import { useNavigate } from "react-router-dom";

import farmImg from "../../../assets/images/farmimg.png";

import "./farm.css";

const FarmList = () => {
  const navigate = useNavigate()

  const handleAddNewFarm = () => {
    navigate("/my-farm/new");
  }
  return (
    <div className="all_farms">
      <h1>List of Farms</h1>

      <div className="farm_items">
        <div className="farm_item">
          <h3>1</h3>
          <div className="item_img">
            <img src={farmImg} alt="" />
            <div className="item_name">
              <h3>Name of Farm</h3>
              <p>Adisa Farm</p>
            </div>
          </div>
          <div className="item_loc">
            <h3>Farm Location</h3>
            <p>Ogun State</p>
          </div>
          <div className="item_size">
            <h3>Farm Size</h3>
            <p>200 Acres</p>
          </div>
          <div className="item_crops">
            <h3>Crops Grown</h3>
            <p>Beans, Rice, Millet</p>
          </div>
        </div>
        <div className="farm_item">
          <h3>2</h3>
          <div className="item_img">
            <img src={farmImg} alt="" />
            <div className="item_name">
              <h3>Name of Farm</h3>
              <p>Adisa Farm</p>
            </div>
          </div>
          <div className="item_loc">
            <h3>Farm Location</h3>
            <p>Ogun State</p>
          </div>
          <div className="item_size">
            <h3>Farm Size</h3>
            <p>200 Acres</p>
          </div>
          <div className="item_crops">
            <h3>Crops Grown</h3>
            <p>Beans, Rice, Millet</p>
          </div>
        </div>
        <div className="farm_item">
          <h3>1</h3>
          <div className="item_img">
            <img src={farmImg} alt="" />
            <div className="item_name">
              <h3>Name of Farm</h3>
              <p>Adisa Farm</p>
            </div>
          </div>
          <div className="item_loc">
            <h3>Farm Location</h3>
            <p>Ogun State</p>
          </div>
          <div className="item_size">
            <h3>Farm Size</h3>
            <p>200 Acres</p>
          </div>
          <div className="item_crops">
            <h3>Crops Grown</h3>
            <p>Beans, Rice, Millet</p>
          </div>
        </div>
        <div className="farm_item">
          <h3>2</h3>
          <div className="item_img">
            <img src={farmImg} alt="" />
            <div className="item_name">
              <h3>Name of Farm</h3>
              <p>Adisa Farm</p>
            </div>
          </div>
          <div className="item_loc">
            <h3>Farm Location</h3>
            <p>Ogun State</p>
          </div>
          <div className="item_size">
            <h3>Farm Size</h3>
            <p>200 Acres</p>
          </div>
          <div className="item_crops">
            <h3>Crops Grown</h3>
            <p>Beans, Rice, Millet</p>
          </div>
        </div>
        <div className="farm_item">
          <h3>1</h3>
          <div className="item_img">
            <img src={farmImg} alt="" />
            <div className="item_name">
              <h3>Name of Farm</h3>
              <p>Adisa Farm</p>
            </div>
          </div>
          <div className="item_loc">
            <h3>Farm Location</h3>
            <p>Ogun State</p>
          </div>
          <div className="item_size">
            <h3>Farm Size</h3>
            <p>200 Acres</p>
          </div>
          <div className="item_crops">
            <h3>Crops Grown</h3>
            <p>Beans, Rice, Millet</p>
          </div>
        </div>
        <div className="farm_item">
          <h3>2</h3>
          <div className="item_img">
            <img src={farmImg} alt="" />
            <div className="item_name">
              <h3>Name of Farm</h3>
              <p>Adisa Farm</p>
            </div>
          </div>
          <div className="item_loc">
            <h3>Farm Location</h3>
            <p>Ogun State</p>
          </div>
          <div className="item_size">
            <h3>Farm Size</h3>
            <p>200 Acres</p>
          </div>
          <div className="item_crops">
            <h3>Crops Grown</h3>
            <p>Beans, Rice, Millet</p>
          </div>
        </div>
      </div>

      <div className="add_new_farm">
        <button onClick={handleAddNewFarm}>Add new farm</button>
      </div>
    </div>
  );
};

export default FarmList;
