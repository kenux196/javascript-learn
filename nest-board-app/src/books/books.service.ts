import { Injectable } from '@nestjs/common';
import { BooksRepository } from './books.repository';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(private booksRepository: BooksRepository) {}

  async getAllBooks(): Promise<Book[]> {
    return await this.booksRepository.find();
  }
}
