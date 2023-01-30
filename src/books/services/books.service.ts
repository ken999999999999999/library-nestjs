import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookCommand } from '@/books/dto/create-book.command';
import { Book, BookDocument } from '@/books/schemas/book.schema';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { BookVm } from '../dto/book.vm';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private readonly _bookModel: Model<BookDocument>,
    @InjectMapper() private readonly _mapper: Mapper,
  ) {}

  async create(createBookDto: CreateBookCommand): Promise<BookVm> {
    return this._mapper.mapAsync(
      await this._bookModel.create(createBookDto),
      Book,
      BookVm,
    );
  }

  async findAll(): Promise<BookVm[]> {
    return this._mapper.mapArrayAsync(
      await this._bookModel.find().exec(),
      Book,
      BookVm,
    );
  }

  async findOne(id: string): Promise<BookVm> {
    return this._mapper.mapAsync(
      await this._bookModel.findOne({ _id: id }),
      Book,
      BookVm,
    );
  }

  async delete(id: string): Promise<void> {
    this._bookModel.findByIdAndRemove({ _id: id }).exec();
    return;
  }
}
