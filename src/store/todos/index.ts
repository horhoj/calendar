import { todoSlice } from './slice';
import * as selectors from './selectors';

export * from './slice';

export const { actions: todoActions, reducer: todoReducer } = todoSlice;
export const todoSelectors = selectors;
