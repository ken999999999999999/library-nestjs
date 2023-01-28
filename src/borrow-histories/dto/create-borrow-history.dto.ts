import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

export class CreateBorrowHistoryDto {
  @ApiProperty({ type: String })
  readonly bookId: mongoose.Schema.Types.ObjectId;
}
