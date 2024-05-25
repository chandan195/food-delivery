import { createSlice } from "@reduxjs/toolkit";
import { food_list } from "../assets/assets";
const AllProductsSlice = createSlice({
  name: "allProduct",
  initialState: {
    allProduct: [food_list],
  },
  reducers: {
    product: (state, action) => {
      state.allProduct.push(action.payload);
    },
  },
});

export const {product} =AllProductsSlice.actions;
export default AllProductsSlice.reducer;
