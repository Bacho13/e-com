import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      state.items.push(item);
      state.total += item.price;
      console.log("clicked from cart slice");
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
