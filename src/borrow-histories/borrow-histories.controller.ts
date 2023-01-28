import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BorrowHistoriesService } from './borrow-histories.service';
import { CreateBorrowHistoryDto } from './dto/create-borrow-history.dto';
import { BorrowHistory } from './schemas/borrow-history.schemas';

@Controller('borrow-histories')
export class BorrowHistoriesController {
  constructor(
    private readonly borrowHistoriesService: BorrowHistoriesService,
  ) {}
  @Post()
  async create(@Body() createBorrowHistoryDto: CreateBorrowHistoryDto) {
    await this.borrowHistoriesService.create(createBorrowHistoryDto);
  }

  @Get()
  async findAll(): Promise<BorrowHistory[]> {
    return this.borrowHistoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<BorrowHistory> {
    return this.borrowHistoriesService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.borrowHistoriesService.delete(id);
  }
}
