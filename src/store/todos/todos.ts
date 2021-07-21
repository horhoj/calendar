import { Todo, TodoType } from '../../types/todo';
import { getDateStr } from '../../helpers/getDateStr';

export const todos: Todo[] = [
  {
    title: 'День рождения напарника',
    budget: '300$',
    date: getDateStr(new Date()),
    type: TodoType.HOLIDAY,
    id: 1,
  },
  {
    title: 'Вечеринка у соседа',
    address: '309 кв.',
    time: '13:59',
    type: TodoType.EVENT,
    date: getDateStr(new Date()),
    id: 2,
  },
  {
    title: 'Заметочка',
    content: 'По дороге после  работы купить хлеба',
    type: TodoType.NOTE,
    date: getDateStr(new Date()),
    id: 3,
  },
];
