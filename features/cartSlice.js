import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    addAllItems: (state, action) => {
      state.items = action.payload;
    },
    removeFromCart: (state, action) => {
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = filteredItems;
    },
  },
});

export const { addToCart, addAllItems, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
