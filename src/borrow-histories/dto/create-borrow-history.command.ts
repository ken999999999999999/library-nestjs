import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

export class CreateBorrowHistoryCommand {
  @ApiProperty({ type: String })
  readonly bookId: mongoose.Schema.Types.ObjectId;
}
