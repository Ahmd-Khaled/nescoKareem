import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./slices/ProductsSlice";
import CategoriesSlice from "./slices/CategoriesSlice";
import authSlice from "./slices/authSlice";
import FaqsSlice from "./slices/FaqsSlice";
import SettingSlice from "./slices/SettingSlice";
import ReviewSlice from "./slices/ReviewSlice";
import SliderSlice from "./slices/SliderSlice";

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    ProductsSlice: ProductsSlice,
    CategoriesSlice: CategoriesSlice,
    FaqsSlice: FaqsSlice,
    SettingSlice: SettingSlice,
    ReviewSlice: ReviewSlice,
    SliderSlice: SliderSlice
  },
  devTools: true,
})
