import React, { useEffect, useState } from "react";
import "./FoodItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQty } from "../../store/slice/CardSlice";
import { assets } from "../../assets/assets";
import axios from "axios";

const url = import.meta.env.VITE_FOOD_URL;

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  const selectToken = useSelector((state) => state.card.token);
  // console.log(selector)
  const dispatch = useDispatch();

  const handleAdd = (id, itemCount, name, price, image) => {
    if (selectToken) {
      const headers = {
        token: localStorage.getItem("token"),
      };
      const itemId = id;

      // console.log( itemId);
      axios
        .post(`${url}/api/cart/add`, { itemId }, { headers })

        .then((res) => {
           console.log(res);

          // console.log(res.data);
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
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleDecrement = (id) => {
    if (selectToken) {
      const headers = {
        token: localStorage.getItem("token"),
      };
      const itemId = id;

      axios
        .post(`${url}/api/cart/remove`, { itemId }, { headers })

        .then((res) => {
          console.log(res);

          console.log(res.data);

          dispatch(decrementQty(id));
          setItemCount((prev) => prev - 1);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

 
  useEffect(() => {
    const headers = {
      token: selectToken ,
    };
    async function loadData() {
      // ! handle response 
      const response = axios.post(`${url}/api/cart/get`, {}, { headers });
     
      const data= (await(await response).data.cartData);
      
             
      // console.log("get Data1", data);
      
      Object.entries(data).forEach(([key, value]) => {
        // console.log(`${key} ${value}`); 

        id===key ? setItemCount(value):""
      });
       
    }
    loadData();
    
  }, [setItemCount, selectToken ,itemCount,id]);

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
