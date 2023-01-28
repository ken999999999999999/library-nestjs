import { BaseDto } from '@/base.dto';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class ViewBookDto extends BaseDto {
  @ApiProperty()
  @AutoMap()
  name: string;

  @ApiProperty()
  @AutoMap()
  publisher: string;

  @ApiProperty()
  @AutoMap()
  released: Date;

  @ApiProperty()
  @AutoMap()
  author: string;

  @ApiProperty()
  @AutoMap()
  ISBN: string;
}
