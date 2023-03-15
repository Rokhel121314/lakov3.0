import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

// CREATE TRANSACTION/ SUBMIT ORDER
export const createTransaction = createAsyncThunk(
  "transaction/create",
  async (transactionData) => {
    const { counterData, user_id } = transactionData;
    try {
      const { data } = await Axios.post(
        `http://localhost:3001/transactions/${user_id}`,
        counterData,
        { withCredentials: true }
      );
      return data;
    } catch (error) {
      console.log("error");
    }
  }
);

export const readAllTransactions = createAsyncThunk(
  "transaction/read",
  async (user_id) => {
    try {
      const { data } = await Axios.get(
        `http://localhost:3001/transactions/${user_id}`,
        { withCredentials: true }
      );
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(createTransaction.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(createTransaction.fulfilled, (state, { payload }) => {
        state.addedTransaction = payload;
        state.isLoading = false;
      })
      .addCase(createTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(readAllTransactions.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(readAllTransactions.fulfilled, (state, { payload }) => {
        state.transactionList = payload;
        state.isLoading = false;
      })
      .addCase(readAllTransactions.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export default transactionSlice.reducer;
