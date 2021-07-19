import { Todo } from '../../types/todo';

export interface TodosState {
  todos: TodoList;
}

export type TodoList = Todo[];
