import { CreateUserCommand } from '@/users/dto/create-user.command';
import { UserVm } from '@/users/dto/user.vm';
import { SignInCommand } from '@/auth/dto/sign-in.command';
import { Body, Post, UseGuards } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AuthService } from '@/auth/services/auth.service';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { Public } from '../../decorators/public.decorator';
import { Controller } from '@/decorators/controller.decorator';
@Controller('auth')
@Public()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  @ApiResponse({ type: UserVm })
  async create(@Body() createUserDto: CreateUserCommand): Promise<UserVm> {
    return await this.authService.signUp(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  @ApiResponse({ type: UserVm })
  async getUser(@Body() signInDto: SignInCommand): Promise<UserVm> {
    return this.authService.login(signInDto.username);
  }
}
