import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name: 'Card',
    initialState:{
        Card:[],
    },
    reducers:{
        addToCart: (state, action) => {
            const existingItem = state. Card.find(
              (item) => item.id === action.payload.id
            );
            if (existingItem) {
              state.Card = state.Card.map((item) =>
                item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
              );
            } else {
              state.Card.push(action.payload);
            }
           
      
            // localStorage.setItem("cartItems", JSON.stringify(state.cart));
          },
          removeFromCart: (state, action) => {
            state.Card = state.Card.filter((item) => item.id !== action.payload);
            // localStorage.setItem("cartItems", JSON.stringify(state.cart));
          },

          incrementQty: (state, action) => {
            state.Card = state.Card.map((item) =>
              item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
            );
            // toast.success("Product qty increase from cart" ,{position:"top-center"})
            // localStorage.setItem("cartItems", JSON.stringify(state.cart));
          },
      
          decrementQty: (state, action) => {
            //* ToDo: handle increment
            state.Card = state.Card.map((item) =>
              item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
            );
      
            // toast.error("Product qty removed from cart", {
            //   position: "top-left",
            // });
            // localStorage.setItem("cartItems", JSON.stringify(state.cart));
          },

    }
});

export const {addToCart ,removeFromCart ,incrementQty ,decrementQty} =CardSlice.actions;
export default CardSlice.reducer;