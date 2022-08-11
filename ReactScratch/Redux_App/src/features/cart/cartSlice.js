import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../component/cartItems";

const initialState = {
  cartItem: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      let cartItem = state.cartItem.find((e) => e.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrement: (state, { payload }) => {
      let cartItem = state.cartItem.find((e) => e.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    removeItem: (state, { payload }) => {
      state.cartItem = state.cartItem.filter((ele) => ele.id !== payload.id);
    },
    calculateTotals(state) {
      let amount = 0;
      let total = 0;
      state.cartItem.forEach((item) => {
        amount = amount + item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total.toFixed(2);
    },
    addItemToCart(state, { payload }) {
      console.log(payload);
      state.cartItem.push(payload.item);
    },
  },
});
export const {
  increment,
  decrement,
  removeItem,
  calculateTotals,
  addItemToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
