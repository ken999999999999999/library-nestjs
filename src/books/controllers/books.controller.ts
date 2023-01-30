import { Body, Delete, Get, Param, Post } from '@nestjs/common';
import { BooksService } from '@/books/services/books.service';
import { CreateBookCommand } from '@/books/dto/create-book.command';
import { ApiResponse } from '@nestjs/swagger';
import { BookVm } from '../dto/book.vm';
import { Controller } from '@/decorators/controller.decorator';
import { Roles } from '@/decorators/role.decorator';
import { Role } from '@/roles/role.enum';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @Roles(Role.Admin)
  @ApiResponse({ type: BookVm })
  async create(@Body() createBookDto: CreateBookCommand): Promise<BookVm> {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiResponse({ type: [BookVm] })
  async findAll(): Promise<BookVm[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: BookVm })
  async findOne(@Param('id') id: string): Promise<BookVm> {
    return this.booksService.findOne(id);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  async delete(@Param('id') id: string): Promise<void> {
    return this.booksService.delete(id);
  }
}
