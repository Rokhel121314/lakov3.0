import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

// handle submit funtion for user registration
export const sendRegister = createAsyncThunk(
  "user/register",
  async (formData) => {
    try {
      const { data } = await Axios.post(
        "http://localhost:3001/users",
        formData
      );
      return data;
    } catch (error) {
      console.log("error", error.message);
    }
  }
);

// handle submit function for user login
export const userLogin = createAsyncThunk("user/login", async (loginData) => {
  try {
    const { data } = await Axios.post(
      "http://localhost:3001/users/login",
      loginData,
      { withCredentials: true }
    );
    localStorage.setItem("userData", JSON.stringify(data));
    return data;
  } catch (error) {
    const { status } = error.response.data;
    return status;
  }
});

// CREATE SLICE

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
    isLoading: false,
  },
  reducers: {
    resetUserData: (state) => {
      state.isSuccess = false;
      state.userData = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(sendRegister.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(sendRegister.fulfilled, (state, { payload }) => {
        state.userData = payload;
        state.isLoading = false;
      })

      .addCase(userLogin.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.userData = payload;
        state.isLoading = false;
      });
  },
});

export const { resetUserData } = userSlice.actions;

export default userSlice.reducer;
