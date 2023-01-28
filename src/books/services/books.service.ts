import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from '@/books/dto/create-book.dto';
import { Book, BookDocument } from '@/books/schemas/book.schema';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { ViewBookDto } from '../dto/view-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private readonly _bookModel: Model<BookDocument>,
    @InjectMapper() private readonly _mapper: Mapper,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<ViewBookDto> {
    return this._mapper.mapAsync(
      await this._bookModel.create(createBookDto),
      Book,
      ViewBookDto,
    );
  }

  async findAll(): Promise<ViewBookDto[]> {
    return this._mapper.mapArrayAsync(
      await this._bookModel.find().exec(),
      Book,
      ViewBookDto,
    );
  }

  async findOne(id: string): Promise<ViewBookDto> {
    return this._mapper.mapAsync(
      await this._bookModel.findOne({ _id: id }),
      Book,
      ViewBookDto,
    );
  }

  async delete(id: string) {
    return this._bookModel.findByIdAndRemove({ _id: id }).exec();
  }
}
