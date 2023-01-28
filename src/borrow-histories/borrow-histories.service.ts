import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBorrowHistoryDto } from './dto/create-borrow-history.dto';
import { ViewBorrowHistoryDto } from './dto/view-borrow-history.dto';

import {
  BorrowHistory,
  BorrowHistoryDocument,
} from './schemas/borrow-history.schemas';

@Injectable()
export class BorrowHistoriesService {
  constructor(
    @InjectModel(BorrowHistory.name)
    private readonly _borrowHistoryModel: Model<BorrowHistoryDocument>,
    @InjectMapper() private readonly _mapper: Mapper,
  ) {}

  async create(
    createBorrowHistoryDto: CreateBorrowHistoryDto,
  ): Promise<BorrowHistory> {
    const createdBorrowHistory = await this._borrowHistoryModel.create({
      book: createBorrowHistoryDto.bookId,
    });
    return createdBorrowHistory;
  }

  async findAll(): Promise<ViewBorrowHistoryDto[]> {
    return this._mapper.mapArrayAsync(
      await this._borrowHistoryModel.find().populate('book'),
      BorrowHistory,
      ViewBorrowHistoryDto,
    );
  }

  async findOne(id: string): Promise<BorrowHistory> {
    return this._borrowHistoryModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedBorrowHistory = await this._borrowHistoryModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedBorrowHistory;
  }
}
