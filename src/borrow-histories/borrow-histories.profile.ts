import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { BorrowHistory } from './schemas/borrow-history.schema';
import { BorrowHistoryVm } from './dto/borrow-history.vm';

@Injectable()
export class BorrowHistoriesProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, BorrowHistory, BorrowHistoryVm);
    };
  }
}
