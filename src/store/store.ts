import { configureStore } from '@reduxjs/toolkit';
import { todoListReducer } from './todoList';

export const store = configureStore({
  devTools: true,
  reducer: { todo: todoListReducer },
});
