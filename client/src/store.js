import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/userSlice";
import productSlice from "./redux/productSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
  },
});

export default store;
