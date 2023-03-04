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
      const existIndex = state.items.findIndex(
        (obj) => obj.id === action.payload.data.id
      );

      if (existIndex >= 0) {
        state.items[existIndex].itemQuant += action.payload.quantity;
      } else {
        const item = {
          ...action.payload.data,
          quantity: action.payload.quantity,
        };
        state.items.push(item);
        state.totalQuant = action.payload.quantity;
      }
    },
    decreaseItemQuant(state, action) {
      if (state.items[action.payload].quantity > 1) {
        state.items[action.payload].quantity -= 1;
        state.totalQuant--;
      } else if (state.items[action.payload].quantity === 1) {
        state.items.splice(action.payload, 1);
        state.totalQuant--;
      }
    },
    increaseItemQuant(state, action) {
      state.items[action.payload].quantity += 1;
      state.totalQuant++;
    },
    getSubTotal(state) {
      function getTotal(total, item) {
        return (total += item.price * item.quantity);
      }

      state.subTotal = parseFloat(state.items.reduce(getTotal, 0).toFixed(2));
    },
    getTotalQuant(state) {
      function getTotalQuant(total, item) {
        return (total += item.itemQuant);
      }

      state.totalQuant = state.items.reduce(getTotalQuant, 0);
    },
    updateCartOfTheUser(state, action) {
      const cart = action.payload;
      state.items = cart.products;
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
  getTotalQuant,
  updateCartOfTheUser,
} = cartSlice.actions;

export default cartSlice.reducer;
