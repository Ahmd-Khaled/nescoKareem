import { createSlice } from "@reduxjs/toolkit";
import { getBestSellingProducts, getNewArrivalProducts, getViewProduct } from "../thunkActions/productsActions";


const initialState = {
  newArrivalProducts: [],
  bestSellingProducts: [],
  viewProduct: [],
  isLoading: [],
  error: null,
}

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Get New Arrival Products
    builder.addCase(getNewArrivalProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getNewArrivalProducts.fulfilled, (state, action) => {
      state.newArrivalProducts = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getNewArrivalProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Get Best Selling Products
    builder.addCase(getBestSellingProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getBestSellingProducts.fulfilled, (state, action) => {
      state.bestSellingProducts = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getBestSellingProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Get View Product Details
    builder.addCase(getViewProduct.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getViewProduct.fulfilled, (state, action) => {
      state.viewProduct = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getViewProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = ProductsSlice.actions;

export default ProductsSlice.reducer;