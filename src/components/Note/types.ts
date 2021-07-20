import { Todo } from '../../types/todo';

export interface NoteProps {
  data: NoteData;
  sendEvent(event: NoteDataEvent): void;
}

export type NoteData = Todo;

export enum NoteDataEventType {
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
}

export interface NoteDataEvent {
  id: number;
  type: NoteDataEventType;
}
