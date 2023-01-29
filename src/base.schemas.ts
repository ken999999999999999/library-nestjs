import { AutoMap } from '@automapper/classes';
import mongoose from 'mongoose';

export class BaseSchema {
  @AutoMap()
  _id: mongoose.Schema.Types.ObjectId;

  @AutoMap()
  createdAt: Date;

  @AutoMap()
  updatedAt: Date;
}
