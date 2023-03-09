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

// DELETE PRODUCT FROM DATABASE
export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (productAndUserId) => {
    const { user_id, product_id } = productAndUserId;
    try {
      const { data } = await Axios.delete(
        `http://localhost:3001/products/${user_id}/${product_id}`,
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
    productIndex: [],
    isLoading: false,
    isSuccess: false,
  },
  reducers: {
    getProductDetail: (state, { payload }) => {
      state.productDetail = payload;
    },
    getProductIndex: (state, { payload }) => {
      state.productIndex = payload;
    },
    getNextProductDetail: (state, { payload }) => {
      if (payload < state.allProductData.length - 1) {
        state.productDetail = state.allProductData[payload + 1];
      } else if (state.allProductData.length < 2) {
        state.productDetail = [];
      } else {
        state.productDetail = state.allProductData[0];
        state.productIndex = 0;
      }
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
      })
      .addCase(deleteProduct.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        // state.productDetail = payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});
export const { getProductDetail, getProductIndex, getNextProductDetail } =
  productSlice.actions;
export default productSlice.reducer;