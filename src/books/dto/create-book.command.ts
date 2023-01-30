import { ApiProperty } from '@nestjs/swagger';

export class CreateBookCommand {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly publisher: string;

  @ApiProperty()
  readonly release: Date;

  @ApiProperty()
  readonly author: string;

  @ApiProperty()
  readonly ISBN: string;
}
