import React from "react";
import { useLocation } from "react-router-dom";
import "./FoodDetailsPage.css";

import myImg from "../../static/images/img.jpg";
import salaryImg from "../../static/images/salary_icon.png";
import jobTypeImg from "../../static/images/job_type_icon.png";
import positionImg from "../../static/images/position_icon.png";

const FoodDetailsPage = () => {
  const location = useLocation();

  const jobProps = location.state?.jobProps || {
    id: 1,
    food_title: "Food Item",
    image:
      "data:image/jpeg;base64,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",
    tags: ["spicy", "flavourful"],
    description: "Description of the food item",
    mode: "dine-in/delivery",
    portion: "full/half",
    type: "veg",
    price: "100",
    food_type: "Indian",
  };
  const customClassName = jobProps.work_type;

  return (
    <div>
      <div className="job-detail-header-div">
        <span className={`${customClassName}_detail  job-detail-heading`}>
          {jobProps.food_title}
        </span>
      </div>
      <br />
      <br />
      <br />
      <div className="job-detail-card">
        <div className="imgbox">
          <div className="square-content">
            <img src={jobProps.image} alt="Logo" />
          </div>
        </div>

        <div className="content">
          <h2
            className="job-heading"
            style={{ padding: "0", fontSize: "3rem", fontWeight: "900" }}
          >
            {jobProps.food_title}
          </h2>
          <h2 className="job-heading">{jobProps.food_type}</h2>
          <div className="row">
            <div className="item">{jobProps.mode}</div>
            <div className="dot"></div>
            <div className="item">{jobProps.portion}</div>
            <div className="dot"></div>
            <div className="item">{jobProps.type}</div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="icons-row">
        <div className="item">
          <img src={salaryImg} alt="salary-img" className="icon-img" />
          <h4 className="icon-text">Price</h4>
          <h4 className="icon-value">{jobProps.price}</h4>
        </div>

        <div class="item" style={{ marginLeft: "10px" }}>
          <img src={jobTypeImg} alt="salary-img" className="icon-img" />
          <h4 className="icon-text">Food Type</h4>
          <h4 className="icon-value">{jobProps.food_type}</h4>
        </div>

        <div class="item">
          <img src={positionImg} alt="salary-img" className="icon-img" />
          <h4 className="icon-text">Size</h4>
          <h4 className="icon-value">{jobProps.portion}</h4>
        </div>
      </div>
      <div className="job-details-description">
        <h2 className="heading">Description</h2>
        <p className="content">{jobProps.description}</p>
      </div>
      <div className="apply-now-div">
        <button className={`${customClassName}_button  apply-now`}>
          Buy/Order Now
        </button>
        {/* <button className='apply-now'>Apply Now</button> */}
      </div>
    </div>
  );
};

export default FoodDetailsPage;
