import { Body, Controller, Get, HttpException, Post, Query } from '@nestjs/common';
import { AddBookDto } from './dto/add-book.dto';
import { RangeBookDto } from './dto/range-book.dto';
import { BooksService } from './books.service';
import { Book } from './models/book.model';
import { IsInt } from 'sequelize-typescript';

@Controller('api/books')
export class BooksController {

    constructor(private readonly booksService: BooksService) {}

    @Post()
    addBooks(@Body() addBooksDto: AddBookDto[]): Promise<Book[]> {
      return this.booksService.addBooks(addBooksDto);
    }

    @Get()
    showRange(@Query() query: RangeBookDto): Promise<Book[]> {

      if (!query.start || !query.limit) {
        throw new HttpException('Параметры start и limit обязательны', 400);
      }

      const start = Number(query.start);
      const limit = Number(query.limit);
    
      if (!Number.isInteger(start) || !Number.isInteger(limit)) {
        throw new HttpException('Параметры должны быть целыми числами', 400);
      }

      if (start < 1 || limit < 1) {
        throw new HttpException('Параметры не могут быть меньше 1', 400);
      }

      return this.booksService.showRange(start, limit);
    }
}
