import { Todo } from '../../types/todo';

export interface TodosState {
  todos: Todo[];
  currentDate: string;
  inc: number;
}
