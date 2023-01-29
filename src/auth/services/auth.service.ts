import { CreateUserDto } from '@/users/dto/create-user.dto';
import { ViewUserDto } from '@/users/dto/view-user.dto';
import { User } from '@/users/schemas/user.schema';
import { UsersService } from '@/users/services/users.service';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from '../dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @InjectMapper() private readonly _mapper: Mapper,
  ) {}

  async validateUser(signInDto: SignInDto): Promise<ViewUserDto> {
    const user = await this.usersService.findOne(signInDto.username);

    if (
      !(user && (await User.isPasswordMatch(signInDto.password, user.password)))
    )
      throw new UnauthorizedException();
    return this._mapper.mapAsync(user, User, ViewUserDto);
  }

  async signUp(createUserDto: CreateUserDto): Promise<ViewUserDto> {
    return this.usersService.create(createUserDto);
  }

  async login(username: string): Promise<ViewUserDto> {
    const user = await this.usersService.findOne(username);
    return {
      username: user.username,
      email: user.email,
      accessToken: this.jwtService.sign({
        username: user.username,
        sub: user._id,
      }),
    };
  }
}
