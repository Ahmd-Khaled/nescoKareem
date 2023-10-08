import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";
import { resetSate } from "../slices/CategoriesSlice";

// ------------------------------------------------------------------------
export const getNewArrivalProducts = createAsyncThunk("products/getNewArrivalProducts", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  // console.log("--1---------");

  try {
    // console.log("--2---------");
    const res = await useGetData(`/api/new-arrival-products`);
    // console.log("res-new-arrival-products:", res);
    return res.data.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// ------------------------------------------------------------------------
export const getBestSellingProducts = createAsyncThunk("products/getBestSellingProducts", async (pageNum, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  // console.log("--1---------");

  try {
    // console.log("--2---------");
    const res = await useGetData(`/api/all-best-selling?page=${pageNum}`);
    // console.log("res-all-best-selling:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
// ------------------------------------------------------------------------

export const getViewProduct = createAsyncThunk("products/getViewProduct", async (prodId, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  console.log("--1---------");

  try {
    console.log("--2---------");
    const res = await useGetData(`/api/view-product/${prodId}`);
    console.log("getViewProduct:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})