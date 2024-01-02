import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BookCategory } from './book-category.enum';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  category: BookCategory;

  @Column()
  summary: string;

  @Column()
  cratedDate: Date;

  @Column()
  updatedDate: Date;
}
