import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let tempProduct = action.payload;
      state.cartItems.push(tempProduct);
      cartTotalQuantity: state.cartItems.cartTotalQuantity + 1,
        console.log("clicked");
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    quantPlus: (state) => {
      state.cartItems.quant + 1;
      console.log("clicked plus ");
    },

    quantMinus: (state) => {
      state.cartItems.quant - 1;
    },
  },
});

export const { addToCart, clearCart, quantPlus, quantMinus } =
  cartSlice.actions;

export default cartSlice.reducer;
