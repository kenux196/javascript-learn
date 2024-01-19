import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { SearchBoardDto } from './dto/search-board.dto';
import { BoardStatus } from './board-status.enum';
import { BoardRepository as BoardsRepository } from './boards.repository';
import { Board } from './board.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardsRepository) {}

  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const { title, content } = createBoardDto;
    const date = new Date();
    const board = {
      title,
      content,
      status: BoardStatus.PUBLIC,
      createdDate: date,
      updatedDate: date,
      user: user,
    };
    const savedBoard = await this.boardRepository.save(board);
    delete savedBoard.user;
    return savedBoard;
  }

  async getAllBoardByUser(user: User) {
    return await this.boardRepository.getAllBoardByUser(user);
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }

  async searchBoards(filter: SearchBoardDto): Promise<Board[]> {
    return await this.boardRepository.searchByFilter(filter);
  }

  async deleteById(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }

  async updateBoard(
    id: number,
    updateBoardDto: UpdateBoardDto,
  ): Promise<Board> {
    const board = await this.getBoardById(id);
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
    await this.boardRepository.save(board);
    return board;
  }
}
