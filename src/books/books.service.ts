import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './models/book.model';
import { AddBookDto } from './dto/add-book.dto';
import { Op } from 'sequelize';

@Injectable()
export class BooksService {

    constructor(@InjectModel(Book) private readonly bookModel: typeof Book) {}

    addBooks(books: AddBookDto[]) {
        return this.bookModel.bulkCreate(books);
    }

    showRange(start:number, limit:number) {
        const from = start;
        const to = from + limit - 1;
        
        //https://stackoverflow.com/questions/43115151
        return this.bookModel.findAll({
            where: {
                id: {
                    [Op.between]: [from, to]
                }
            }
        });
    }

}
