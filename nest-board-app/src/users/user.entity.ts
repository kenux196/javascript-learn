import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  static async findByUsername(username: string): Promise<User | null> {
    return await this.createQueryBuilder('user')
      .where('user.username = :username', { username })
      .getOne();
  }
}
