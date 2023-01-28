import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from '@/books/books.module';
import { BorrowHistoriesModule } from '@/borrow-histories/borrow-histories.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/LibraryDb'),
    BooksModule,
    BorrowHistoriesModule,
  ],
})
export class AppModule {}
