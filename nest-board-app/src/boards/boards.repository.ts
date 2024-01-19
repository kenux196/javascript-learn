import { Brackets, DataSource, Repository } from 'typeorm';
import { Board } from './board.entity';
import { Injectable } from '@nestjs/common';
import { SearchBoardDto } from './dto/search-board.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(private dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }

  async searchByFilter(filter: SearchBoardDto): Promise<Board[]> {
    let query = this.createQueryBuilder('board')
      .leftJoin('user', 'user', 'user.id = board.userId')
      .where('1 = 1')
      .orderBy('board.id', 'DESC');

    if (filter.keyword) {
      query = query.andWhere(
        new Brackets((qb) => {
          qb.where('board.title like :keyword or board.content like :keyword', {
            keyword: '%' + filter.keyword + '%',
          });
        }),
      );
    }

    if (filter.user) {
      query = query.andWhere(
        new Brackets((qb) => {
          qb.where('board.userId = :userId', { userId: filter.user.id });
        }),
      );
    }

    if (filter.status) {
      query = query.andWhere(
        new Brackets((qb) => {
          qb.where('board.status = :status', { status: filter.status });
        }),
      );
    }

    return await query.execute();
  }

  async getAllBoardByUser(user: User) {
    const query = this.createQueryBuilder('board')
      .where('board.userId = :userId', { userId: user.id })
      .orderBy('board.id', 'DESC');
    return await query.execute();
  }
}
