export interface NoteProps {
  data: NoteData;
}

export interface NoteData {
  title: string;
  budget?: string;
  address?: string;
  time?: string;
  content?: string;
}
