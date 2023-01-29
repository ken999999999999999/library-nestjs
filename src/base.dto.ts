import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

export class BaseDto {
  @AutoMap()
  @ApiProperty({ type: String })
  _id: mongoose.Schema.Types.ObjectId;

  @AutoMap()
  @ApiProperty()
  createdAt: Date;

  @AutoMap()
  @ApiProperty()
  updatedAt: Date;
}
