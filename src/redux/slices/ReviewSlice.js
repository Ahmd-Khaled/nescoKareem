import { createSlice } from "@reduxjs/toolkit";
import { addReview } from "../thunkActions/reviewActions";


const initialState = {
  review: [],
  isLoading: [],
  error: null,
}

const ReviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Add Review to Product
    builder.addCase(addReview.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addReview.fulfilled, (state, action) => {
      state.review = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addReview.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = ReviewSlice.actions;

export default ReviewSlice.reducer;