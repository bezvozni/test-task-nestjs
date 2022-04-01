import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BooksService } from './books.service';
import { Book } from './models/book.model';

@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) {}

    @Post()
    create(@Body() createBookDto: CreateBookDto): Promise<Book> {
      return this.booksService.create(createBookDto);
    }

    @Get('?:limit')
    findOne(@Param('limit') limit: number): void {
      console.log(limit)
    }
}
