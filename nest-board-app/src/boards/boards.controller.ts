import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { SearchBoardDto } from './dto/search-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  // @Get()
  // getAllBoards(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }

  @Get()
  searchBoard(@Query() filter: SearchBoardDto): Board[] {
    console.log('search filter: ', filter);
    return this.boardsService.searchBoards(filter);
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
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get(':id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Delete(':id')
  deleteBoardById(@Param('id') id: string): void {
    return this.boardsService.deleteById(id);
  }

  @Patch(':id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Board {
    return this.boardsService.updateBoardStatus(id, status);
  }

  @Put(':id')
  updateBoard(
    @Param('id') id: string,
    @Body() updateBoardDto: UpdateBoardDto,
  ): Board {
    return this.boardsService.updateBoard(id, updateBoardDto);
  }
}
