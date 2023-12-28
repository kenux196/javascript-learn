import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

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

  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  deleteById(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }

  updateBoard(id: string, updateBoardDto: UpdateBoardDto): Board {
    const board = this.getBoardById(id);
    if (updateBoardDto.title) {
      board.title = updateBoardDto.title;
    }
    if (updateBoardDto.content) {
      board.content = updateBoardDto.content;
    }
    if (updateBoardDto.status) {
      board.status = updateBoardDto.status;
    }
    board.updatedDate = new Date();
    return board;
  }
}
