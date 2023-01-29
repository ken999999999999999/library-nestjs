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
    private readonly _borrowHistoryModel: Model<UserDocument>,
    @InjectMapper() private readonly _mapper: Mapper,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<ViewUserDto> {
    return this._mapper.mapAsync(
      await this._borrowHistoryModel.create(
        new User(
          createUserDto.username,
          createUserDto.email,
          createUserDto.password,
        ),
      ),
      User,
      ViewUserDto,
    );
  }
}
