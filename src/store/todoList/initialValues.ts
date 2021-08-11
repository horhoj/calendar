import { TodoItem, TodoType } from '../../types/todo';
import { getDateStr } from '../../helpers';

const currentDate = new Date();

const oldDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate() - 2,
);

const newDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate() + 2,
);

export const initialValues: TodoItem[] = [
  {
    title: 'День рождения напарника',
    budget: '300$',
    date: getDateStr(currentDate),
    type: TodoType.HOLIDAY,
    id: 1,
  },
  {
    title: 'Вечеринка у соседа',
    address: '309 кв.',
    time: '13:59',
    type: TodoType.EVENT,
    date: getDateStr(currentDate),
    id: 2,
  },
  {
    title: 'Заметочка',
    content: 'По дороге после  работы купить хлеба',
    type: TodoType.NOTE,
    date: getDateStr(currentDate),
    id: 3,
  },
  {
    title: 'Это старая заметочка',
    content: 'По дороге после работы купить молочка',
    type: TodoType.NOTE,
    date: getDateStr(oldDate),
    id: 4,
  },
  {
    title: 'Это новая вечеринка у соседа',
    address: '309 кв.',
    time: '15:59',
    type: TodoType.EVENT,
    date: getDateStr(newDate),
    id: 5,
  },
  {
    title: 'Это новая заметочка',
    content: 'Сходить в тренажерку',
    type: TodoType.NOTE,
    date: getDateStr(newDate),
    id: 6,
  },
];
