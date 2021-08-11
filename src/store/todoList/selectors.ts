import { RootState } from '../types';
import { TodoItem } from '../../types/todo';

export const getTodoListForTheCurrentDate = (state: RootState): TodoItem[] =>
  state.todo.todos.filter((item) => item.date === state.todo.currentDate);

export const getDate = (state: RootState): string => state.todo.currentDate;

export const getTodoItem =
  (id: number) =>
  (state: RootState): TodoItem | undefined =>
    state.todo.todos.find((item) => item.id === id);

export const getTodoList = (state: RootState): TodoItem[] => state.todo.todos;
