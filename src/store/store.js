import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import cartSlice from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
