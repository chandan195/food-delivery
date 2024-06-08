import React, { useEffect } from "react";
import "./PlaceOrder.css";
import CardTotal from "../Cart/CardTotal";
const PlaceOrder = () => {
  const buttonTitle ="Proceed to Payment"
  useEffect(() => {
    document.title = "Food Delivery || PlaceOrder"
  }, [])
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery</p>
        <div className="multi-field">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
        </div>
        <input type="email" placeholder="email" />
        <input type="text" placeholder="street" />

        <div className="multi-field">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <div className="multi-field">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div className="place-order-right">
        <CardTotal  buttonTitle={buttonTitle} />
      </div>
    </form>
  );
};

export default PlaceOrder;
