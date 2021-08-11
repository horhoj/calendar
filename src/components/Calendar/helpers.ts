import { TodoItem } from '../../types/todo';
import { getDateStr } from '../../helpers';

export const getTheNumberOfCasesByDate = (
  day: number,
  month: number,
  year: number,
  todoList: TodoItem[],
): number => {
  const date = new Date(year, month, day);
  const dateStr = getDateStr(date);
  return todoList.filter((item) => item.date === dateStr).length;
};

export const checkIsToday = (
  day: number,
  month: number,
  year: number,
  currentDate: Date,
): boolean => {
  const date = new Date(year, month, day);
  const dateStr = getDateStr(date);
  const currentDateStr = getDateStr(currentDate);

  return currentDateStr === dateStr;
};
