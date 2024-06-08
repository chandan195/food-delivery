import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const CardTotal = ({ buttonTitle }) => {
  // console.log(buttonTitle);
  const navigate = useNavigate();
  const cardItems = useSelector((state) => state.card.Card);
  const grandTotal = cardItems.reduce(
    (price, item) => price + item.price * item.qty,
    0
  );
  const deliveryFee = 2;
  //   console.log(grandTotal);

  return (
    <div className="card-total">
      <h2>Card Total</h2>
      <div className="card-total-details">
        <p>Subtotal</p>
        <p>{grandTotal}</p>
      </div>
      <hr />
      <div className="card-total-details">
        <p>Delivery Fee</p>
        <p>{deliveryFee}</p>
      </div>
      <hr />
      <div className="card-total-details">
        <p>ToTal</p>
        <p>{grandTotal + deliveryFee}</p>
      </div>
      {buttonTitle === "Proceed to checkout" ? (
        <button onClick={() => navigate("/order")}>Proceed to checkout</button>
      ) : (
        <button>Proceed to Payment</button>
      )}
    </div>
  );
};

export default CardTotal;
