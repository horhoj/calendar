import { todoListSlice } from './slice';
import * as selectors from './selectors';

export * from './slice';

export const { actions: todoListActions, reducer: todoListReducer } =
  todoListSlice;
export const todoListSelectors = selectors;
