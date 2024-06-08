import React from "react";
import "./EmptyCard.css";
import {assets} from "../../assets/assets"
const EmptyCard = () => {
  return (
    <div className="empty-card">
      <div className="empty-card-header">
        <h2>Card is Empty</h2>
      </div>
      <div className="empty-card-content">
        {/* <p>Content</p> */}
        <img src={assets.empty_card} alt="" className=""/>
      </div>
    </div>
  );
};

export default EmptyCard;
