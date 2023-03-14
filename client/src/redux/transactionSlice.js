import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    addedTransaction: [],
    transactionList: [],
    transactionDetail: [],
    sortedTransaction: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {},
});

export default transactionSlice.reducer;
