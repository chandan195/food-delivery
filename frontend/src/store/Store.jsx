import { configureStore } from "@reduxjs/toolkit";
import AllProductSlice from "./slice/AllProductSlice";
const store = configureStore({
  reducer: {
    allProduct: AllProductSlice,
  },
});
export default store;
