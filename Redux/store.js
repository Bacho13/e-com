import { createSlice, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsSuccess: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getProductsFailure: (state, action) => {
      state.items = [];
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategoriesSuccess: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getCategoriesFailure: (state, action) => {
      state.items = [];
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    categories: categoriesSlice.reducer,
    cart: cartReducer,
  },
});

export const { getProductsSuccess, getProductsFailure } = productsSlice.actions;
export const { getCategoriesSuccess, getCategoriesFailure } =
  categoriesSlice.actions;

export default store;
