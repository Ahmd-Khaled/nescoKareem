import { createSlice } from "@reduxjs/toolkit";
import { createNewUser, logIn } from "../thunkActions/authActions";


const initialState = {
  signUp: [],
  signIn: [],
  isLoading: [],
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: {
    // Create User
    [createNewUser.pending]: (state, action) => {
      state.signUp = [];
      state.isLoading = true;
      state.error = null;
    },
    [createNewUser.fulfilled]: (state, action) => {
      state.signUp = [];
      state.signUp = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [createNewUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Login
    [logIn.pending]: (state, action) => {
      state.signIn = [];
      state.isLoading = true;
      state.error = null;
    },
    [logIn.fulfilled]: (state, action) => {
      state.signIn = [];
      state.signIn = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [logIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
})

export const { resetSate } = authSlice.actions;

export default authSlice.reducer;