import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const checkExistingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (checkExistingItem) {
        checkExistingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeItemFromCart: (state, action) => {
      const checkItem = state.items.filter(
        (item) => item.id === action.payload.id
      );
      if (checkItem.length > 0) {
        if (checkItem[0].quantity == 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          checkItem[0].quantity -= 1;
        }
      }
    },

    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
