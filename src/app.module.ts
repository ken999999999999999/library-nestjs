import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from '@/books/books.module';
import { BorrowHistoriesModule } from '@/borrow-histories/borrow-histories.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

let envFilePath = '.env.development';

console.log(`Running in ${process.env.NODE_ENV}`);

if (process.env.NODE_ENV === 'PRODUCTION') {
  envFilePath = '.env.production';
}
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING, {
      connectionFactory: (connection) => {
        connection.plugin(require('mongoose-autopopulate'));
        connection.plugin((schema) => {
          schema.timestamps = true;
        });
        return connection;
      },
    }),
    BooksModule,
    BorrowHistoriesModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
