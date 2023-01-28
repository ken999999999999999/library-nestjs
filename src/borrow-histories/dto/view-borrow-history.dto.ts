import { ViewBookDto } from '@/books/dto/view-book.dto';
import { Book } from '@/books/schemas/book.schema';
import { AutoMap } from '@automapper/classes';

export class ViewBorrowHistoryDto {
  @AutoMap(() => ViewBookDto)
  book: Book;

  @AutoMap()
  borrowed: Date;

  @AutoMap()
  expired: Date;

  @AutoMap()
  returned?: Date;
}
