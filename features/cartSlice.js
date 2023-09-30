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
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity == 1) {
            return null;
          } else {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
        }
      });
      state.items = updatedItems.filter((item) => item !== null);
    },

    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
