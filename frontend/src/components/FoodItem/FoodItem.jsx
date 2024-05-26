import React, { useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
const FoodItem = ({ id, name, price, description, image }) => {
  // console.log(name);
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="add" className="food-item-image" />
        {!itemCount ? (
          <img
            src={assets.add_icon_white}
            onClick={() => setItemCount((prev) => prev + 1)}
            alt="icon"
            className="add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="remove-icon"
              className="food-item"
              onClick={() => setItemCount((prev) => prev - 1)}
            />
            <p>{itemCount}</p>
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt="add-icon"
              className="food-item"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
