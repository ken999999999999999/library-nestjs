import mongoose from 'mongoose';

export class CreateBorrowHistoryDto {
  readonly bookId: mongoose.Schema.Types.ObjectId;
}
