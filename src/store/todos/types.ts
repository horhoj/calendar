import { Todo } from '../../types/todo';

export interface TodosState {
  todos: TodoList;
  currentDate: string;
}

export type TodoList = Todo[];
