import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './models/book.model'
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
    imports: [SequelizeModule.forFeature([Book])],
    providers: [BooksService],
    controllers: [BooksController],
  })
export class BooksModule {}
