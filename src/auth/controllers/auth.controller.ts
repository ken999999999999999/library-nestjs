import { CreateUserDto } from '@/users/dto/create-user.dto';
import { ViewUserDto } from '@/users/dto/view-user.dto';
import { SignInDto } from '@/auth/dto/sign-in.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from '@/auth/services/auth.service';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  @ApiResponse({ type: ViewUserDto })
  async create(@Body() createUserDto: CreateUserDto): Promise<ViewUserDto> {
    return await this.authService.signUp(createUserDto);
  }

  @Post('sign-in')
  @ApiResponse({ type: ViewUserDto })
  async getUser(@Body() signInDto: SignInDto): Promise<ViewUserDto> {
    return await this.authService.validateUser(signInDto);
  }
}
