import { RootState } from '../types';
import { TodoList } from './types';

export const getTodos = (state: RootState): TodoList =>
  state.todo.todos.filter((item) => item.date === state.todo.currentDate);

export const getDate = (state: RootState): string => state.todo.currentDate;
