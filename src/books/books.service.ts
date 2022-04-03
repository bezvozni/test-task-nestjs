import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './models/book.model';
import { AddBookDto } from './dto/add-book.dto';
import { Op } from 'sequelize';

@Injectable()
export class BooksService {

    constructor(@InjectModel(Book) private readonly bookModel: typeof Book) {}

    addBooks(books: AddBookDto[]): Promise<Book[]> {
        return this.bookModel.bulkCreate(books)
    }

    //https://stackoverflow.com/questions/43115151
    async showRange(start:number, limit:number): Promise<Book[]> {
        const from:number = start;
        const to:number = from + limit - 1;
        
        return this.bookModel.findAll({
            where: {
                id: {
                    [Op.between]: [from, to]
                }
            }
        })
    }
}   
