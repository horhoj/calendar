import { TodoItem, TodoType } from '../../types/todo';
import { GetDefaultValuesConfig } from './types';

export const getFormTitle = (id: number | null): string =>
  id && id > 0 ? `Редактируется заметка с ИД="${id}"` : 'Новая заметка';

export const getDefaultValues = (config: GetDefaultValuesConfig): TodoItem => {
  if (config.type === TodoType.HOLIDAY) {
    return {
      id: config.id,
      date: config.date,
      title: config.title,
      type: TodoType.HOLIDAY,
      budget: '',
    };
  }
  if (config.type === TodoType.EVENT) {
    return {
      id: config.id,
      date: config.date,
      title: config.title,
      type: TodoType.EVENT,
      address: '',
      time: '',
    };
  }

  return {
    id: config.id,
    date: config.date,
    title: config.title,
    type: TodoType.NOTE,
    content: '',
  };
};
