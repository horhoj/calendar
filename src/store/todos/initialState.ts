import { TodoType } from '../../types/todo';
import { TodosState } from './types';

export const initialState: TodosState = {
  todos: [
    {
      title: 'День рождения собаки',
      budget: '300$',
      date: new Date(),
      type: TodoType.HOLIDAY,
      id: 1,
    },
    {
      title: 'Пьянка у соседа',
      address: '309 кв.',
      time: '13:59',
      type: TodoType.EVENT,
      date: new Date(),
      id: 2,
    },
    {
      title: 'Заметочка',
      content: 'По дороге после  работы купить хлеба',
      type: TodoType.NOTE,
      date: new Date(),
      id: 3,
    },
  ],
};
