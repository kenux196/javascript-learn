import { BoardStatus } from '../board-status.enum';

export class SearchBoardDto {
  keyword?: string;
  writer?: string;
  status?: BoardStatus;
}
