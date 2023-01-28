import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BorrowHistoriesController } from './borrow-histories.controller';
import { BorrowHistoriesService } from './borrow-histories.service';
import {
  BorrowHistory,
  BorrowHistorySchema,
} from './schemas/borrow-history.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BorrowHistory.name, schema: BorrowHistorySchema },
    ]),
  ],
  controllers: [BorrowHistoriesController],
  providers: [BorrowHistoriesService],
})
export class BorrowHistoriesModule {}
