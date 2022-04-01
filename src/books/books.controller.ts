import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AddBookDto } from './dto/add-book.dto';
import { RangeBookDto } from './dto/range-book.dto';
import { BooksService } from './books.service';
import { Book } from './models/book.model';

@Controller('api/books')
export class BooksController {

    constructor(private readonly booksService: BooksService) {}

    @Post()
    addBooks(@Body() addBooksDto: AddBookDto[]): Promise<Book[]> {
      return this.booksService.addBooks(addBooksDto);
    }

    @Get()
    showRange(@Query() query: RangeBookDto): Promise<Book[]> {
      return this.booksService.showRange(query);
    }
}
