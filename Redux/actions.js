import axios from "axios";
import {
  getProductsSuccess,
  getProductsFailure,
  getCategoriesSuccess,
  getCategoriesFailure,
} from "../Redux/store";

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    dispatch(getProductsSuccess(res.data));
  } catch (error) {
    dispatch(getProductsFailure(error.message));
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products/categories");
    dispatch(getCategoriesSuccess(res.data));
  } catch (error) {
    dispatch(getCategoriesFailure(error.message));
  }
};
