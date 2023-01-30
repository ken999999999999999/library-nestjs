import { ApiProperty } from '@nestjs/swagger';

export class SignInCommand {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
