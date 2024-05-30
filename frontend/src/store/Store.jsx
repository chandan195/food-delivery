import { configureStore } from "@reduxjs/toolkit";
import AllProductSlice from "./slice/AllProductSlice";
import Card from "./slice//CardSlice";
const store = configureStore({
  reducer: {
    allProduct: AllProductSlice,
    card: Card
  },
});
export default store;
