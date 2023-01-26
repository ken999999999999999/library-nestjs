import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getHello(): string {
    return this.bookService.getBook();
  }
}
