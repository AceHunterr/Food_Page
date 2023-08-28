import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import "./FoodCard.css";

const FoodCard = (props) => {
  const navigate = useNavigate();
  const navigatetoJobDetails = () => {
    navigate("/food-details", { state: { jobProps: props } });
  };

  const navigatetoTagsPage = () => {
    navigate("/tags");
  };

  const customClassName = props.work_type;
  return (
    <div className="jobList">
      <div key={props.id} className={`${customClassName} jobCard`}>
        <div className="jobCard__content">
          <div className="jobCard__header" onClick={navigatetoJobDetails}>
            <img src={props.image} alt="job-img" className="jobImage" />
            <h3 className="jobName ">{props.food_title}</h3>
          </div>
          {/* <FaRegBookmark className={`jobCard__wishlist ${isSaved ? 'saved' : ''}`} onClick={handleBookmarkClick} /> */}
          <FaRegBookmark className="jobCard__wishlist" />
          <h3 className="jobCompany">{props.price}</h3>
          <div className="displayStack__1">
            <div className="tagsContainer">
              {props.tags.map((tag, index) => (
                <span
                  key={index}
                  className="tagItem"
                  onClick={navigatetoTagsPage}
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* <div className="displayStack__2">
              <div className="jobview" onClick={navigatetoJobDetails}>
                {props.view}
              </div>
              <div className="jobview" onClick={navigatetoJobDetails}>
                {props.share}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
