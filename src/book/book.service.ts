import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  getBook(): string {
    return 'Get a book!';
  }
}
