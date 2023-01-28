import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @AutoMap()
  @Prop({ required: true })
  name: string;

  @AutoMap()
  @Prop({ required: true })
  publisher: string;

  @AutoMap()
  @Prop({ required: true })
  release: Date;

  @AutoMap()
  @Prop({ required: true })
  author: string;

  @AutoMap()
  @Prop({ required: true })
  ISBN: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
