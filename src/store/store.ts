import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todos';

export const store = configureStore({
  devTools: true,
  reducer: { todo: todoReducer },
});
