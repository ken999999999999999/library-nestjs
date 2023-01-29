import { BaseSchema } from '@/base.schemas';
import { Book } from '@/books/schemas/book.schema';
import { User } from '@/users/schemas/user.schema';
import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type BorrowHistoryDocument = HydratedDocument<BorrowHistory>;

@Schema()
export class BorrowHistory extends BaseSchema {
  @AutoMap(() => Book)
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: Book.name,
    autopopulate: true,
  })
  book: Book;

  @AutoMap(() => User)
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    autopopulate: true,
  })
  borrowedBy: User;

  @AutoMap()
  @Prop({ required: true, default: Date.now() })
  borrowed: Date;

  @AutoMap()
  @Prop({ require: true, default: Date.now() })
  expired: Date;

  @AutoMap()
  @Prop()
  returned?: Date;
}

export const BorrowHistorySchema = SchemaFactory.createForClass(BorrowHistory);
