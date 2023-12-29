import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsMemoryService } from './boards-memory.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository])],
  controllers: [BoardsController],
  providers: [BoardsMemoryService],
})
export class BoardsModule {}
