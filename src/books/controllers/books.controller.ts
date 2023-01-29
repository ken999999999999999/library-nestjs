import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BooksService } from '@/books/services/books.service';
import { CreateBookDto } from '@/books//dto/create-book.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ViewBookDto } from '../dto/view-book.dto';

@Controller('books')
@ApiTags('Book')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiResponse({ type: ViewBookDto })
  async create(@Body() createBookDto: CreateBookDto): Promise<ViewBookDto> {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiResponse({ type: [ViewBookDto] })
  async findAll(): Promise<ViewBookDto[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: ViewBookDto })
  async findOne(@Param('id') id: string): Promise<ViewBookDto> {
    return this.booksService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.booksService.delete(id);
  }
}
