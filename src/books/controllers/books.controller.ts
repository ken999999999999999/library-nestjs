import { Body, Delete, Get, Param, Post } from '@nestjs/common';
import { BooksService } from '@/books/services/books.service';
import { CreateBookDto } from '@/books//dto/create-book.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { ViewBookDto } from '../dto/view-book.dto';
import { Controller } from '@/decorators/controller.decorator';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiBearerAuth()
  @ApiResponse({ type: ViewBookDto })
  async create(@Body() createBookDto: CreateBookDto): Promise<ViewBookDto> {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiBearerAuth()
  @ApiResponse({ type: [ViewBookDto] })
  async findAll(): Promise<ViewBookDto[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiResponse({ type: ViewBookDto })
  async findOne(@Param('id') id: string): Promise<ViewBookDto> {
    return this.booksService.findOne(id);
  }

  @Delete(':id')
  @ApiBearerAuth()
  async delete(@Param('id') id: string): Promise<void> {
    return this.booksService.delete(id);
  }
}
