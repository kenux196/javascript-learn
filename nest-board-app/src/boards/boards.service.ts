import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  // createBoard(title: string, content: string): Board {
  createBoard(createBoardDto: CreateBoardDto): Board {
    const { title, content } = createBoardDto;
    const date = new Date();
    const board: Board = {
      id: uuid(),
      title,
      content,
      status: BoardStatus.PUBLIC,
      createdDate: date,
      updatedDate: date,
    };
    this.boards.push(board);
    return board;
  }
}
