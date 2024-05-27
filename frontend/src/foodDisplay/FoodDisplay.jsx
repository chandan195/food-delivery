/* eslint-disable no-unused-vars */
import React from "react";
import "./FoodDisplay.css";

import { useDispatch, useSelector } from "react-redux";

import FoodItem from "../components/FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const AllProduct = useSelector((state) => state.allProduct.allProduct);
  // console.log("food", AllProduct);

  return (
    <div className="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {AllProduct[0].map((item, index) => {
          // console.log(item);
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};


export default FoodDisplay;
