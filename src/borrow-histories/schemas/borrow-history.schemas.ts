import { Book } from '@/books/schemas/book.schema';
import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type BorrowHistoryDocument = HydratedDocument<BorrowHistory>;

@Schema()
export class BorrowHistory {
  @AutoMap(() => Book)
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Book' })
  book: Book;

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
