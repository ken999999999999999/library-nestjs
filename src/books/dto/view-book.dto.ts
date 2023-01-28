import { AutoMap } from '@automapper/classes';

export class ViewBookDto {
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
