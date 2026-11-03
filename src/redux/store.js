import { configureStore } from '@reduxjs/toolkit';
import insuranceReducer from './insuranceSlice';

export const store = configureStore({
  reducer: {
    insurance: insuranceReducer,
  },
});

