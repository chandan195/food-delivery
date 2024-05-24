import { createSlice } from "@reduxjs/toolkit";

const AllProductsSlice = createSlice({
  name: "All_Products",
  initialState: {
    allProduct: [],
  },
  reducers: {
    product: (state, action) => {
      state.allProduct.push(action.payload);
    },
  },
});

export const {product} =AllProductsSlice.actions;
export default AllProductsSlice.reducer;
