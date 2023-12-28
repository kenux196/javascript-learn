import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  // @Post()
  // createBoard(@Body() body): Board {
  //   console.log(body);
  //   return this.boardsService.createBoard(body.title, body.content);
  // }

  // @Post()
  // createBoard(
  //   @Body('title') title: string,
  //   @Body('content') content: string,
  // ): Board {
  //   return this.boardsService.createBoard(title, content);
  // }

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.createBoard(createBoardDto);
  }
}
