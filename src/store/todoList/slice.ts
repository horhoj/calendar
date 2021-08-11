import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoItem } from '../../types/todo';
import { getDateStr } from '../../helpers';
import { TodoListState } from './types';
import { initialValues } from './initialValues';

export const initialState: TodoListState = {
  todos: [...initialValues],
  currentDate: getDateStr(new Date()),
  inc: 100,
};

const TODO_SLICE_NAME = 'todoList';

export const todoListSlice = createSlice({
  name: TODO_SLICE_NAME,
  initialState,
  reducers: {
    setCurrentDate: (state, action: PayloadAction<string>) => {
      state.currentDate = action.payload;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<TodoItem>) => {
      const todo = action.payload;
      const index = state.todos.findIndex((item) => item.id === todo.id);
      state.todos[index] = todo;
    },
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      const id = state.inc + 1;
      state.inc = id;
      const todo: TodoItem = { ...action.payload, id };
      state.todos.push(todo);
    },
  },
});
