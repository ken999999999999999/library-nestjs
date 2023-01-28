import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBorrowHistoryDto } from '../dto/create-borrow-history.dto';
import { ViewBorrowHistoryDto } from '../dto/view-borrow-history.dto';

import {
  BorrowHistory,
  BorrowHistoryDocument,
} from '../schemas/borrow-history.schema';

@Injectable()
export class BorrowHistoriesService {
  constructor(
    @InjectModel(BorrowHistory.name)
    private readonly _borrowHistoryModel: Model<BorrowHistoryDocument>,
    @InjectMapper() private readonly _mapper: Mapper,
  ) {}

  async create(
    createBorrowHistoryDto: CreateBorrowHistoryDto,
  ): Promise<ViewBorrowHistoryDto> {
    return this._mapper.mapAsync(
      await this._borrowHistoryModel.create({
        book: createBorrowHistoryDto.bookId,
      }),
      BorrowHistory,
      ViewBorrowHistoryDto,
    );
  }

  async findAll(): Promise<ViewBorrowHistoryDto[]> {
    return this._mapper.mapArrayAsync(
      await this._borrowHistoryModel.find().populate('book'),
      BorrowHistory,
      ViewBorrowHistoryDto,
    );
  }

  async findOne(id: string): Promise<ViewBorrowHistoryDto> {
    return this._mapper.mapAsync(
      await this._borrowHistoryModel.findOne({ _id: id }),
      BorrowHistory,
      ViewBorrowHistoryDto,
    );
  }

  async delete(id: string) {
    return this._borrowHistoryModel.findByIdAndRemove({ _id: id }).exec();
  }
}
