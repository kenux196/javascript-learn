import { BoardStatus } from '../board.model';

export class UpdateBoardDto {
  title?: string;
  content?: string;
  status?: BoardStatus;
}
