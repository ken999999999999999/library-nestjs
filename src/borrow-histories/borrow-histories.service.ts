import { Book } from '@/books/schemas/book.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBorrowHistoryDto } from './dto/create-borrow-history.dto';

import {
  BorrowHistory,
  BorrowHistoryDocument,
} from './schemas/borrow-history.schemas';

@Injectable()
export class BorrowHistoriesService {
  constructor(
    @InjectModel(BorrowHistory.name)
    private readonly borrowHistoryModel: Model<BorrowHistoryDocument>,
  ) {}

  async create(
    createBorrowHistoryDto: CreateBorrowHistoryDto,
  ): Promise<BorrowHistory> {
    const createdBorrowHistory = await this.borrowHistoryModel.create({
      book: createBorrowHistoryDto.bookId,
    });
    return createdBorrowHistory;
  }

  async findAll(): Promise<BorrowHistory[]> {
    return this.borrowHistoryModel
      .find()
      .select(BorrowHistory.viewProps)
      .populate(Book.name.toLowerCase(), Book.viewProps)
      .exec();
  }

  async findOne(id: string): Promise<BorrowHistory> {
    return this.borrowHistoryModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedBorrowHistory = await this.borrowHistoryModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedBorrowHistory;
  }
}
