import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from '@/books/controllers/books.controller';
import { BooksService } from '@/books/services/books.service';
import { Book, BookSchema } from '@/books/schemas/book.schema';
import { BooksProfile } from './books.profile';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [BooksController],
  providers: [BooksService, BooksProfile],
})
export class BooksModule {}
