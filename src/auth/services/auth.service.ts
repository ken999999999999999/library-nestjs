import { CreateUserCommand } from '@/users/dto/create-user.command';
import { UserVm } from '@/users/dto/user.vm';
import { User } from '@/users/schemas/user.schema';
import { UsersService } from '@/users/services/users.service';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInCommand } from '../dto/sign-in.command';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @InjectMapper() private readonly _mapper: Mapper,
  ) {}

  async validateUser(signInDto: SignInCommand): Promise<UserVm> {
    const user = await this.usersService.findOne(signInDto.username);
    if (!(user && (await user.isPasswordMatch(signInDto.password))))
      throw new UnauthorizedException();
    return this._mapper.mapAsync(user, User, UserVm);
  }

  async signUp(createUserDto: CreateUserCommand): Promise<UserVm> {
    return this.usersService.create(createUserDto);
  }

  async login(username: string): Promise<UserVm> {
    const user = await this.usersService.findOne(username);
    return {
      username: user.username,
      email: user.email,
      accessToken: this.jwtService.sign(
        {
          username: user.username,
          sub: user._id,
        },
        {
          secret: process.env.SECRET_KEY,
        },
      ),
    };
  }
}
