import { BoardStatus } from './board-status.enum';

export interface Board {
  id: string;
  title: string;
  content: string;
  status: BoardStatus;
  createdDate: Date;
  updatedDate: Date;
}
