import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/userSlice";
import productSlice from "./redux/productSlice";
import counterSlice from "./redux/counterSlice";
import transactionSlice from "./redux/transactionSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    counter: counterSlice,
    transaction: transactionSlice,
  },
});

export default store;
