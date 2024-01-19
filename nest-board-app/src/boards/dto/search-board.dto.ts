import { User } from 'src/users/user.entity';
import { BoardStatus } from '../board-status.enum';

export class SearchBoardDto {
  keyword?: string;
  status?: BoardStatus;
  user?: User;
}
