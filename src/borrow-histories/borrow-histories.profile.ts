import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { BorrowHistory } from './schemas/borrow-history.schema';
import { ViewBorrowHistoryDto } from './dto/view-borrow-history.dto';

@Injectable()
export class BorrowHistoriesProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, BorrowHistory, ViewBorrowHistoryDto);
    };
  }
}
