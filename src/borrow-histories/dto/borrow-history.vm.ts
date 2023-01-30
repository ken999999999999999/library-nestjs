import { BaseDto } from '@/base.dto';
import { BookVm } from '@/books/dto/book.vm';
import { UserVm } from '@/users/dto/user.vm';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class BorrowHistoryVm extends BaseDto {
  @ApiProperty()
  @AutoMap(() => BookVm)
  book: BookVm;

  @ApiProperty()
  @AutoMap(() => UserVm)
  borrowedBy: UserVm;

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
