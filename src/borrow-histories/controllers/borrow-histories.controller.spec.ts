import { Test, TestingModule } from '@nestjs/testing';
import { BorrowHistoriesController } from './borrow-histories.controller';

describe('BorrowHistoriesController', () => {
  let controller: BorrowHistoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BorrowHistoriesController],
    }).compile();

    controller = module.get<BorrowHistoriesController>(
      BorrowHistoriesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
