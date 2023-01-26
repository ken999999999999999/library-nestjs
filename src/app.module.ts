import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './book/books.controller';
import { BookService } from './book/books.service';

@Module({
  imports: [MongooseModule.forRoot('')],
  controllers: [BookController],
  providers: [BookService],
})
export class AppModule {}
