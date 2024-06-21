import { configureStore } from "@reduxjs/toolkit";
import AllProductSlice from "./slice/AllProductSlice";
import AuthSlice from "./slice/AuthSlice"
import Card from "./slice//CardSlice";
const store = configureStore({
  reducer: {
    allProduct: AllProductSlice,
    card: Card,
    auth: AuthSlice
  },
});
export default store;
