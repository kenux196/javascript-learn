import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { SearchBoardDto } from './dto/search-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { BoardsService } from './boards.service';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  searchBoard(@Query() filter: SearchBoardDto): Promise<Board[]> {
    console.log('search filter: ', filter);
    return this.boardsService.searchBoards(filter);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get(':id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }

  @Delete(':id')
  deleteBoardById(@Param('id') id: number): Promise<void> {
    return this.boardsService.deleteById(id);
  }

  @Put(':id')
  updateBoard(
    @Param('id') id: number,
    @Body('status', BoardStatusValidationPipe) updateBoardDto: UpdateBoardDto,
  ): Promise<Board> {
    return this.boardsService.updateBoard(id, updateBoardDto);
  }
}
