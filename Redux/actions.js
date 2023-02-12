import axios from "axios";

import {
  getProductsSuccess,
  getProductsFailure,
  getCategoriesSuccess,
  getCategoriesFailure,
} from "../Redux/store";

// export const fetchProducts = async (dispatch, categoryName) => {
//   const result = await axios.get(
//     `https://dummyjson.com/products/category/${categoryName}`
//   );
//   console.log(result.data);
//   dispatch(getProductsSuccess(result.data.products));
// };

export const fetchProduct = async (categoryName) => {
  const result = await axios.get(
    `https://dummyjson.com/products/category/${categoryName}`
  );

  return result.data;
};

export const fetchCategories = () => async (dispatch) => {
  try {
    const res = await axios.get("https://dummyjson.com/products/categories");

    dispatch(getCategoriesSuccess(res.data));
  } catch (error) {
    dispatch(getCategoriesFailure(error.message));
  }
};
