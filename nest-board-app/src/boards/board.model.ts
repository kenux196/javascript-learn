export interface Board {
  id: string;
  title: string;
  content: string;
  status: BoardStatus;
  createdDate: Date;
  updatedDate: Date;
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
