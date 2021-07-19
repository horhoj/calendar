import { RootState } from '../types';
import { TodoList } from './types';

export const getTodos = (state: RootState): TodoList => state.todo.todos;
