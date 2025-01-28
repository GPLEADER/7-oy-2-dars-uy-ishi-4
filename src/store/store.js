import { configureStore } from '@reduxjs/toolkit';
import playersReducer from './playersListSlice';

export const store = configureStore({
  reducer: {
    players: playersReducer,
  },
});