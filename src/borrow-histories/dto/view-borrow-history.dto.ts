import { ViewBookDto } from '@/books/dto/view-book.dto';
import { AutoMap } from '@automapper/classes';

export class ViewBorrowHistoryDto {
  @AutoMap(() => ViewBookDto)
  book: ViewBookDto;

  @AutoMap()
  borrowed: Date;

  @AutoMap()
  expired: Date;

  @AutoMap()
  returned?: Date;
}
