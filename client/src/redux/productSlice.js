import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

// API REQUEST
// FUNCTION FOR ADDING PRODUCT TO DATABASE
export const addProduct = createAsyncThunk(
  "product/add",
  async (dispatchData) => {
    const { formData, user_id } = dispatchData;

    try {
      const { data } = await Axios.post(
        `http://localhost:3001/products/${user_id}`,
        formData,
        { withCredentials: true }
      );
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

// REQUEST FOR READING ALL PRODUCT FORM DATABASE
export const readAllProduct = createAsyncThunk(
  "product/read",
  async (user_id) => {
    try {
      const { data } = await Axios.get(
        `http://localhost:3001/products/${user_id}`,
        { withCredentials: true }
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
    allProductData: [],
    productDetail: [],
    isLoading: false,
    isSuccess: false,
  },
  reducers: {
    getProductDetail: (state, { payload }) => {
      state.productDetail = payload;
    },
  },
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
      })
      .addCase(readAllProduct.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(readAllProduct.fulfilled, (state, { payload }) => {
        state.allProductData = payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(readAllProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});
export const { getProductDetail } = productSlice.actions;
export default productSlice.reducer;
