import { AutoMap } from '@automapper/classes';
import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export class BaseSchema {
  @AutoMap()
  @Prop()
  _id: mongoose.Schema.Types.ObjectId;
}
