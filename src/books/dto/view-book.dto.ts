import { BaseDto } from '@/base.dto';
import { AutoMap } from '@automapper/classes';

export class ViewBookDto extends BaseDto {
  @AutoMap()
  name: string;

  @AutoMap()
  publisher: string;

  @AutoMap()
  released: Date;

  @AutoMap()
  author: string;

  @AutoMap()
  ISBN: string;
}
