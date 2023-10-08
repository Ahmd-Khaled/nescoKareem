import { createAsyncThunk } from "@reduxjs/toolkit";
import { resetSate } from "../slices/CategoriesSlice";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";


export const getAllCategories = createAsyncThunk("categories/getAllCategories", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  // console.log("--getAllCategories--------4-----------");

  try {
    const res = await useGetData(`/api/categories`);
    // console.log("----------5-----------reponse returned------");
    // console.log("res-getAllCategories:", res);
    return res;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})


export const getCategoryDetails = createAsyncThunk("categories/getCategoryDetails", async (categId, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  console.log("--getCategoryDetails--------4-----------");

  try {
    const res = await useGetData(`/api/categories/${categId}`);
    console.log("----------5-----------reponse returned------");
    console.log("res-getCategoryDetails:", res);
    return res;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

