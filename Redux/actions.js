import axios from "axios";
import {
  getProductsSuccess,
  getProductsFailure,
  getCategoriesSuccess,
  getCategoriesFailure,
} from "../Redux/store";

export const fetchProducts = (categoryName) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://dummyjson.com/products/category/${categoryName}`
    );

    dispatch(getProductsSuccess(res));
  } catch (error) {
    dispatch(getProductsFailure(error.message));
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    const res = await axios.get("https://dummyjson.com/products/categories");

    dispatch(getCategoriesSuccess(res.data));
  } catch (error) {
    dispatch(getCategoriesFailure(error.message));
  }
};
