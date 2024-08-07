import { createSlice } from "@reduxjs/toolkit";

  const tokenData =localStorage.getItem("token");
const CardSlice = createSlice({
  name: "Card",
  initialState: {
    Card: [],
   token:tokenData,
  },

  reducers: {
   
    

    addToCart: (state, action) => {
      // console.log(action.payload)
      const existingItem = state.Card.find(
        (item) => item.id === action.payload.id
      );
      
      if (existingItem) {
        state.Card = state.Card.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.Card.push(action.payload);
      }
    console.log(action.payload);
    },
    removeFromCart: (state, action) => {
      state.Card = state.Card.filter((item) => item.id !== action.payload);
    },


    decrementQty: (state, action) => {
      //* ToDo: handle increment
      state.Card = state.Card.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export const { addToCart, removeFromCart,  decrementQty} =
  CardSlice.actions;
export default CardSlice.reducer;
