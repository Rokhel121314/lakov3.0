import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

// API REQUEST
// FUNCTION FOR ADDING PRODUCT TO DATABASE
export const addProduct = createAsyncThunk(
  "product/add",
  async (formData, user_id) => {
    try {
      const { data } = await Axios.post(
        `http://localhost:3001/products/${user_id}`,
        formData
      );
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

// CREATING PRODUCT SLICE
export const productSlice = createSlice({
  name: "product",
  initialState: {
    productData: [],
    isLoading: false,
    isSuccess: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.productData = payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addProduct.rejected, (state, { payload }) => {
        state.productData = payload;
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

export default productSlice.reducer;
