import { BoardStatus } from '../board-status.enum';

export class UpdateBoardDto {
  title?: string;
  content?: string;
  status?: BoardStatus;
}
