import { Book } from '@/books/schemas/book.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type BorrowHistoryDocument = HydratedDocument<BorrowHistory>;

@Schema()
export class BorrowHistory {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Book' })
  book: Book;

  @Prop({ required: true, default: Date.now() })
  borrowed: Date;

  @Prop({ require: true, default: Date.now() })
  expired: Date;

  @Prop()
  returned: Date;

  static viewProps = ['book', 'borrowed', 'expired'];
}

export const BorrowHistorySchema = SchemaFactory.createForClass(BorrowHistory);
