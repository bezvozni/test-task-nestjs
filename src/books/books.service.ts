import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './models/book.model';
import { AddBookDto } from './dto/add-book.dto';
import { Op } from 'sequelize';
import { RangeBookDto } from './dto/range-book.dto';

@Injectable()
export class BooksService {

    constructor(@InjectModel(Book) private readonly bookModel: typeof Book) {}

    addBooks(books: AddBookDto[]): Promise<Book[]> {
        return this.bookModel.bulkCreate(books)
    }

    //https://stackoverflow.com/questions/43115151
    async showRange(start, limit): Promise<Book[]> {
        const from = start;
        const to = from + limit - 1;
        
        return this.bookModel.findAll({
            where: {
                id: {
                    [Op.between]: [from, to]
                }
            }
        })
    }
}   
