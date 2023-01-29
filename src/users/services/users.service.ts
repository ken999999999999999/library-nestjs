import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { ViewUserDto } from '../dto/view-user.dto';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly _userModel: Model<UserDocument>,
    @InjectMapper() private readonly _mapper: Mapper,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<ViewUserDto> {
    const user = await User.create(
      createUserDto.username,
      createUserDto.email,
      createUserDto.password,
    );

    return this._mapper.mapAsync(
      await this._userModel.create(user),
      User,
      ViewUserDto,
    );
  }

  async findOne(username: string): Promise<User> {
    return this._userModel.findOne<User>({ username }).exec();
  }
}
