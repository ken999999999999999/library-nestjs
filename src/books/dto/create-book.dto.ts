import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
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
