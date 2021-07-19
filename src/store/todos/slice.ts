import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoList } from './types';
import { initialState } from './initialState';

const TODO_SLICE_NAME = 'todos';

export const todoSlice = createSlice({
  name: TODO_SLICE_NAME,
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<TodoList>) => {
      state.todos = action.payload;
    },
  },
});
