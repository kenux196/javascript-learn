import { DataSource, Repository } from 'typeorm';
import { Board } from './board.entity';
import { Injectable } from '@nestjs/common';
import { SearchBoardDto } from './dto/search-board.dto';

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(private dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }

  async searchByFilter(filter: SearchBoardDto): Promise<Board[]> {
    return await this.createQueryBuilder('board')
      .where('(board.title like :keyword or board.content like :keyword)', {
        keyword: '%' + filter.keyword + '%',
      })
      .andWhere(`board.status = :status`, {
        status: filter.status,
      })
      .orderBy('board.id', 'DESC')
      .getMany();
  }
}
