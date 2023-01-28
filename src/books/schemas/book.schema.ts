import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  publisher: string;

  @Prop({ required: true })
  release: Date;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  ISBN: string;

  static viewProps = ['name', 'publisher', 'release'];
}

export const BookSchema = SchemaFactory.createForClass(Book);
