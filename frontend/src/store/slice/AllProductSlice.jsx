import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const url = "http://localhost:4000";
//make action
export const fetchAuth = createAsyncThunk("fetchAuth", async () => {
  const response = await axios.get(`${url}/api/food/list`);
  console.log(response.data);
  return response.data;
  
});

const AllProductsSlice = createSlice({
  name: "allProduct",
  initialState: {
    isLoading: false,
    data: {},
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state, action) => {
        state.isLoading = true;
        // console.log("Loading",action.payload)
      })

      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(fetchAuth.rejected, (state, action) => {
        state.isError = true;
        // console.log("Error",action.payload)
      });
  },
});

export default AllProductsSlice.reducer;
