import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuant: 0,
  subTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = {
        ...action.payload.data,
        itemQuant: action.payload.quantity,
      };
      state.items.push(item);
      state.totalQuant = action.payload.quantity;
    },
    decreaseItemQuant(state, action) {
      if (state.items[action.payload].itemQuant > 1) {
        state.items[action.payload].itemQuant -= 1;
        state.totalQuant--;
      } else if (state.items[action.payload].itemQuant === 1) {
        state.items.splice(action.payload, 1);
        state.totalQuant--;
      }
    },
    increaseItemQuant(state, action) {
      state.items[action.payload].itemQuant += 1;
      state.totalQuant++;
    },
    getSubTotal(state) {
      function getTotal(total, item) {
        return (total += item.price * item.itemQuant);
      }

      state.subTotal = state.items.reduce(getTotal, 0);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  clearCart,
  decreaseItemQuant,
  increaseItemQuant,
  getSubTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
