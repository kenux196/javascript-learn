import { BoardStatus } from '../board.model';

export class SearchBoardDto {
  keyword?: string;
  status?: BoardStatus;
}
