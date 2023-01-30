import { ApiProperty } from '@nestjs/swagger';

export class CreateUserCommand {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  confirmPassword: string;
}
