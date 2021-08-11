export enum TodoType {
  HOLIDAY = 'Праздник',
  EVENT = 'Событие',
  NOTE = 'Заметка',
}

interface Common {
  id: number;
  date: string;
  title: string;
  type: TodoType;
}

interface TodoHoliday extends Common {
  type: TodoType.HOLIDAY;
  budget: string;
}

interface TodoEvent extends Common {
  type: TodoType.EVENT;
  address: string;
  time: string;
}

interface TodoNote extends Common {
  type: TodoType.NOTE;
  content: string;
}

export type TodoItem = TodoHoliday | TodoEvent | TodoNote;
