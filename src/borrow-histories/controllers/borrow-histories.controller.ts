import { Body, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { BorrowHistoriesService } from '../services/borrow-histories.service';
import { CreateBorrowHistoryCommand } from '../dto/create-borrow-history.command';
import { BorrowHistoryVm } from '../dto/borrow-history.vm';
import { Controller } from '@/decorators/controller.decorator';

@Controller('borrow-histories')
export class BorrowHistoriesController {
  constructor(
    private readonly borrowHistoriesService: BorrowHistoriesService,
  ) {}

  @Post()
  @ApiResponse({ type: BorrowHistoryVm })
  async create(
    @Body() createBorrowHistoryDto: CreateBorrowHistoryCommand,
  ): Promise<BorrowHistoryVm> {
    return await this.borrowHistoriesService.create(createBorrowHistoryDto);
  }

  @Get()
  @ApiResponse({ type: [BorrowHistoryVm] })
  async findAll(): Promise<BorrowHistoryVm[]> {
    return this.borrowHistoriesService.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: BorrowHistoryVm })
  async findOne(@Param('id') id: string): Promise<BorrowHistoryVm> {
    return this.borrowHistoriesService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.borrowHistoriesService.delete(id);
  }
}
