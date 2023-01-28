import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BorrowHistoriesController } from './borrow-histories.controller';
import { BorrowHistoriesProfile } from './borrow-histories.profile';
import { BorrowHistoriesService } from './borrow-histories.service';
import {
  BorrowHistory,
  BorrowHistorySchema,
} from './schemas/borrow-history.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BorrowHistory.name, schema: BorrowHistorySchema },
    ]),
  ],
  controllers: [BorrowHistoriesController],
  providers: [BorrowHistoriesService, BorrowHistoriesProfile],
})
export class BorrowHistoriesModule {}
