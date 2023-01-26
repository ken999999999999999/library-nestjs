import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './book/books.controller';
import { BooksService } from './book/books.service';

@Module({
  imports: [MongooseModule.forRoot('')],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
