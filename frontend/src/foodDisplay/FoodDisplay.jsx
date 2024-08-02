/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./FoodDisplay.css";
import { fetchAuth } from "../store/slice/AllProductSlice";
import { useDispatch, useSelector } from "react-redux";

import FoodItem from "../components/FoodItem/FoodItem";

const FoodDisplay = ({ category  }) => {
  const ListProduct = useSelector((state) => state.allProduct.data.data);
  // console.log(
  //   "list",
  //   useSelector((state) => state.allProduct)
  // );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuth());
    // console.log("dispatch", dispatch(fetchAuth()));
  }, [dispatch]);

  const url = "http://localhost:4000";
  return (
    <div className="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {ListProduct &&
          ListProduct.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={`${url}/images/${item.image}`}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default FoodDisplay;
