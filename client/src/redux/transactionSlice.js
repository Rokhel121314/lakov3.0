import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import format from "date-fns/format";

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
    filteredTransactionList: [],
    transactionDetail: [],
    sortedTransaction: [],
    totalTransactionQuantity: [],
    totalTransactionAmount: [],
    totalTransactionCost: [],
    totalTransactions: 0,
    totalTransactionProfit: 0,
    soldItemsList: [],
    salesDataByQuantity: [],
    isLoading: true,
  },
  reducers: {
    getTransactionDetail: (state, { payload }) => {
      state.transactionDetail = payload;
    },
    getTransactionTotals: (state, { payload }) => {
      state.totalTransactionQuantity = state.filteredTransactionList
        .map((product) => product.transaction_sold_quantity)
        .reduce((a, b) => a + b, 0);

      state.totalTransactionAmount = state.filteredTransactionList
        .map((product) => product.transaction_sold_amount)
        .reduce((a, b) => a + b, 0);

      state.totalTransactionProfit = state.filteredTransactionList
        .map((product) => product.transaction_profit_amount)
        .reduce((a, b) => a + b, 0);

      state.totalTransactionCost = state.filteredTransactionList
        .map((product) => product.transaction_cost_amount)
        .reduce((a, b) => a + b, 0);

      state.soldItemsList = state.filteredTransactionList
        .map((transaction) => transaction.transaction_sold_items)
        .flat();

      state.totalTransactions = state.filteredTransactionList.length;
    },

    getSalesByQuantity: (state, { payload }) => {
      state.salesDataByQuantity = [];
      const filteredSoldProduct = payload.map(
        (product) =>
          (state.soldItemsList
            .filter((sold) => {
              return sold._id === product._id;
            })
            .map((prod) => prod.item_quantity)
            .reduce((a, b) => a + b, 0) /
            state.totalTransactionQuantity) *
          100
      );

      for (let i = 0; i < filteredSoldProduct.length; i++) {
        state.salesDataByQuantity.push({
          product_name: payload[i].product_name,
          sold_quantity_percentage: parseFloat(filteredSoldProduct[i]),
        });
      }

      state.salesDataByQuantity.sort((a, b) =>
        a.sold_quantity_percentage > b.sold_quantity_percentage ? -1 : 1
      );
    },

    // getSalesByProfit: (state, { payload }) => {
    //   const filteredSoldProduct = payload.map(
    //     (product) =>
    //       (state.soldItemsList
    //         .filter((sold) => {
    //           return sold._id === product._id;
    //         })
    //         .map((prod) => prod.item_quantity)
    //         .reduce((a, b) => a + b, 0) /
    //         state.totalTransactionQuantity) *
    //       100
    //   );

    //   for (let i = 0; i < filteredSoldProduct.length; i++) {
    //     state.salesDataByQuantity.push({
    //       product_name: payload[i].product_name,
    //       sold_quantity_percentage: parseFloat(filteredSoldProduct[i]),
    //     });
    //   }
    // },

    sortBySoldQtyAsc: (state, { payload }) => {
      state.sortedTransaction = state.filteredTransactionList.sort((a, b) =>
        a.transaction_sold_quantity > b.transaction_sold_quantity ? -1 : 1
      );
    },

    sortBySoldQtyDsc: (state, { payload }) => {
      state.sortedTransaction = state.filteredTransactionList.sort((a, b) =>
        a.transaction_sold_quantity > b.transaction_sold_quantity ? 1 : -1
      );
    },

    sortBySoldAmountAsc: (state, { payload }) => {
      state.sortedTransaction = state.filteredTransactionList.sort((a, b) =>
        a.transaction_sold_amount > b.transaction_sold_amount ? -1 : 1
      );
    },

    sortBySoldAmountDsc: (state, { payload }) => {
      state.sortedTransaction = state.filteredTransactionList.sort((a, b) =>
        a.transaction_sold_amount > b.transaction_sold_amount ? 1 : -1
      );
    },

    sortBySoldDateAsc: (state, { payload }) => {
      state.sortedTransaction = state.filteredTransactionList.sort((a, b) =>
        a.createdAt > b.createdAt ? -1 : 1
      );
    },

    sortBySoldDateDsc: (state, { payload }) => {
      state.sortedTransaction = state.filteredTransactionList.sort((a, b) =>
        a.createdAt > b.createdAt ? 1 : -1
      );
    },

    searchFilter: (state, { payload }) => {
      state.filteredTransactionList = state.transactionList.filter(
        (transaction) => {
          return transaction._id.toLowerCase().includes(payload.toLowerCase());
        }
      );
      state.transactionDetail = state.filteredTransactionList[0];
    },

    filterByDate: (state, { payload }) => {
      state.filteredTransactionList = state.transactionList?.filter(
        (transaction) => {
          const transactionDate = format(
            new Date(transaction.createdAt),
            "MM/dd/yyyy"
          );
          return (
            transactionDate >= format(payload[0].startDate, "MM/dd/yyyy") &&
            transactionDate <= format(payload[0].endDate, "MM/dd/yyyy")
          );
        }
      );
      state.transactionDetail = state.filteredTransactionList[0];
    },
  },
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
        state.transactionList = payload.sort((a, b) =>
          a.createdAt > b.createdAt ? -1 : 1
        );
        state.transactionDetail = payload[0];
        state.filteredTransactionList = state.transactionList;
        state.isLoading = false;
      })
      .addCase(readAllTransactions.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const {
  getTransactionDetail,
  getTransactionTotals,
  sortBySoldAmountAsc,
  sortBySoldAmountDsc,
  sortBySoldQtyAsc,
  sortBySoldQtyDsc,
  sortBySoldDateAsc,
  sortBySoldDateDsc,
  searchFilter,
  filterByDate,
  getAllSoldItems,
  getSalesByQuantity,
} = transactionSlice.actions;
export default transactionSlice.reducer;
