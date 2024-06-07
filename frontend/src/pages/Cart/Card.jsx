import React from "react";
import "./Card.css";
import { useSelector } from "react-redux";
const Card = () => {
  const cardItems = useSelector((state) => state.card.Card);
  console.log(cardItems);

  return (
    <div className="card">
      <div className="card-item">
        <div className="card-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {cardItems.map((item, index) => {
          return (
            <div key={index}>
              <div  className="card-items-title card-items-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.qty}</p>
                <p>{item.price * item.qty}</p>
                <p className="cross">X</p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
