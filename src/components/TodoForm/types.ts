import * as yup from 'yup';
import { TodoType } from '../../types/todo';

export interface TodoFormProps {
  id: number;
  currentDate: string;
}

export interface GetDefaultValuesConfig {
  id: number;
  date: string;
  type: TodoType;
  title: string;
}

export const TodoFormSchema = yup.object({
  title: yup.string().required('Должно быть заполнено'),
});
