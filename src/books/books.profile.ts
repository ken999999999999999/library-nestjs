import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { ViewBookDto } from './dto/view-book.dto';
import { Book } from './schemas/book.schema';

@Injectable()
export class BooksProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Book, ViewBookDto);
    };
  }
}
