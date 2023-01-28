import { BaseDto } from '@/base.dto';
import { ViewBookDto } from '@/books/dto/view-book.dto';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class ViewBorrowHistoryDto extends BaseDto {
  @ApiProperty()
  @AutoMap(() => ViewBookDto)
  book: ViewBookDto;

  @ApiProperty()
  @AutoMap()
  borrowed: Date;

  @ApiProperty()
  @AutoMap()
  expired: Date;

  @ApiProperty()
  @AutoMap()
  returned?: Date;
}
