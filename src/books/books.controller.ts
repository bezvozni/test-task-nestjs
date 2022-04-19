import { Body, Controller, Get, ParseArrayPipe, Post, Query } from '@nestjs/common';
import { AddBookDto } from './dto/add-book.dto';
import { GetBooksDto } from './dto/get-books.dto';
import { BooksService } from './books.service';

@Controller('api/books')
export class BooksController {

    constructor(private readonly booksService: BooksService) {}

    @Post()
    addBooks(@Body(new ParseArrayPipe({ items: AddBookDto })) addBooksDto: AddBookDto[]) {
      return this.booksService.addBooks(addBooksDto);
    }

    @Get()
    showRange(@Query() query: GetBooksDto) {
      return this.booksService.showRange(query.start, query.limit);
    }

}
