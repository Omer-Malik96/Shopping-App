// cartSlice.js
import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state, action.payload];
    },
    deleteProduct: (state, action) => {
      const temp = state.products.filter(id => id != action.payload);
      state.products = temp;
    },
  },
});

export const {addProduct, deleteProduct} = cartSlice.actions;

export const getProducts = state => state.products;

export default cartSlice.reducer;
