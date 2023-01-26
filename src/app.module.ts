import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';

@Module({
  imports: [MongooseModule.forRoot('')],
  controllers: [BookController],
  providers: [BookService],
})
export class AppModule {}
