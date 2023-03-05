import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
