import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { SearchBoardDto } from './dto/search-board.dto';
import { BoardStatus } from './board-status.enum';
import { BoardRepository as BoardsRepository } from './boards.repository';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardsRepository) {}

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, content, writer } = createBoardDto;
    const date = new Date();
    const board = this.boardRepository.create({
      title,
      content,
      status: BoardStatus.PUBLIC,
      writer: writer,
      createdDate: date,
      updatedDate: date,
    });
    await this.boardRepository.save(board);
    return board;
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
