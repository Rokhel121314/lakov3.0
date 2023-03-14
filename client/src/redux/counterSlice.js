import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterItems: [],
    onCounter: [],
    totalQuantity: 0,
  },
  reducers: {
    addProductToCounter: (state, { payload }) => {
      state.onCounter = state.counterItems.find(
        (product) => payload._id === product._id
      );
      if (state.onCounter) {
        state.counterItems = state.counterItems.map((product) =>
          product._id === payload._id
            ? {
                ...state.onCounter,
                item_quantity: state.onCounter.item_quantity + 1,
              }
            : product
        );
      } else {
        state.counterItems = [
          ...state.counterItems,
          { ...payload, item_quantity: 1 },
        ];
      }
    },

    lessProductFromCounter: (state, { payload }) => {
      state.onCounter = state.counterItems.find(
        (product) => product._id === payload._id
      );

      if (state.onCounter.item_quantity === 1) {
        state.counterItems = state.counterItems.filter(
          (product) => payload._id !== product._id
        );
      } else {
        state.counterItems = state.counterItems.map((product) =>
          product._id === payload._id
            ? {
                ...state.onCounter,
                item_quantity: state.onCounter.item_quantity - 1,
              }
            : product
        );
      }
    },

    removeProductFromCounter: (state, { payload }) => {
      state.counterItems = state.counterItems.filter(
        (product) => payload._id !== product._id
      );
    },
  },
});

export const {
  addProductToCounter,
  lessProductFromCounter,
  removeProductFromCounter,
} = counterSlice.actions;

export default counterSlice.reducer;
