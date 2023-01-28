import { AutoMap } from '@automapper/classes';
import mongoose from 'mongoose';

export class BaseDto {
  @AutoMap()
  _id: mongoose.Schema.Types.ObjectId;
}
