import { Todo, TodoType } from '../../types/todo';

export const todos: Todo[] = [
  {
    title: 'День рождения собаки',
    budget: '300$',
    date: '2021-07-19',
    type: TodoType.HOLIDAY,
    id: 1,
  },
  {
    title: 'Пьянка у соседа',
    address: '309 кв.',
    time: '13:59',
    type: TodoType.EVENT,
    date: '2021-07-19',
    id: 2,
  },
  {
    title: 'Заметочка',
    content: 'По дороге после  работы купить хлеба',
    type: TodoType.NOTE,
    date: '2021-07-19',
    id: 3,
  },
];
