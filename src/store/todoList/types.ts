import { TodoItem } from '../../types/todo';

export interface TodoListState {
  todos: TodoItem[];
  currentDate: string;
  inc: number;
}
