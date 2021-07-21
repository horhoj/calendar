import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types/todo';
import { getDateStr } from '../../helpers/getDateStr';
import { TodosState } from './types';
import { todos } from './todos';

export const initialState: TodosState = {
  todos: [...todos],
  currentDate: getDateStr(new Date()),
  inc: 100,
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
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const todo = action.payload;
      const index = state.todos.findIndex((item) => item.id === todo.id);
      state.todos[index] = todo;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      const id = state.inc + 1;
      state.inc = id;
      const todo: Todo = { ...action.payload, id };
      state.todos.push(todo);
    },
  },
});
