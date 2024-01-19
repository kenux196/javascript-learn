import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { User } from 'src/users/user.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  status: BoardStatus;

  @Column()
  createdDate: Date;

  @Column()
  updatedDate: Date;

  @ManyToOne((type) => User, (user) => user.boards, { eager: true })
  user: User;
}
