import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodosState } from './types';
import { todos } from './todos';

export const initialState: TodosState = {
  todos: [...todos],
  currentDate: '2021-07-19',
};

const TODO_SLICE_NAME = 'todos';

export const todoSlice = createSlice({
  name: TODO_SLICE_NAME,
  initialState,
  reducers: {
    setCurrentDate: (state, action: PayloadAction<string>) => {
      state.currentDate = action.payload;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});
