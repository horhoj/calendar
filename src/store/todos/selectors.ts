import { RootState } from '../types';
import { Todo } from '../../types/todo';

export const getTodos = (state: RootState): Todo[] =>
  state.todo.todos.filter((item) => item.date === state.todo.currentDate);

export const getDate = (state: RootState): string => state.todo.currentDate;

export const getTodo =
  (id: number) =>
  (state: RootState): Todo | undefined =>
    state.todo.todos.find((item) => item.id === id);
