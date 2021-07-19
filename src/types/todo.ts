export enum TodoType {
  HOLIDAY = 'HOLIDAY',
  EVENT = 'EVENT',
  NOTE = 'NOTE',
}

interface Common {
  id: number;
  date: Date;
  title: string;
  type: TodoType;
}

// export interface TodoItem extends Common {
//   budget?: string;
//   address?: string;
//   time?: string;
//   content?: string;
// }

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

export type Todo = TodoHoliday | TodoEvent | TodoNote;
