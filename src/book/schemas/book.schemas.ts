import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  name: string;

  @Prop()
  Publisher: string;

  @Prop()
  Release: Date;

  @Prop()
  author: string;

  @Prop()
  ISBN: string;
}

export const CatSchema = SchemaFactory.createForClass(Book);
