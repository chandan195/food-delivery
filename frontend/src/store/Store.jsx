import { configureStore } from "@reduxjs/toolkit";
import AllProductSlice from "./AllProductSlice";
const store = configureStore({
  reducer: {
    allProduct: AllProductSlice,
  },
});
export default store;
