import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BorrowHistoriesService } from './borrow-histories.service';
import { CreateBorrowHistoryDto } from './dto/create-borrow-history.dto';
import { ViewBorrowHistoryDto } from './dto/view-borrow-history.dto';

@Controller('borrow-histories')
@ApiTags('borrow-histories')
export class BorrowHistoriesController {
  constructor(
    private readonly borrowHistoriesService: BorrowHistoriesService,
  ) {}

  @Post()
  @ApiResponse({ type: ViewBorrowHistoryDto })
  async create(
    @Body() createBorrowHistoryDto: CreateBorrowHistoryDto,
  ): Promise<ViewBorrowHistoryDto> {
    return await this.borrowHistoriesService.create(createBorrowHistoryDto);
  }

  @Get()
  @ApiResponse({ type: [ViewBorrowHistoryDto] })
  async findAll(): Promise<ViewBorrowHistoryDto[]> {
    return this.borrowHistoriesService.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: ViewBorrowHistoryDto })
  async findOne(@Param('id') id: string): Promise<ViewBorrowHistoryDto> {
    return this.borrowHistoriesService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.borrowHistoriesService.delete(id);
    return;
  }
}
