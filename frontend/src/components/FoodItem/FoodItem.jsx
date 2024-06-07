import React, { useState } from "react";
import "./FoodItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQty } from "../../store/slice/CardSlice";
import { assets } from "../../assets/assets";
const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  // console.log(addedItems)

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addToCart({
        id: id,
        name: name,
        price: price,
        image: image,
        qty: 1,
      })
    );
    setItemCount((prev) => prev + 1);
  };

  const handleDecrement = (id) => {
    dispatch(decrementQty(id));
    setItemCount((prev) => prev - 1);
  };
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="add" className="food-item-image" />

        {/* .................................. */}
        {!itemCount ? (
          <img
            src={assets.add_icon_white}
            onClick={() => handleAdd(id, itemCount, name, price, image)}
            // onClick={}
            alt="add To card icon"
            className="add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="remove-icon"
              className="food-item"
              onClick={() => handleDecrement(id)}
            />
            <p>{itemCount}</p>
            <img
              onClick={() => handleAdd(id, itemCount, name, price, image)}
              // onClick={() => setItemCount((prev) => prev + 1)}
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
