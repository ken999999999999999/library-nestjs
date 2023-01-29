import { ApiProperty } from '@nestjs/swagger';

export class ViewUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;
}
